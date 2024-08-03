import { BodyColor, Corners, Handles, Wheels } from '.'
import { useColorsContext } from '../context/colors/ColorsContext'

export const RenderSelectedCTA = () => {
  const { currentCTA } = useColorsContext()

  switch (currentCTA) {
    case 'body':
      return <BodyColor />
    case 'corners':
      return <Corners />
    case 'wheels':
      return <Wheels />
    case 'handles':
      return <Handles />
    case null:
      return null
    default:
      return null
  }
}
