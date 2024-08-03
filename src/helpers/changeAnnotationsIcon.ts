export const changeAnnotationIcon = async (annotationClicked: string) => {
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
