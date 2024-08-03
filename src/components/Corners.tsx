import { useEffect, useState } from 'react'
import { useColorsContext } from '../context/ColorsContext'
import {
  showSpecificColors,
  cameraModifier,
  defaultCameraModifier,
} from '../utils'

export const Corners = () => {
  const [color, setColor] = useState('ALUMINIUM')
  const { state, dispatch, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    cameraModifier('corners')
  }, [])

  const closeCornersPanel = () => {
    defaultCameraModifier()
    setCurrentCTA(null)
  }

  return (
    <div
      id='colors'
      className='w-[280px] h-[515px] bg-white absolute top-1/2 right-[10%] transform translate-x-[10%] -translate-y-1/2 flex-shrink-0 rounded-md'
    >
      <div className='flex mt-[32px] mb-[24px] px-6'>
        <div className='color-picker-heading mr-[24px]'>Corners Color</div>
        <div
          className=' w-[24px] h-[24px] flex-shrink-0 rounded-lg hover:bg-gray-100 cursor-pointer'
          onClick={closeCornersPanel}
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
              type: 'CORNERS_COLOR/BLACK',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome MIDNIGHT BLACK',
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
            <circle
              cx='28'
              cy='28'
              r='20.5'
              fill='url(#paint0_linear_0_165)'
              stroke='#E5E5E5'
            />
            <circle cx='28' cy='28' r='23.5' fill='#232B2C' stroke='#E5E5E5' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'BLACK' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'CORNERS_COLOR',
            state,
            'RED'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'CORNERS_COLOR/RED',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome CHERRY RED',
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
            <circle cx='28' cy='28' r='21' fill='url(#paint0_linear_0_169)' />
            <circle cx='28' cy='28' r='24' fill='#D14048' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'RED' ? '#121010' : '#E5E5E5'}
            />
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
          className={`${showSpecificColors(
            'CORNERS_COLOR',
            state,
            'BLUE'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'CORNERS_COLOR/BLUE',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome ROYAL BLUE',
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
            <g opacity='0.24'>
              <circle
                cx='28'
                cy='28'
                r='27.5'
                stroke={color === 'BLUE' ? '#121010' : '#E5E5E5'}
              />
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
          className='flex justify-center items-center'
          onClick={() => {
            dispatch({
              type: 'CORNERS_COLOR/ALUMINIUM',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome ALUMINIUM',
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
            <circle cx='28' cy='28' r='24' fill='#B7B9B9' />
            <circle
              cx='28'
              cy='28'
              r='27.5'
              stroke={color === 'ALUMINIUM' ? '#121010' : '#E5E5E5'}
            />
          </svg>
        </button>
        <button
          className={`${showSpecificColors(
            'CORNERS_COLOR',
            state,
            'GREEN'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'CORNERS_COLOR/GREEN',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome SATIN OLIVE GREEN',
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
            <g opacity='0.24'>
              <circle cx='28' cy='28' r='24' fill='#ABCB9A' />
              <circle
                cx='28'
                cy='28'
                r='27.5'
                stroke={color === 'GREEN' ? '#121010' : '#E5E5E5'}
              />
            </g>
          </svg>
        </button>
        <button
          className={`${showSpecificColors(
            'CORNERS_COLOR',
            state,
            'ORANGE'
          )} flex justify-center items-center`}
          onClick={() => {
            dispatch({
              type: 'CORNERS_COLOR/ORANGE',
              payload: {
                cornersColorsParts: ['Corners_base', 'Corners_cover'],
                cornersColor: 'Chrome SATIN BURNT ORANGE',
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
            <g opacity='0.24'>
              <circle cx='28' cy='28' r='24' fill='#D86410' />
              <circle
                cx='28'
                cy='28'
                r='27.5'
                stroke={color === 'ORANGE' ? '#121010' : '#E5E5E5'}
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}
