import { CTA } from '@/enums/CTA.enum'

export const setNextAndPreviousButtons = (cta: CTA) => {
  switch (cta) {
    case CTA.BODY:
      return [CTA.WHEELS, CTA.HANDLES]
    case CTA.HANDLES:
      return [CTA.BODY, CTA.CORNERS]
    case CTA.CORNERS:
      return [CTA.HANDLES, CTA.WHEELS]
    case CTA.WHEELS:
      return [CTA.CORNERS, CTA.BODY]
    default:
      return [CTA.WHEELS, CTA.HANDLES]
  }
}
