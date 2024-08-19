import { Dispatch } from 'react'
import { setDefaultCameraModifier } from '.'
import { CTA } from '@/enums'

export const closeColorPanel = (
  setCurrentCTA: Dispatch<React.SetStateAction<CTA | null>>,
  largeOrGreaterScreen: boolean
) => {
  setDefaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')
  setCurrentCTA(null)
  localStorage.setItem('cta', '')
}
