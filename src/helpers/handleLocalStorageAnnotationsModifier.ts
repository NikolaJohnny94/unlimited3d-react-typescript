import { Annotations, Modifiers } from '@/enums'

export const handleLocalStorageAnnotationsModifier = () => {
  switch (localStorage.getItem('modifierTriggered')) {
    case Annotations.EXTEND_HANDLE:
      return Modifiers.EXTEND_HANDLE
    case Annotations.RETRACT_HANDLE:
      return Modifiers.RETRACT_HANDLE
    case Annotations.OPEN:
      return Modifiers.OPEN
    case Annotations.CLOSE:
      return Modifiers.CLOSE
    case Annotations.WHEEL_SPINNER_ON:
      return Modifiers.WHEEL_SPINNER_ON
    case Annotations.WHEEL_SPINNER_OFF:
      return Modifiers.WHEEL_SPINNER_OFF
  }
}
