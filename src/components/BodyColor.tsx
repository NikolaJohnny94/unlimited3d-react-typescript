import { useEffect, useState } from 'react'
import { useColorsContext } from '../context/ColorsContext'
import {
  showSpecificColors,
  cameraModifier,
  defaultCameraModifier,
} from '../utils'

export const BodyColor = () => {
  const [color, setColor] = useState('ALUMINIUM')
  const { state, dispatch, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    cameraModifier('body')
  }, [])

  const closeBodyPanel = () => {
    defaultCameraModifier()
    setCurrentCTA(null)
  }

  return (
    <div
      id='colors'
      className='w-[280px] h-[515px] bg-white absolute top-1/2 right-[10%] transform translate-x-[10%] -translate-y-1/2 flex-shrink-0 rounded-md'
    >
      <div className='flex mt-[32px] mb-[24px] px-6'>
        <div className='color-picker-heading mr-[24px]'>BODY COLOR</div>
        <div
          className=' w-[24px] h-[24px] flex-shrink-0 rounded-lg hover:bg-gray-100 cursor-pointer'
          onClick={closeBodyPanel}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L12 10.9393L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.0607 12L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L12 13.0607L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.9393 12L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z'
              fill='#121010'
            />
          </svg>
        </div>
      </div>
      <div className='flex w-[280px] mx-6 items-start flex-shrink-0'>
        <div className='w-[92px] h-[25px] flex-shrink-0 text-black font-manrope text-base font-normal leading-normal mr-6'>
          Select Color
        </div>
        <div className='w-[116px] h-[25px] flex-shrink-0 text-black font-manrope text-base font-normal leading-normal text-left flex justify-end'>
          {color}
        </div>
      </div>
      {/* Colors */}
      <div className='grid grid-cols-3'>
        <button
          className='my-[16px] flex justify-center items-center'
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/ALUMINIUM',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '06 CHROME SATIN ALUMINUM',
              },
            }),
              setColor('ALUMINIUM')
          }}
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
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'ALUMINIUM' ? '#121010' : '#E5E5E5'}
            />
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
          className='flex justify-center items-center'
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/BLACK',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '05 CHROME SATIN MIDNIGHT BLACK',
              },
            }),
              setColor('BLACK')
          }}
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
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'BLACK' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'BODY_COLOR',
            state,
            'RED'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/RED',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '04 CHROME SATIN CHERRY RED',
              },
            }),
              setColor('RED')
          }}
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
              r='27.5'
              stroke={color === 'RED' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'BODY_COLOR',
            state,
            'BLUE'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/BLUE',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '01 CHROME SATIN ROYAL BLUE',
              },
            }),
              setColor('BLUE')
          }}
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_91)' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'BLUE' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'BODY_COLOR',
            state,
            'GREEN'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/GREEN',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '02 CHROME SATIN OLIVE GREEN',
              },
            }),
              setColor('GREEN')
          }}
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_94)' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'GREEN' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'BODY_COLOR',
            state,
            'ORANGE'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'BODY_COLOR/ORANGE',
              payload: {
                bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                bodyColor: '03 CHROME SATIN BURNT ORANGE',
              },
            }),
              setColor('ORANGE')
          }}
        >
          <svg
            width='56'
            height='56'
            viewBox='0 0 56 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='28' cy='28' r='24' fill='url(#paint0_linear_0_97)' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'ORANGE' ? '#121010' : '#E5E5E5'}
            />
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
