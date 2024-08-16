import handleAnnotationsOnClick from './subHelpers/handleAnnotationsOnClick/handleAnnotationsOnClick'
import { Annotations, Modifiers } from '@/enums'
import type { ObjectClick } from '@/types'

export const onPointerClick = async (objectsClick: ObjectClick[]) => {
  console.log(objectsClick)
  if (objectsClick.length > 0) {
    if (objectsClick[0].type == 'annotation') {
      const promise = new Promise((resolve) => {
        switch (objectsClick[0].name) {
          // Extend handle
          case Annotations.EXTEND_HANDLE:
            handleAnnotationsOnClick(Annotations.EXTEND_HANDLE)
            localStorage.setItem('modifierTriggered', Annotations.EXTEND_HANDLE)
            resolve(Modifiers.EXTEND_HANDLE)
            break
          // Retract handle
          case Annotations.RETRACT_HANDLE:
            handleAnnotationsOnClick(Annotations.RETRACT_HANDLE)
            localStorage.setItem(
              'modifierTriggered',
              Annotations.RETRACT_HANDLE
            )
            resolve(Modifiers.RETRACT_HANDLE)
            break
          // Open suitcase
          case Annotations.OPEN:
            handleAnnotationsOnClick(Annotations.OPEN)
            localStorage.setItem('modifierTriggered', Annotations.OPEN)
            resolve(Modifiers.OPEN)
            break
          // Close suitcase
          case Annotations.CLOSE:
            handleAnnotationsOnClick(Annotations.CLOSE)
            localStorage.setItem('modifierTriggered', Annotations.CLOSE)
            resolve(Modifiers.CLOSE)
            break
          // Wheel spinner on
          case Annotations.WHEEL_SPINNER_ON:
            handleAnnotationsOnClick(Annotations.WHEEL_SPINNER_ON)
            localStorage.setItem(
              'modifierTriggered',
              Annotations.WHEEL_SPINNER_ON
            )
            resolve(Modifiers.WHEEL_SPINNER_ON)
            break
          // Wheel spinner off
          case Annotations.WHEEL_SPINNER_OFF:
            handleAnnotationsOnClick(Annotations.WHEEL_SPINNER_OFF)
            localStorage.setItem(
              'modifierTriggered',
              Annotations.WHEEL_SPINNER_OFF
            )
            resolve(Modifiers.WHEEL_SPINNER_OFF)
            break
        }
      })

      const modifier = await promise
      Unlimited3D.activateModifier({ modifier })
    }
  }
}
