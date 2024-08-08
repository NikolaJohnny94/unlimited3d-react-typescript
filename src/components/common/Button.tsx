import { useColorsContext } from '@/context/colors/ColorsContext'
import { SVG } from './SVG'
import { showSpecificColors } from '@/utils'
import { colors, parts } from '@/consts'
import { Colors, CTA } from '@/enums'
import type { FC } from 'react'

type Props = {
  cta: CTA
  color: Colors
  currentColor: string
}

export const Button: FC<Props> = ({ cta, color, currentColor }) => {
  const { state, dispatch } = useColorsContext()

  const setCtaPayload = (cta: CTA) => {
    switch (cta) {
      case CTA.BODY:
        return {
          bodyColorsParts: parts.body,
          bodyColor: colors.body[color.toLowerCase()],
        }
      case CTA.HANDLES:
        return {
          handlesColorsParts: parts.handles,
          handlesColor: colors.other[color.toLowerCase()],
        }
      case CTA.CORNERS:
        return {
          cornersColorsParts: parts.corners,
          cornersColor: colors.other[color.toLowerCase()],
        }
      case CTA.WHEELS:
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
          ? `${showSpecificColors(`${cta}_COLOR`, state, color)}`
          : ''
      } my-[16px] flex justify-center items-center`}
      onClick={() =>
        dispatch({
          type: `${cta}_COLOR/${color}`,
          payload: setCtaPayload(cta),
        })
      }
    >
      <SVG
        cta={{ isBody: cta === CTA.BODY ? true : false, color, currentColor }}
      />
    </button>
  )
}
