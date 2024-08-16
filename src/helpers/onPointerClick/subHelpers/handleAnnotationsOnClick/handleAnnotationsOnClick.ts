import { hideAnnotations, changeAnnotationIcon } from './sub_helpers'
import { showAnnotations } from '@/utils'
import { Annotations } from '@/enums'

const handleAnnotationsOnClick = (annotationClicked: string) => {
  switch (annotationClicked) {
    case Annotations.OPEN:
      showAnnotations([Annotations.CLOSE])
      hideAnnotations(Annotations.OPEN)
      changeAnnotationIcon(Annotations.CLOSE)
      break
    case Annotations.CLOSE:
      showAnnotations([Annotations.OPEN])
      hideAnnotations(Annotations.CLOSE)
      changeAnnotationIcon(Annotations.OPEN)
      break
    case Annotations.WHEEL_SPINNER_ON:
      showAnnotations([Annotations.WHEEL_SPINNER_OFF])
      hideAnnotations(Annotations.WHEEL_SPINNER_ON)
      changeAnnotationIcon(Annotations.WHEEL_SPINNER_OFF)
      break
    case Annotations.WHEEL_SPINNER_OFF:
      showAnnotations([Annotations.WHEEL_SPINNER_ON])
      hideAnnotations(Annotations.WHEEL_SPINNER_OFF)
      changeAnnotationIcon(Annotations.WHEEL_SPINNER_ON)
      break
    case Annotations.EXTEND_HANDLE:
      showAnnotations([Annotations.RETRACT_HANDLE])
      hideAnnotations(Annotations.EXTEND_HANDLE)
      changeAnnotationIcon(Annotations.RETRACT_HANDLE)
      break
    case Annotations.RETRACT_HANDLE:
      showAnnotations([Annotations.EXTEND_HANDLE])
      hideAnnotations(Annotations.RETRACT_HANDLE)
      changeAnnotationIcon(Annotations.EXTEND_HANDLE)
      break
  }
}

export default handleAnnotationsOnClick
