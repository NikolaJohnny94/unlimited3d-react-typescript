import React from 'react'

type Props = {
  color: string
  currentColor: string
}

export const SVG = ({ color, currentColor }: Props) => {
  switch (color) {
    case 'ALUMINIUM':
      return (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='24' cy='24' r='18' fill='url(#paint0_linear_0_350)' />
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
            stroke={currentColor === 'ALUMINIUM' ? '#121010' : '#E5E5E5'}
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
      )
    case 'BLACK':
      return (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='24' cy='24' r='18' fill='url(#paint0_linear_0_354)' />
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
            stroke={currentColor === 'BLACK' ? '#121010' : '#E5E5E5'}
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
      )
    case 'RED':
      return (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='24'
            cy='24'
            r='23.5'
            stroke={currentColor === 'RED' ? '#121010' : '#E5E5E5'}
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
      )
    case 'BLUE':
      return (
        <svg
          width='48'
          height='48'
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
            stroke={currentColor === 'BLUE' ? '#121010' : '#E5E5E5'}
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
      )
    case 'GREEN':
      return (
        <svg
          width='48'
          height='48'
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
            stroke={currentColor === 'GREEN' ? '#121010' : '#E5E5E5'}
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
      )
    case 'ORANGE':
      return (
        <svg
          width='48'
          height='48'
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
            stroke={currentColor === 'ORANGE' ? '#121010' : '#E5E5E5'}
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
      )
  }
}
