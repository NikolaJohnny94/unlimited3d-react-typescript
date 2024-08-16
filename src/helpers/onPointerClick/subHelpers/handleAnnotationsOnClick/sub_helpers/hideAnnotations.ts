import { Annotations } from '@/enums'
import { showAnnotations } from '@/utils'

export const hideAnnotations = (annotationsToHide: string) => {
  switch (annotationsToHide) {
    case Annotations.OPEN:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [
            Annotations.OPEN,
            Annotations.EXTEND_HANDLE,
            Annotations.WHEEL_SPINNER_ON,
          ],
        })
      }, 0)
      break
    case Annotations.CLOSE:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [Annotations.CLOSE],
        })
      }, 0)
      setTimeout(() => {
        showAnnotations([
          Annotations.EXTEND_HANDLE,
          Annotations.WHEEL_SPINNER_ON,
        ])
      }, 0)
      break
    case Annotations.WHEEL_SPINNER_ON:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [
            Annotations.OPEN,
            Annotations.WHEEL_SPINNER_ON,
            Annotations.EXTEND_HANDLE,
          ],
        })
      }, 0)
      break
    case Annotations.WHEEL_SPINNER_OFF:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [Annotations.WHEEL_SPINNER_OFF],
        })
      }, 0)

      setTimeout(() => {
        showAnnotations([Annotations.OPEN, Annotations.EXTEND_HANDLE])
      }, 0)
      break
    case Annotations.EXTEND_HANDLE:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [
            Annotations.OPEN,
            Annotations.WHEEL_SPINNER_ON,
            Annotations.EXTEND_HANDLE,
          ],
        })
      }, 0)
      break
    case Annotations.RETRACT_HANDLE:
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: [Annotations.RETRACT_HANDLE],
        })
      }, 0)

      setTimeout(() => {
        showAnnotations([Annotations.OPEN, Annotations.WHEEL_SPINNER_ON])
      }, 0)
      break
  }
}
