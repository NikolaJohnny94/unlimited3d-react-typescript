import { defaultCameraModifier } from './defaultCameraModifier'

export const resetModifiers = () => {
  Unlimited3D.activateModifier({ modifier: 'close' })
  Unlimited3D.activateModifier({ modifier: 'handle_close' })
  Unlimited3D.activateModifier({ modifier: 'wheel_spinner_off' })
  defaultCameraModifier()
}
