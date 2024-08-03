import { showAnnotations } from '../utils'

export const hideAnnotations = (annotationsToHide: string) => {
  switch (annotationsToHide) {
    case 'Open':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Open', 'Extend handle', 'Wheel spinner on'],
        })
      }, 0)
      break
    case 'Close':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Close'],
        })
      }, 0)
      setTimeout(() => {
        showAnnotations(['Extend handle', 'Wheel spinner on'])
      }, 0)
      break
    case 'Wheel spinner on':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Wheel spinner on', 'Extend handle', 'Open'],
        })
      }, 0)
      break
    case 'Wheel spinner off':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Wheel spinner off'],
        })
      }, 0)

      setTimeout(() => {
        showAnnotations(['Extend handle', 'Open'])
      }, 0)
      break
    case 'Extend handle':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Wheel spinner on', 'Extend handle', 'Open'],
        })
      }, 0)
      break
    case 'Retract handle':
      setTimeout(() => {
        Unlimited3D.hideAnnotations({
          annotations: ['Retract handle'],
        })
      }, 0)

      setTimeout(() => {
        showAnnotations(['Wheel spinner on', 'Open'])
      }, 0)
      break
  }
}
