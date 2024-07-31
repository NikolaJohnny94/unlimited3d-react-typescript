import { handleAnnotationsOnClick } from './utils/handleAnnotationsOnClick'

export const options = {
  distID: 'latest',
  solution3DName: 'suitcase-color',
  projectName: 'resources-for-videos-and-marketing-purposes',
  solution3DID: '62766',
  containerID: 'container3d_replace',
  onPointerClick: async function (objectsClick: any) {
    console.log(objectsClick)
    let annotationsClicked: any = []
    if (objectsClick.length > 0) {
      if (objectsClick[0].type == 'annotation') {
        const promise = new Promise((resolve) => {
          switch (objectsClick[0].name) {
            case 'Extend handle':
              resolve('handle_open')
              Unlimited3D.getAvailableAnnotations((error: any, result: any) => {
                console.log(result)
              })
              Unlimited3D.getAvailableMaterials((error: any, result: any) => {
                console.log(error, result)
              })

              break
            case 'Open':
              handleAnnotationsOnClick('Open')
              // annotationsClicked.push('Open')
              // setTimeout(() => {
              //   Unlimited3D.hideAnnotations({
              //     annotations: ['Open', 'Extend handle', 'Wheel spinner on'],
              //   })
              // }, 0)
              // Unlimited3D.showAnnotations({
              //   annotationObjects: [
              //     {
              //       annotations: ['Close'],
              //     },
              //   ],
              // })
              // Unlimited3D.changeAnnotationMaterial({
              //   annotations: ['Close'],
              //   material: 'Close locker',
              // })
              resolve('open')
              break
            case 'Close':
              handleAnnotationsOnClick('Close')
              // annotationsClicked.push('Open')
              // setTimeout(() => {
              //   Unlimited3D.hideAnnotations({
              //     annotations: ['Close', 'Extend handle', 'Wheel spinner on'],
              //   })
              // }, 0)
              // Unlimited3D.showAnnotations({
              //   annotationObjects: [
              //     {
              //       annotations: ['Open'],
              //     },
              //   ],
              // })
              // Unlimited3D.changeAnnotationMaterial({
              //   annotations: ['Open'],
              //   material: 'open locker',
              // })
              resolve('close')
              break
            case 'Wheel spinner on':
              annotationsClicked.push('Wheel spinner on')
              resolve('wheel_spinner_on')
              break
          }
        })

        const modifier = await promise
        Unlimited3D.getAvailableModifiers(function (error: any, result: any) {
          console.log(result)
        })

        Unlimited3D.activateModifier({ modifier })
        // const modifier = await promise
        // console.log(modifier)
        // await new Promise((resolve) => {
        //   console.log(modifier)
        //   resolve(Unlimited3D.activateModifier({modifier}))
        // })
        // iteractAnnotation(objectsClick[0].name)
      }
    }
  },
}

// export const options = {
//   distID: 'latest',
//   solution3DName: 'suitcase-color',
//   projectName: 'resources-for-videos-and-marketing-purposes',
//   solution3DID: '62766',
//   containerID: 'container3d_replace',
//   onPointerClick: async function (objectsClick: any) {
//     let annotationsClicked: any = []
//     if (objectsClick.length > 0) {
//       if (objectsClick[0].type == 'annotation') {
//         console.log(objectsClick)
//         const promise = new Promise((resolve) => {
//           switch (objectsClick[0].name) {
//             case 'Extend handle':
//               // if (!annotationsClicked.includes('Extend handle')) {
//               //   annotationsClicked.push('Extend handle')
//               resolve('handle_open')
//               Unlimited3D.getAvailableAnnotations((error: any, result: any) => {
//                 console.log(result)
//               })
//               // }else {
//               //   annotationsClicked.push('Extend handle')
//               //   resolve('handle_open')
//               // }

//               break
//             case 'Open':
//               annotationsClicked.push('Open')
//               resolve('open')
//               break
//             case 'Wheel spinner on':
//               annotationsClicked.push('Wheel spinner on')
//               resolve('wheel_spinner_on')
//               break
//           }
//         })

//         const modifier = await promise
//         Unlimited3D.getAvailableModifiers(function (error: any, result: any) {
//           console.log(result)
//         })

//         Unlimited3D.activateModifier({ modifier })
//         // const modifier = await promise
//         // console.log(modifier)
//         // await new Promise((resolve) => {
//         //   console.log(modifier)
//         //   resolve(Unlimited3D.activateModifier({modifier}))
//         // })
//         // iteractAnnotation(objectsClick[0].name)
//       }
//     }
//   },
// }
