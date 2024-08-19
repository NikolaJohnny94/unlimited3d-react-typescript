import { CTA } from '@/enums'

export const getLastViewedCta = () => {
  switch (localStorage.getItem('cta')) {
    case 'body':
      return CTA.BODY
    case 'handles':
      return CTA.HANDLES
    case 'corners':
      return CTA.CORNERS
    case 'wheels':
      return CTA.WHEELS
    default:
      return null
  }
}
