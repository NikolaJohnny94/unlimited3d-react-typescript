import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { useColorsContext } from '../context/colors/ColorsContext'
import { SVG } from './SVG'
import { showSpecificColors } from '../utils'

type Props = {
  setColor: React.Dispatch<React.SetStateAction<string>>
  color: string
  cta: string
}

export const Carousel = ({ setColor, color, cta }: Props) => {
  const { state, dispatch } = useColorsContext()

  switch (cta) {
    case 'body':
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide>
              <button
                className='flex justify-center items-center'
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
                <SVG color='ALUMINIUM' currentColor={color} />
              </button>
            </SwiperSlide>
            <SwiperSlide>
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
                <SVG color='BLACK' currentColor={color} />
              </button>
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'BODY_COLOR',
                state,
                'RED'
              )} flex justify-center items-center`}
            >
              <button
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
                <SVG color='RED' currentColor={color} />
              </button>
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'BODY_COLOR',
                state,
                'BLUE'
              )} flex justify-center items-center`}
            >
              <button
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
                <SVG color='BLUE' currentColor={color} />
              </button>
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'BODY_COLOR',
                state,
                'GREEN'
              )} flex justify-center items-center`}
            >
              <button
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
                <SVG color='GREEN' currentColor={color} />
              </button>
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'BODY_COLOR',
                state,
                'ORANGE'
              )} flex justify-center items-center`}
            >
              <button
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
                <SVG color='ORANGE' currentColor={color} />
              </button>{' '}
            </SwiperSlide>
          </Swiper>
        </div>
      )
    case 'corners':
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide>
              <button
                className='flex justify-center items-center'
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
                  <circle
                    cx='28'
                    cy='28'
                    r='23.5'
                    fill='#232B2C'
                    stroke='#E5E5E5'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'CORNERS_COLOR',
                state,
                'RED'
              )} flex justify-center items-center`}
            >
              <button
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
                  <circle
                    cx='28'
                    cy='28'
                    r='21'
                    fill='url(#paint0_linear_0_169)'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'CORNERS_COLOR',
                state,
                'BLUE'
              )} flex justify-center items-center`}
            >
              <button
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'CORNERS_COLOR',
                state,
                'GREEN'
              )} flex justify-center items-center`}
            >
              <button
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'CORNERS_COLOR',
                state,
                'ORANGE'
              )} flex justify-center items-center`}
            >
              <button
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
            </SwiperSlide>
          </Swiper>
        </div>
      )
    case 'handles':
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide>
              {' '}
              <button
                className='flex justify-center items-center'
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/BLACK',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome MIDNIGHT BLACK',
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
                  <circle
                    cx='28'
                    cy='28'
                    r='23.5'
                    fill='#232B2C'
                    stroke='#E5E5E5'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'HANDLES_COLOR',
                state,
                'RED'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/RED',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome CHERRY RED',
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
                    r='21'
                    fill='url(#paint0_linear_0_169)'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'HANDLES_COLOR',
                state,
                'BLUE'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/BLUE',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome ROYAL BLUE',
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
            </SwiperSlide>
            <SwiperSlide>
              <button
                className='flex justify-center items-center'
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/ALUMINIUM',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome ALUMINIUM',
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'HANDLES_COLOR',
                state,
                'GREEN'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/GREEN',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome SATIN OLIVE GREEN',
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'HANDLES_COLOR',
                state,
                'ORANGE'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
                  dispatch({
                    type: 'HANDLES_COLOR/ORANGE',
                    payload: {
                      handlesColorsParts: [
                        'Handle_base1',
                        'Handle_metal-1',
                        'Handle_telescope-1',
                      ],
                      handlesColor: 'Chrome SATIN BURNT ORANGE',
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
            </SwiperSlide>
          </Swiper>
        </div>
      )
    case 'wheels':
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide>
              <button
                className='flex justify-center items-center'
                onClick={() => {
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
                  <circle
                    cx='28'
                    cy='28'
                    r='23.5'
                    fill='#232B2C'
                    stroke='#E5E5E5'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'WHEELS_COLOR',
                state,
                'RED'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
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
                    r='21'
                    fill='url(#paint0_linear_0_169)'
                  />
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'WHEELS_COLOR',
                state,
                'BLUE'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
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
            </SwiperSlide>
            <SwiperSlide>
              <button
                className='flex justify-center items-center'
                onClick={() => {
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
            </SwiperSlide>
            <SwiperSlide
              className={`${showSpecificColors(
                'WHEELS_COLOR',
                state,
                'GREEN'
              )} flex justify-center items-center`}
            >
              <button
                onClick={() => {
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
            </SwiperSlide>
            <SwiperSlide>
              <button
                className={`${showSpecificColors(
                  'WHEELS_COLOR',
                  state,
                  'ORANGE'
                )} flex justify-center items-center`}
                onClick={() => {
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
            </SwiperSlide>
          </Swiper>
        </div>
      )
  }
}
