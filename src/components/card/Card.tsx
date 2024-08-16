import { type FC, useEffect } from 'react'
import { useColorsContext } from '@/context/colors/ColorsContext'
import { setCameraModifier, closeColorPanel } from '@/utils'
import {
  CardHeading,
  ColorButtons,
  Carousel,
  ImageNoImageComponent,
  NextAndPreviousButtons,
} from '@components/card'
import { setColor } from '@/helpers'
import { CTA } from '@/enums/CTA.enum'

type Props = {
  cta: CTA
}

export const Card: FC<Props> = ({ cta }) => {
  const { state, largeOrGreaterScreen, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    setCameraModifier(cta)
  }, [cta])

  const closePanel = () => {
    closeColorPanel(setCurrentCTA, largeOrGreaterScreen)
  }

  return (
    <div className='w-full lg:w-[280px] xl:w-[280px] xl:h-[515px] lg:h-[515px] md:h-[515px] h-[375px] bg-white absolute bottom-0 xl:top-[8%] xl:right-[3.5%] lg:top-[8%] lg:right-[2.5%] flex-shrink-0 rounded-md'>
      {/* Card Heading */}
      <CardHeading
        cta={cta}
        color={setColor(state, cta)}
        closeColorPanel={closePanel}
      />
      {/* Colors */}
      <ColorButtons cta={cta} currentColor={setColor(state, cta)} />
      {/* Mobile carousel */}
      <Carousel color={setColor(state, cta)} cta={cta} />
      {/* Image/No Image component */}
      {cta === CTA.BODY && <ImageNoImageComponent />}
      <NextAndPreviousButtons setCurrentCTA={setCurrentCTA} cta={cta} />
    </div>
  )
}

export default Card
