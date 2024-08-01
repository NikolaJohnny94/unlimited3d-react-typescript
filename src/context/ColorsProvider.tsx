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
        state.initialComponent !== 'body-color' &&
        state.lastTriggeredBy.includes('body-color')
      ) {
        console.log('Hello?')
        changeColor(
          ['Body_metal_base', 'Body_metal_cover'],
          '06 CHROME SATIN ALUMINUM'
        )
      }

      if (
        state.initialComponent !== 'corners-color' &&
        state.lastTriggeredBy.includes('corners-color')
      ) {
        console.log('Hello?')
        changeColor(['Corners_base', 'Corners_cover'], 'Chrome ALUMINIUM')
      }

      if (
        state.initialComponent !== 'handles_color' &&
        state.lastTriggeredBy.includes('handles_color')
      ) {
        changeColor(
          ['Handle_base1', 'Handle_metal-1', 'Handle_telescope-1'],
          'Chrome ALUMINIUM'
        )
      }

      if (
        state.initialComponent !== 'wheels_color' &&
        state.lastTriggeredBy.includes('wheels_color')
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
