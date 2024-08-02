import React from 'react'
import { useColorsContext } from '../context/ColorsContext'

const Wheels = () => {
  const { state, dispatch } = useColorsContext()
  const showSpecificColors = (color: string) => {
    return state.initialComponent !== 'WHEELS_COLOR' &&
      state.initialComponent !== null &&
      color !== state.colorSelected
      ? 'hidden'
      : 'visible'
  }
  function changeColor(partOne: any, materialOne: any) {
    Unlimited3D.changeMaterials(
      {
        partObjects: [
          {
            parts: partOne,
            material: materialOne,
          },
        ],
      },
      () => {}
    )
  }
  return (
    <div
      id='colors'
      className='w-[280px] h-[515px] bg-white absolute top-1/2 right-[10%] transform translate-x-[10%] -translate-y-1/2 flex-shrink-0'
    >
      <div className='flex'>
        <div>Wheels</div>
        <div className='px-3'>X</div>
      </div>
      <div className='flex'>
        <div>Select Color</div> <div className='px-3'>Current Color</div>
      </div>
      {/* Colors */}
      <div className='grid grid-cols-3'>
        <button
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/BLACK',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome MIDNIGHT BLACK',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='28'
              cy='28'
              r='20.5'
              fill='url(#paint0_linear_0_165)'
              stroke='#E5E5E5'
            />
            <circle cx='28' cy='28' r='23.5' fill='#232B2C' stroke='#E5E5E5' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_165'
                x1='7'
                y1='-0.583334'
                x2='49'
                y2='49'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#B15E22' />
                <stop offset='0.511328' stopColor='#D29969' />
                <stop offset='1' stopColor='#B15E22' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('RED')}
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/RED',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome CHERRY RED',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='28' cy='28' r='21' fill='url(#paint0_linear_0_169)' />
            <circle cx='28' cy='28' r='24' fill='#D14048' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_169'
                x1='7'
                y1='-0.583334'
                x2='49'
                y2='49'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#B15E22' />
                <stop offset='0.511328' stopColor='#D29969' />
                <stop offset='1' stopColor='#B15E22' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('BLUE')}
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/BLUE',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome ROYAL BLUE',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.24'>
              <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
              <circle
                cx='28'
                cy='28'
                r='23.5'
                fill='#5563EB'
                stroke='#E5E5E5'
              />
            </g>
          </svg>
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/ALUMINIUM',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome ALUMINIUM',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='28' cy='28' r='24' fill='#B7B9B9' />
            <circle cx='28' cy='28' r='27.5' stroke='#121010' />
          </svg>
        </button>
        <button
          className={showSpecificColors('GREEN')}
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/GREEN',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome SATIN OLIVE GREEN',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.24'>
              <circle cx='28' cy='28' r='24' fill='#ABCB9A' />
              <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            </g>
          </svg>
        </button>
        <button
          className={showSpecificColors('ORANGE')}
          onClick={() =>
            dispatch({
              type: 'WHEELS_COLOR/ORANGE',
              payload: {
                wheelsColorsParts: [
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
                wheelsColor: 'Chrome SATIN BURNT ORANGE',
              },
            })
          }
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.24'>
              <circle cx='28' cy='28' r='24' fill='#D86410' />
              <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Wheels
