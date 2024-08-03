import type { FC } from 'react'
import { BodyColor, Corners, Handles, Wheels } from '.'

type Props = {
  currentCTA: string | null
}

export const RenderSelectedCTA: FC<Props> = ({ currentCTA }) => {
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
