import { Swiper, SwiperSlide } from 'swiper/react'
import { useColorsContext } from '@/context/colors/ColorsContext'
import { showSpecificColors } from '@/utils'
import { CTA } from '@/enums'
import 'swiper/css'

type Props = {
  color: string
  cta: CTA
}

export const Carousel = ({ color, cta }: Props) => {
  const { state, dispatch } = useColorsContext()

  switch (cta) {
    case CTA.BODY:
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide className='flex justify-center items-center'>
              <button
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/ALUMINIUM',
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
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24'
                    cy='24'
                    r='18'
                    fill='url(#paint0_linear_0_350)'
                  />
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint1_linear_0_350)'
                  />
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'ALUMINIUM' ? '#121010' : '#E5E5E5'}
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_350'
                      x1='6'
                      y1='-0.500001'
                      x2='42'
                      y2='42'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#B15E22' />
                      <stop offset='0.511328' stop-color='#D29969' />
                      <stop offset='1' stop-color='#B15E22' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_0_350'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#232B2C' />
                      <stop offset='0.511328' stop-color='#E5E5E5' />
                      <stop offset='1' stop-color='#21272B' />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>
              <button
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/BLACK',
                    payload: {
                      bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                      bodyColor: '05 CHROME SATIN MIDNIGHT BLACK',
                    },
                  })
                }
              >
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24'
                    cy='24'
                    r='18'
                    fill='url(#paint0_linear_0_354)'
                  />
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint1_linear_0_354)'
                  />
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'BLACK' ? '#121010' : '#E5E5E5'}
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_354'
                      x1='6'
                      y1='-0.500001'
                      x2='42'
                      y2='42'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#B15E22' />
                      <stop offset='0.511328' stop-color='#D29969' />
                      <stop offset='1' stop-color='#B15E22' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_0_354'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop offset='0.2' stop-color='#232B2C' />
                      <stop offset='0.511328' stop-color='#6B6B6B' />
                      <stop offset='0.8' stop-color='#21272B' />
                    </linearGradient>
                  </defs>
                </svg>
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
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/RED',
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
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'RED' ? '#121010' : '#E5E5E5'}
                  />
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint0_linear_0_358)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_358'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#6E0404' />
                      <stop offset='0.511328' stop-color='#D14048' />
                      <stop offset='1' stop-color='#70040A' />
                    </linearGradient>
                  </defs>
                </svg>
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
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/BLUE',
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
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint0_linear_0_361)'
                  />
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'BLUE' ? '#121010' : '#E5E5E5'}
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_361'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#232B2C' />
                      <stop offset='0.511328' stop-color='#5563EC' />
                      <stop offset='0.511428' stop-color='#5563EB' />
                      <stop offset='1' stop-color='#21272B' />
                    </linearGradient>
                  </defs>
                </svg>
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
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/GREEN',
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
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint0_linear_0_364)'
                  />
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'GREEN' ? '#121010' : '#E5E5E5'}
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_364'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#232B2C' />
                      <stop offset='0.511328' stop-color='#ABCB9A' />
                      <stop offset='1' stop-color='#21272B' />
                    </linearGradient>
                  </defs>
                </svg>
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
                onClick={() =>
                  dispatch({
                    type: 'BODY_COLOR/ORANGE',
                    payload: {
                      bodyColorsParts: ['Body_metal_base', 'Body_metal_cover'],
                      bodyColor: '03 CHROME SATIN BURNT ORANGE',
                    },
                  })
                }
              >
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='24.0001'
                    cy='23.9999'
                    r='20.5714'
                    fill='url(#paint0_linear_0_367)'
                  />
                  <circle
                    cx='24'
                    cy='24'
                    r='23.5'
                    stroke={color === 'ORANGE' ? '#121010' : '#E5E5E5'}
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_367'
                      x1='3.42871'
                      y1='-4.00011'
                      x2='44.5716'
                      y2='44.5713'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#B15E22' />
                      <stop offset='0.511328' stop-color='#D29969' />
                      <stop offset='1' stop-color='#B15E22' />
                    </linearGradient>
                  </defs>
                </svg>
              </button>{' '}
            </SwiperSlide>
          </Swiper>
        </div>
      )
    case CTA.CORNERS:
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide className='flex justify-center items-center'>
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
                onClick={() =>
                  dispatch({
                    type: 'CORNERS_COLOR/BLUE',
                    payload: {
                      cornersColorsParts: ['Corners_base', 'Corners_cover'],
                      cornersColor: 'Chrome ROYAL BLUE',
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
            <SwiperSlide className='flex justify-center items-center'>
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
                onClick={() =>
                  dispatch({
                    type: 'CORNERS_COLOR/GREEN',
                    payload: {
                      cornersColorsParts: ['Corners_base', 'Corners_cover'],
                      cornersColor: 'Chrome SATIN OLIVE GREEN',
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
                onClick={() =>
                  dispatch({
                    type: 'CORNERS_COLOR/ORANGE',
                    payload: {
                      cornersColorsParts: ['Corners_base', 'Corners_cover'],
                      cornersColor: 'Chrome SATIN BURNT ORANGE',
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
    case CTA.HANDLES:
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide className='flex justify-center items-center'>
              <button
                onClick={() =>
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
                onClick={() =>
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
                onClick={() =>
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
            <SwiperSlide className='flex justify-center items-center'>
              <button
                onClick={() =>
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
                onClick={() =>
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
                onClick={() =>
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
    case CTA.WHEELS:
      return (
        <div className='visible lg:hidden xl:hidden px-6'>
          <Swiper slidesPerView={5.5} spaceBetween={30} className='mySwiper'>
            <SwiperSlide className='flex justify-center items-center'>
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
            <SwiperSlide className='flex justify-center items-center'>
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
                'WHEELS_COLOR',
                state,
                'ORANGE'
              )} flex justify-center items-center`}
            >
              <button
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
