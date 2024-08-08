import { useColorsContext } from '../context/colors/ColorsContext'
import { Card } from './card/Card'

export const RenderSelectedCTA = () => {
  const { currentCTA } = useColorsContext()

  switch (currentCTA) {
    case 'body':
      return <Card cta='BODY' />
    case 'corners':
      return <Card cta='CORNERS' />
    case 'wheels':
      return <Card cta='WHEELS' />
    case 'handles':
      return <Card cta='HANDLES' />
    case null:
      return null
  }
}
