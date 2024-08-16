import { options } from '@/consts'
import { setDefaultCameraModifier, hideAnnotations } from '@/utils'
import { Annotations } from '@/enums'
import { Error, Status } from '@/types'

const initUnlimited3D = (largeOrGreaterScreen: boolean) =>
  Unlimited3D.init(options, {}, function (error: Error, status: Status) {
    if (error || !status) {
      console.log(error)
      return
    }

    if (status.status) {
      hideAnnotations([
        Annotations.OPEN,
        Annotations.EXTEND_HANDLE,
        Annotations.WHEEL_SPINNER_ON,
      ])
      setDefaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')
    }

    loadingContent.style.display = 'none'
  })

export default initUnlimited3D
