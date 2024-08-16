import { Modifiers } from '@/enums'

export const setDefaultCameraModifier = (screen: string) => {
  switch (screen) {
    case 'desktop':
      Unlimited3D.activateModifier({
        modifier: Modifiers.DEFAULT_CAMERA_DESKTOP,
      })
      break
    case 'mobile':
      // default_camera_mobile modifier doesn't do anything so I put here also default_camera_desktop modifier
      Unlimited3D.activateModifier({
        modifier: Modifiers.DEFAULT_CAMERA_DESKTOP,
      })
      break
  }
}
