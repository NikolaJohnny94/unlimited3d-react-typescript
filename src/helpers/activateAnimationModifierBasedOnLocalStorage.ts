import { handleLocalStorageAnnotationsModifier } from '.'
import handleAnnotationsOnClick from './onPointerClick/subHelpers/handleAnnotationsOnClick/handleAnnotationsOnClick'

export const activateAnimationModifierBasedOnLocalStorage = () => {
  Unlimited3D.activateModifier({
    modifier: handleLocalStorageAnnotationsModifier(),
  })
  setTimeout(() => {
    handleAnnotationsOnClick(
      localStorage.getItem('modifierTriggered') as string
    )
  }, 0)
}
