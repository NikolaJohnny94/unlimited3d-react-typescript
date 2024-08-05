import { options } from '../consts'
import { defaultCameraModifier, hideAnnotations } from '../utils'

const initUnlimited3D = (largeOrGreaterScreen: boolean) =>
  Unlimited3D.init(
    options,
    {},
    function (error: any, status: { status: boolean }) {
      if (error || !status) {
        console.log(error)
        return
      }

      if (status.status) {
        hideAnnotations(['Open', 'Extend handle', 'Wheel spinner on'])
        defaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')
      }

      loadingContent.style.display = 'none'
    }
  )

export default initUnlimited3D
