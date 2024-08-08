import { FC, useEffect } from 'react'
import { useColorsContext } from '../../context/colors/ColorsContext'
import { cameraModifier, closeColorPanel } from '../../utils'
import { Carousel } from '../Carousel'
import { ColorButtons } from '../ColorButtons'
import { ImageNoImageComponent, NextAndPreviousButtons } from '../card'
import { CardHeading } from '../card/CardHeading'

type Props = {
  cta: string
}

export const Card: FC<Props> = ({ cta }) => {
  const { state, largeOrGreaterScreen, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    cameraModifier(cta.toLowerCase())
  }, [cta])

  const setColor = () => {
    switch (cta) {
      case 'BODY':
        return state.colors.body
      case 'CORNERS':
        return state.colors.corners
      case 'HANDLES':
        return state.colors.handles
      case 'WHEELS':
        return state.colors.wheels
      default:
        return 'ALUMINIUM'
    }
  }

  const closePanel = () => {
    closeColorPanel(setCurrentCTA, largeOrGreaterScreen)
  }

  return (
    <div className='w-full lg:w-[280px] xl:w-[280px] xl:h-[515px] lg:h-[515px] md:h-[515px] h-[375px] bg-white absolute bottom-0 xl:top-[8%] xl:right-[3.5%] lg:top-[8%] lg:right-[2.5%] flex-shrink-0 rounded-md'>
      {/* Card Heading */}
      <CardHeading cta={cta} color={setColor()} closeColorPanel={closePanel} />
      {/* Colors */}
      <ColorButtons cta={cta} currentColor={setColor()} />
      {/* Mobile carousel */}
      <Carousel color={setColor()} cta={cta.toLowerCase()} />
      {/* Image/No Image component */}
      {cta === 'BODY' && <ImageNoImageComponent />}
      <NextAndPreviousButtons setCurrentCTA={setCurrentCTA} cta={cta} />
    </div>
  )
}
