import { useEffect, useReducer } from 'react'
import { ColorsContext } from './ColorsContext'
import { colorsReducer } from './colorsReducer'
import { initialState } from './initialState'
import changeColor from '../utils/changeColor'

type Props = {
  children: React.ReactElement
}

export const ColorsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(colorsReducer, initialState)

  useEffect(() => {
    if (state.initialComponent !== null) {
      if (
        state.initialComponent !== 'BODY_COLOR' &&
        state.lastTriggeredBy.includes('BODY_COLOR')
      ) {
        changeColor(
          ['Body_metal_base', 'Body_metal_cover'],
          '06 CHROME SATIN ALUMINUM'
        )
      }

      if (
        state.initialComponent !== 'CORNERS_COLOR' &&
        state.lastTriggeredBy.includes('CORNERS_COLOR')
      ) {
        changeColor(['Corners_base', 'Corners_cover'], 'Chrome ALUMINIUM')
      }

      if (
        state.initialComponent !== 'HANDLES_COLOR' &&
        state.lastTriggeredBy.includes('HANDLES_COLOR')
      ) {
        changeColor(
          ['Handle_base1', 'Handle_metal-1', 'Handle_telescope-1'],
          'Chrome ALUMINIUM'
        )
      }

      if (
        state.initialComponent !== 'WHEELS_COLOR' &&
        state.lastTriggeredBy.includes('WHEELS_COLOR')
      ) {
        changeColor(
          [
            'wheels_base',
            'Wheels_base_cover',
            'Wheels_front_right_base',
            'Wheels_front_left_base',
            'Wheels_back_right_base',
            'Wheels_back_left_base',
            'Wheels_front_right_center',
            'Wheels_front_left_center',
            'Wheels_back_right_center',
            'Wheels_back_left_centar',
          ],
          'Chrome ALUMINIUM'
        )
      }
    }
  }, [state.colorSelected])

  return (
    <ColorsContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorsContext.Provider>
  )
}
