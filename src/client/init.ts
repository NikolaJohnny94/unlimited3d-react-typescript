import { options } from '../consts'
import { hideAnnotations } from '../utils'

const initUnlimited3D = () =>
  Unlimited3D.init(options, {}, function (error: any, status: any) {
    if (error || !status) {
      console.log(error)

      return
    }

    if (status.status) {
      hideAnnotations(['Open', 'Extend handle', 'Wheel spinner on'])
    }

    loadingContent.style.display = 'none'
  })

export default initUnlimited3D
