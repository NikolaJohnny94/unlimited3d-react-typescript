import { CTA, Modifiers } from '@/enums'

export const setCameraModifier = (currentComponent: CTA) => {
  switch (currentComponent) {
    case CTA.BODY:
      Unlimited3D.activateModifier({ modifier: Modifiers.CAMERA_BODY_DESKTOP })
      Unlimited3D.activateModifier({ modifier: Modifiers.CAMERA_BODY_MOBILE })
      break
    case CTA.HANDLES:
      Unlimited3D.activateModifier({
        modifier: Modifiers.CAMERA_HANDLE_DESKTOP,
      })
      Unlimited3D.activateModifier({ modifier: Modifiers.CAMERA_HANDLE_MOBILE })
      break
    case CTA.CORNERS:
      Unlimited3D.activateModifier({
        modifier: Modifiers.CAMERA_CORNERS_DESKTOP,
      })
      Unlimited3D.activateModifier({
        modifier: Modifiers.CAMERA_CORNERS_MOBILE,
      })
      break
    case CTA.WHEELS:
      Unlimited3D.activateModifier({
        modifier: Modifiers.CAMERA_WHEELS_DESKTOP,
      })
      Unlimited3D.activateModifier({ modifier: Modifiers.CAMERA_WHEELS_MOBILE })
      break
  }
}
