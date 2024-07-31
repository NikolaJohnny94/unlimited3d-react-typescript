import React from 'react'
import { options } from '../conts'

const Configurator = () => {
  Unlimited3D.init(options, {}, function (error: any, status: any) {
    if (error || !status) {
      console.log(error)

      return
    }

    Unlimited3D.loadingContent.style.display = 'none'
  })

  function changeColor(partOne: any, materialOne: any) {
    Unlimited3D.changeMaterials(
      {
        partObjects: [
          {
            parts: [partOne[0], partOne[1]],
            material: materialOne,
          },
        ],
      },
      () => {}
    )
  }
  function getAllAnotations() {
    //   Unlimited3D.getAvailableAnnotations((error, result) => {
    //     console.log(result)
    //   })
    //   Unlimited3D.hideAnnotations({ annotations: ['Open'] })
    //   Unlimited3D.activateModifier({ modifier: 'handle_open' })
    // Unlimited3D.changeAnnotationMaterial(
    //   {
    //     annotations: ['Open'],
    //     material: 'Close locker',
    //   },
    //   (res) => console.log(res)
    // )
    // Unlimited3D.getAvailableMaterials((error, result) => {
    //   console.log(error, result)
    // })
    //   Unlimited3D.getAvailableModifiers(function (error, result) {
    //     console.log(result)
    //   })
    // Sets
    //   Unlimited3D.getAvailableAnimationSets((error, result) => console.log(result))
    //   // States
    //   Unlimited3D.getAvailableAnimationStates(
    //     { animationSet: 'case' },
    //     (error, result) => console.log(result)
    //   )
    //   //   Transition
    //   Unlimited3D.getAvailableAnimationTransitions(
    //     { animationSet: 'case' },
    //     (error, result) => console.log(result)
    //   )
    //   //   Activate
    //   Unlimited3D.activateAnimationState({
    //     animationSet: 'case',
    //     animationState: 'case_open_anim',
    //   })
    //   //   Play
    //   Unlimited3D.playAnimationSet({ animationSet: 'case' })
  }
  return (
    <div className='main_wrapp'>
      <div id='tabs' className='flex justify-center p-3'>
        <div id='configurator' className='p-3'>
          CONFIGURATOR
        </div>
        <div id='animations' className='p-3'>
          ANIMATIONS
        </div>
      </div>

      <div
        id='ctas'
        className='flex justify-center p-3 absolute bottom-[50px] m-auto'
      >
        <div id='body' className='p-3'>
          BODY
        </div>
        <div id='handles' className='p-3'>
          HANDLES
        </div>
        <div id='CORNERS' className='p-3'>
          CORNERS
        </div>
        <div id='WHEELS' className='p-3'>
          WHEELS
        </div>
      </div>

      <button onClick={getAllAnotations}>Click</button>
      <div className='model'>
        <div id='container3d_replace'></div>
        <div className='loadingContent' id='loadingContent'>
          <div className='loading'>
            <img
              src='https://codepencdn.unlimited3d.com/changeMaterials/assets/images/loader.gif?v=0.1'
              alt='loader'
              className='loading-img'
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configurator
