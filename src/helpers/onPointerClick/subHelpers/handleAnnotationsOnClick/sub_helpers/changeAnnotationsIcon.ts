import { Annotations } from '@/enums'
import { Materials } from '@/enums/Materials.enum'

export const changeAnnotationIcon = async (annotationClicked: string) => {
  const promise = new Promise((resolve) => {
    switch (annotationClicked) {
      case Annotations.CLOSE:
        resolve({
          annotations: [Annotations.CLOSE],
          material: Materials.CLOSE,
        })
        break
      case Annotations.OPEN:
        resolve({
          annotations: [Annotations.OPEN],
          material: Materials.OPEN,
        })
        break
      case Annotations.WHEEL_SPINNER_OFF:
        resolve({
          annotations: [Annotations.WHEEL_SPINNER_OFF],
          material: Materials.WHEEL_SPINNER_OFF,
        })
        break
      case Annotations.WHEEL_SPINNER_ON:
        resolve({
          annotations: [Annotations.WHEEL_SPINNER_ON],
          material: Materials.WHEEL_SPINNER_ON,
        })
        break
      case Annotations.EXTEND_HANDLE:
        resolve({
          annotations: [Annotations.EXTEND_HANDLE],
          material: Materials.EXTEND_HANDLE,
        })
        break
      case Annotations.RETRACT_HANDLE:
        resolve({
          annotations: [Annotations.RETRACT_HANDLE],
          material: Materials.RETRACT_HANDLE,
        })
        break
    }
  })

  const annotationsToChange = await promise

  Unlimited3D.changeAnnotationMaterial(annotationsToChange)
}
