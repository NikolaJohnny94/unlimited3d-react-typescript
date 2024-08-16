import { useColorsContext } from '@/context/colors/ColorsContext'
import { SVG } from './SVG'
import { showSpecificColors } from '@/utils'
import { colorVariants, modelParts } from '@/consts'
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
          bodyColorsParts: modelParts.body,
          bodyColor: colorVariants.body[color.toLowerCase()],
        }
      case CTA.HANDLES:
        return {
          handlesColorsParts: modelParts.handles,
          handlesColor: colorVariants.other[color.toLowerCase()],
        }
      case CTA.CORNERS:
        return {
          cornersColorsParts: modelParts.corners,
          cornersColor: colorVariants.other[color.toLowerCase()],
        }
      case CTA.WHEELS:
        return {
          wheelsColorsParts: modelParts.wheels,
          wheelsColor: colorVariants.other[color.toLowerCase()],
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
