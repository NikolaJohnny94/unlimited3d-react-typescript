import handleAnnotationsOnClick from './subHelpers/handleAnnotationsOnClick/handleAnnotationsOnClick'

export const onPointerClick = async (objectsClick: any) => {
  if (objectsClick.length > 0) {
    if (objectsClick[0].type == 'annotation') {
      const promise = new Promise((resolve) => {
        switch (objectsClick[0].name) {
          case 'Extend handle':
            handleAnnotationsOnClick('Extend handle')
            localStorage.setItem('modifierTriggered', 'Extend handle')
            resolve('handle_open')
            break
          case 'Retract handle':
            handleAnnotationsOnClick('Retract handle')
            localStorage.setItem('modifierTriggered', 'Retract handle')
            resolve('handle_close')
            break
          case 'Open':
            handleAnnotationsOnClick('Open')
            localStorage.setItem('modifierTriggered', 'Open')
            resolve('open')
            break
          case 'Close':
            handleAnnotationsOnClick('Close')
            localStorage.setItem('modifierTriggered', 'Close')
            resolve('close')
            break
          case 'Wheel spinner on':
            handleAnnotationsOnClick('Wheel spinner on')
            localStorage.setItem('modifierTriggered', 'Wheel spinner on')
            resolve('wheel_spinner_on')
            break
          case 'Wheel spinner off':
            handleAnnotationsOnClick('Wheel spinner off')
            localStorage.setItem('modifierTriggered', 'Wheel spinner off')
            resolve('wheel_spinner_off')
            break
        }
      })

      const modifier = await promise
      Unlimited3D.activateModifier({ modifier })
    }
  }
}
