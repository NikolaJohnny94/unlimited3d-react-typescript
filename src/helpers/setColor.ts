import { Colors } from '@/enums/Colors.enum'
import { CTA } from '@/enums/CTA.enum'
import type { ColorsState } from '@/types/ColorsState.type'

export const setColor = (state: ColorsState, cta: CTA) => {
  switch (cta) {
    case CTA.BODY:
      return state.colors.body
    case CTA.CORNERS:
      return state.colors.corners
    case CTA.HANDLES:
      return state.colors.handles
    case CTA.WHEELS:
      return state.colors.wheels
    default:
      return Colors.ALUMINIUM
  }
}
