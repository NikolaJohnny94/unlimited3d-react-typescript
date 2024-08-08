import { useEffect, useState } from 'react'
import { useColorsContext } from '../context/colors/ColorsContext'
import { cameraModifier, closeColorPanel } from '../utils'
import { Carousel } from './Carousel'
import { ColorButtons } from './ColorButtons'
import { ImageNoImageComponent, NextAndPreviousButtons } from './card'
import { CardHeading } from './card/CardHeading'

export const BodyColor = () => {
  const [color, setColor] = useState('ALUMINIUM')
  const { state, largeOrGreaterScreen, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    cameraModifier('body')
  }, [])

  const closePanel = () => {
    closeColorPanel(setCurrentCTA, largeOrGreaterScreen)
  }

  return (
    <div className='w-full lg:w-[280px] xl:w-[280px] xl:h-[515px] lg:h-[515px] md:h-[515px] h-[375px] bg-white absolute bottom-0 xl:top-[8%] xl:right-[3.5%] lg:top-[8%] lg:right-[2.5%] flex-shrink-0 rounded-md'>
      {/* Card Heading */}
      <CardHeading cta='BODY' color={color} closeColorPanel={closePanel} />
      {/* Colors */}
      <ColorButtons cta='BODY' currentColor={color} />
      {/* Mobile carousel */}
      <Carousel color={color} cta='body' />
      {/* Image/No Image component */}
      <ImageNoImageComponent />
      <NextAndPreviousButtons setCurrentCTA={setCurrentCTA} cta='BODY' />
    </div>
  )
}
