import { useColorsContext } from '@/context/colors/ColorsContext'
import { Card } from '@components/index'
import { CTA } from '@/enums'

export const RenderSelectedCTA = () => {
  const { currentCTA } = useColorsContext()

  switch (currentCTA) {
    case CTA.BODY:
      return <Card cta={CTA.BODY} />
    case CTA.CORNERS:
      return <Card cta={CTA.CORNERS} />
    case CTA.WHEELS:
      return <Card cta={CTA.WHEELS} />
    case CTA.HANDLES:
      return <Card cta={CTA.HANDLES} />
    case null:
      return null
  }
}
