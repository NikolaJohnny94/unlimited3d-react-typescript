import { useColorsContext } from '../context/ColorsContext'

const BodyColor = () => {
  const { state, dispatch } = useColorsContext()

  const showSpecificColors = (color: string) => {
    return state.initialComponent !== 'body-color' &&
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
        <div>BODY COLOR</div>
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
              type: 'body-color/aluminium',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '06 CHROME SATIN ALUMINUM',
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
            <circle cx='28' cy='28' r='21' fill='url(#paint0_linear_0_100)' />
            <circle cx='28' cy='28' r='24' fill='url(#paint1_linear_0_100)' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_100'
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
              <linearGradient
                id='paint1_linear_0_100'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#232B2C' />
                <stop offset='0.511328' stopColor='#E5E5E5' />
                <stop offset='1' stopColor='#21272B' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'body-color/black',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '05 CHROME SATIN MIDNIGHT BLACK',
                initialComponent: 'body_color',
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
            <circle cx='28' cy='28' r='21' fill='url(#paint0_linear_0_108)' />
            <circle cx='28' cy='28' r='24' fill='url(#paint1_linear_0_108)' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_108'
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
              <linearGradient
                id='paint1_linear_0_108'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.2' stopColor='#232B2C' />
                <stop offset='0.511328' stopColor='#6B6B6B' />
                <stop offset='0.8' stopColor='#21272B' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('red')}
          onClick={() =>
            dispatch({
              type: 'body-color/red',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '04 CHROME SATIN CHERRY RED',
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
            <circle cx='28' cy='28' r='27.5' stroke='#121010' />
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_112)' />
            <defs>
              <linearGradient
                id='paint0_linear_0_112'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#6E0404' />
                <stop offset='0.511328' stopColor='#D14048' />
                <stop offset='1' stopColor='#70040A' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('blue')}
          onClick={() =>
            dispatch({
              type: 'body-color/blue',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '01 CHROME SATIN ROYAL BLUE',
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
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_91)' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_91'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#232B2C' />
                <stop offset='0.511328' stopColor='#5563EC' />
                <stop offset='0.511428' stopColor='#5563EB' />
                <stop offset='1' stopColor='#21272B' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('green')}
          onClick={() =>
            dispatch({
              type: 'body-color/green',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '02 CHROME SATIN OLIVE GREEN',
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
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_94)' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_94'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#232B2C' />
                <stop offset='0.511328' stopColor='#ABCB9A' />
                <stop offset='1' stopColor='#21272B' />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className={showSpecificColors('orange')}
          onClick={() =>
            dispatch({
              type: 'body-color/orange',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '03 CHROME SATIN BURNT ORANGE',
                initialComponent: 'body_color',
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
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_97)' />
            <circle cx='28' cy='28' r='27.5' stroke='#E5E5E5' />
            <defs>
              <linearGradient
                id='paint0_linear_0_97'
                x1='4'
                y1='-4.66667'
                x2='52'
                y2='52'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#B15E22' />
                <stop offset='0.511328' stopColor='#D29969' />
                <stop offset='1' stopColor='#B15E22' />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BodyColor
