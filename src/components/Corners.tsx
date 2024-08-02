import React from 'react'
import { useColorsContext } from '../context/ColorsContext'

const Corners = () => {
  const { dispatch, state } = useColorsContext()
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

  const showSpecificColors = (color: string) => {
    return state.initialComponent !== 'CORNERS_COLOR' &&
      state.initialComponent !== null &&
      color !== state.colorSelected
      ? 'hidden'
      : 'visible'
  }
  return (
    <div
      id='colors'
      className='w-[280px] h-[515px] bg-white absolute top-1/2 right-[10%] transform translate-x-[10%] -translate-y-1/2 flex-shrink-0'
    >
      <div className='flex'>
        <div>Corners</div>
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
              type: 'CORNERS_COLOR/BLACK',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome MIDNIGHT BLACK',
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
              type: 'CORNERS_COLOR/RED',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome CHERRY RED',
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
              type: 'CORNERS_COLOR/BLUE',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome ROYAL BLUE',
                // initialComponent:
                //   state.initialComponent === 'corners_color'
                //     ? 'corners_color'
                //     : state.initialComponent,
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
              type: 'CORNERS_COLOR/ALUMINIUM',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome ALUMINIUM',
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
              type: 'CORNERS_COLOR/GREEN',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome SATIN OLIVE GREEN',
                // initialComponent:
                //   state.initialComponent === 'corners_color'
                //     ? 'corners_color'
                //     : state.initialComponent,
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
              type: 'CORNERS_COLOR/ORANGE',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome SATIN BURNT ORANGE',
                // initialComponent:
                //   state.initialComponent === 'corners_color'
                //     ? 'corners_color'
                //     : state.initialComponent,
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

export default Corners
