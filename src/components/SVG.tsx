import type { FC } from 'react'

type Props = {
  CTA?: {
    isBody: boolean
    color: string
    currentColor: string
  }
  name?: string
}

const SVG: FC<Props> = ({ CTA, name }) => {
  if (CTA) {
    if (CTA?.isBody) {
      switch (CTA?.color) {
        case 'ALUMINIUM':
          return (
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
                stroke={
                  CTA?.currentColor === 'ALUMINIUM' ? '#121010' : '#E5E5E5'
                }
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
          )
        case 'BLACK':
          return (
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
                stroke={CTA?.currentColor === 'BLACK' ? '#121010' : '#E5E5E5'}
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
          )
        case 'RED':
          return (
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
                stroke={CTA?.currentColor === 'RED' ? '#121010' : '#E5E5E5'}
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
          )
        case 'BLUE':
          return (
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
                stroke={CTA?.currentColor === 'BLUE' ? '#121010' : '#E5E5E5'}
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
          )
        case 'GREEN':
          return (
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
                stroke={CTA?.currentColor === 'GREEN' ? '#121010' : '#E5E5E5'}
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
          )
        case 'ORANGE':
          return (
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
                stroke={CTA?.currentColor === 'ORANGE' ? '#121010' : '#E5E5E5'}
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
          )
      }
    } else {
      switch (CTA?.color) {
        case 'ALUMINIUM':
          return (
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
                stroke={
                  CTA?.currentColor === 'ALUMINIUM' ? '#121010' : '#E5E5E5'
                }
              />
            </svg>
          )
        case 'BLACK':
          return (
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
                stroke={CTA?.currentColor === 'BLACK' ? '#121010' : '#E5E5E5'}
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
          )
        case 'RED':
          return (
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
                stroke={CTA?.currentColor === 'RED' ? '#121010' : '#E5E5E5'}
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
          )
        case 'BLUE':
          return (
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
                  stroke={CTA?.currentColor === 'BLUE' ? '#121010' : '#E5E5E5'}
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
          )
        case 'GREEN':
          return (
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
                  stroke={CTA?.currentColor === 'GREEN' ? '#121010' : '#E5E5E5'}
                />
              </g>
            </svg>
          )
        case 'ORANGE':
          return (
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
                  stroke={
                    CTA?.currentColor === 'ORANGE' ? '#121010' : '#E5E5E5'
                  }
                />
              </g>
            </svg>
          )
      }
    }
  }

  if (name) {
    switch (name) {
      case 'X':
        return (
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
        )
      case 'ARROW LEFT':
        return (
          <svg
            width='25'
            height='15'
            viewBox='0 0 25 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 7.8821L7.375 14M1 7.8821L7.375 1M1 7.8821L25 7.8821'
              stroke='#121010'
              stroke-opacity='1'
            />
          </svg>
        )
      case 'ARROW RIGHT':
        return (
          <svg
            width='25'
            height='15'
            viewBox='0 0 25 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24 7.8821L17.625 14M24 7.8821L17.625 1M24 7.8821L0 7.8821'
              stroke='#121010'
            />
          </svg>
        )
      case 'NO IMAGE':
        return (
          <svg
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='21.0001' cy='21.0001' r='20.5714' fill='#EFEFEF' />
            <circle cx='21.0001' cy='21.0001' r='20.5714' stroke='#121010' />
            <path d='M6.30371 35.5L36.9999 8' stroke='black' stroke-width='2' />
          </svg>
        )

      case 'ADD IMAGE':
        return (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 1V19M1 10H19'
              stroke='#121010'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        )
    }
  }
}

export default SVG
