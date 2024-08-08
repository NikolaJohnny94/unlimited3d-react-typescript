import { useColorsContext } from '../context/colors/ColorsContext'
import SVG from './SVG'
import { showSpecificColors } from '../utils'
import { colors, parts } from '../consts'
import type { Dispatch, FC } from 'react'

type Props = {
  CTA: string
  color: string
  currentColor: string
  // setColor: Dispatch<React.SetStateAction<string>>
}

export const Button: FC<Props> = ({ CTA, color, currentColor }) => {
  const { state, dispatch } = useColorsContext()

  const setCtaPayload = (cta: string) => {
    switch (cta) {
      case 'BODY':
        return {
          bodyColorsParts: parts.body,
          bodyColor: colors.body[color.toLowerCase()],
        }
      case 'HANDLES':
        return {
          handlesColorsParts: parts.handles,
          handlesColor: colors.other[color.toLowerCase()],
        }
      case 'CORNERS':
        return {
          cornersColorsParts: parts.corners,
          cornersColor: colors.other[color.toLowerCase()],
        }
      case 'WHEELS':
        return {
          wheelsColorsParts: parts.wheels,
          wheelsColor: colors.other[color.toLowerCase()],
        }
    }
  }

  return (
    <button
      className={`${
        color !== 'ALUMINIUM' && color !== 'BLACK'
          ? `${showSpecificColors(`${CTA}_COLOR`, state, color)}`
          : ''
      } my-[16px] flex justify-center items-center`}
      onClick={() =>
        dispatch({
          type: `${CTA}_COLOR/${color}`,
          payload: setCtaPayload(CTA),
        })
      }
    >
      <SVG
        CTA={{ isBody: CTA === 'BODY' ? true : false, color, currentColor }}
      />
    </button>
  )
}
