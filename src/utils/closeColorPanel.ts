import { Dispatch } from 'react'
import { defaultCameraModifier } from '.'
import { CTA } from '@/enums'

export const closeColorPanel = (
  setCurrentCTA: Dispatch<React.SetStateAction<CTA | null>>,
  largeOrGreaterScreen: boolean
) => {
  defaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')
  setCurrentCTA(null)
}
