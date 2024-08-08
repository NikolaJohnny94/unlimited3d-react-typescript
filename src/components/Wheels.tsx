import { useEffect, useState } from 'react'
import { useColorsContext } from '../context/colors/ColorsContext'
import { cameraModifier, closeColorPanel } from '../utils'
import { Carousel } from './Carousel'
import { ColorButtons } from './ColorButtons'
import { NextAndPreviousButtons } from './card'
import { CardHeading } from './card/CardHeading'

export const Wheels = () => {
  const [color, setColor] = useState('ALUMINIUM')
  const { state, largeOrGreaterScreen, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    cameraModifier('wheels')
  }, [])

  const closePanel = () => {
    closeColorPanel(setCurrentCTA, largeOrGreaterScreen)
  }

  return (
    <div className='w-full lg:w-[280px] xl:w-[280px] xl:h-[515px] lg:h-[515px] md:h-[515px] h-[300px] bg-white absolute bottom-0 xl:top-[8%] xl:right-[3.5%] lg:top-[8%] lg:right-[2.5%] flex-shrink-0 rounded-md'>
      {/* Card Heading */}
      <CardHeading cta='WHEELS' color={color} closeColorPanel={closePanel} />
      {/* Colors */}
      <ColorButtons cta='WHEELS' currentColor={color} />
      {/* Mobile Carousel */}
      <Carousel color={color} cta='wheels' />
      {/* Next and Previous Button */}
      <NextAndPreviousButtons setCurrentCTA={setCurrentCTA} cta='WHEELS' />
    </div>
  )
}
