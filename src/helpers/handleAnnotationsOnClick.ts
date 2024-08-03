import { showAnnotations, hideAnnotations, changeAnnotationIcon } from './index'

const handleAnnotationsOnClick = (annotationClicked: string) => {
  switch (annotationClicked) {
    case 'Open':
      showAnnotations(['Close'])
      hideAnnotations('Open')
      changeAnnotationIcon('Close')
      break
    case 'Close':
      showAnnotations(['Open'])
      hideAnnotations('Close')
      changeAnnotationIcon('Open')
      break
    case 'Wheel spinner on':
      showAnnotations(['Wheel spinner off'])
      hideAnnotations('Wheel spinner on')
      changeAnnotationIcon('Wheel spinner off')
      break
    case 'Wheel spinner off':
      showAnnotations(['Wheel spinner on'])
      hideAnnotations('Wheel spinner off')
      changeAnnotationIcon('Wheel spinner on')
      break
    case 'Extend handle':
      showAnnotations(['Retract handle'])
      hideAnnotations('Extend handle')
      changeAnnotationIcon('Retract handle')
      break
    case 'Retract handle':
      showAnnotations(['Extend handle'])
      hideAnnotations('Retract handle')
      changeAnnotationIcon('Extend handle')
      break
  }
}

export default handleAnnotationsOnClick
