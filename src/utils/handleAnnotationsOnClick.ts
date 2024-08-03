export const handleAnnotationsOnClick = (annotationClicked: string) => {
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

function hideAnnotations(annotationsToHide: string) {
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

function showAnnotations(annotationToShow: string[]) {
  Unlimited3D.showAnnotations({
    annotationObjects: [
      {
        annotations: annotationToShow,
      },
    ],
  })
}

async function changeAnnotationIcon(annotationClicked: string) {
  const promise = new Promise((resolve) => {
    switch (annotationClicked) {
      case 'Close':
        resolve({
          annotations: ['Close'],
          material: 'Close locker',
        })
        break
      case 'Open':
        resolve({
          annotations: ['Open'],
          material: 'open locker',
        })
        break
      case 'Wheel spinner off':
        resolve({
          annotations: ['Wheel spinner off'],
          material: 'wheels spinner close',
        })
        break
      case 'Wheel spinner on':
        resolve({
          annotations: ['Wheel spinner on'],
          material: 'Wheel spinner',
        })
        break
      case 'Extend handle':
        resolve({
          annotations: ['Extend handle'],
          material: 'Extend handle-Mat',
        })
        break
      case 'Retract handle':
        resolve({
          annotations: ['Retract handle'],
          material: 'retrack handle',
        })
        break
    }
  })

  const annotationsToChange = await promise
  Unlimited3D.changeAnnotationMaterial(annotationsToChange)
}
