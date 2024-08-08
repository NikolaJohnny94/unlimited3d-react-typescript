import { Dispatch } from 'react'
import { defaultCameraModifier } from '.'

export const closeColorPanel = (
  setCurrentCTA: Dispatch<React.SetStateAction<string | null>>,
  largeOrGreaterScreen: boolean
) => {
  defaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')
  setCurrentCTA(null)
}
