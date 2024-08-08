import { useEffect, useReducer, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ColorsContext } from './ColorsContext'
import { colorsReducer } from './colorsReducer'
import { initialState } from './initialState'
import { changeColor } from '@/utils'
import { parts, colors } from '@/consts'
import { CTA } from '@/enums'
import { RESET_COLORS } from './types'
import type { ColorVariants } from '@/types'

type Props = {
  children: React.ReactElement
}

export const ColorsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(colorsReducer, initialState)
  const [currentCTA, setCurrentCTA] = useState<CTA | null>(null)
  const [showCTAS, setShowCtas] = useState(true)
  const largeOrGreaterScreen = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  useEffect(() => {
    if (state.initialComponent !== null) {
      if (
        state.initialComponent !== 'BODY_COLOR' &&
        state.lastTriggeredBy.includes('BODY_COLOR')
      ) {
        changeColor(parts.body, (colors as ColorVariants).body.aluminium)
        dispatch({ type: RESET_COLORS })
      }

      if (
        state.initialComponent !== 'CORNERS_COLOR' &&
        state.lastTriggeredBy.includes('CORNERS_COLOR')
      ) {
        changeColor(parts.corners, (colors as ColorVariants).other.aluminium)
        dispatch({ type: RESET_COLORS })
      }

      if (
        state.initialComponent !== 'HANDLES_COLOR' &&
        state.lastTriggeredBy.includes('HANDLES_COLOR')
      ) {
        changeColor(parts.handles, (colors as ColorVariants).other.aluminium)
        dispatch({ type: RESET_COLORS })
      }

      if (
        state.initialComponent !== 'WHEELS_COLOR' &&
        state.lastTriggeredBy.includes('WHEELS_COLOR')
      ) {
        changeColor(parts.wheels, (colors as ColorVariants).other.aluminium)
        dispatch({ type: RESET_COLORS })
      }
    }
  }, [state.colorSelected])

  return (
    <ColorsContext.Provider
      value={{
        state,
        currentCTA,
        showCTAS,
        largeOrGreaterScreen,
        dispatch,
        setCurrentCTA,
        setShowCtas,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
