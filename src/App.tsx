import { useEffect, useState } from 'react'
import { options } from './consts'
import BodyColor from './components/BodyColor'
import Cornsers from './components/Corners'
import Handles from './components/Handles'
import Wheels from './components/Wheels'

function App() {
  const [currentCTA, setCurrentCTA] = useState('corners')

  useEffect(() => {
    Unlimited3D.init(options, {}, function (error: any, status: any) {
      if (error || !status) {
        console.log(error)

        return
      }

      if (status.status) {
        Unlimited3D.hideAnnotations({
          annotations: ['Open', 'Extend handle', 'Wheel spinner on'],
        })
      }

      loadingContent.style.display = 'none'
    })
  }, [])

  const ctas: any = {
    bodyColor: BodyColor,
    handles: Handles,
    corners: Cornsers,
    wheels: Wheels,
  }

  const CtaToRender = ctas[currentCTA]

  function getAllAnotations() {
    Unlimited3D.hideAnnotations({ annotations: ['Open'] })
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

  const showAnotations = () => {
    Unlimited3D.showAnnotations({
      annotationObjects: [
        {
          annotations: ['Open', 'Extend handle', 'Wheel spinner on'],
        },
      ],
    })
  }

  const hideAnnotations = () => {
    Unlimited3D.hideAnnotations({
      annotations: ['Open', 'Extend handle', 'Wheel spinner on'],
    })
  }

  const openCase = () => {
    Unlimited3D.activateModifier({ modifier: 'handle_open' })
  }

  return (
    <div className='main_wrapp relative'>
      <div
        id='tabs'
        className='flex justify-center p-3 absolute top-[2.5%] left-1/2 transform -translate-x-1/2 -translate-y-[2.5%]'
      >
        <div id='configurator' className='p-3 bg-white'>
          <button onClick={hideAnnotations}>CONFIGURATOR</button>
        </div>
        <div id='animations' className='p-3 bg-white'>
          <button onClick={showAnotations}>ANIMATIONS</button>
        </div>
      </div>

      <div
        id='ctas'
        className='flex justify-center p-3 absolute bottom-[2.5%] left-1/2 transform -translate-x-1/2 translate-y-[2.5%]'
      >
        <div id='body' className='p-3 bg-white m-1 rounded-md'>
          <button onClick={() => setCurrentCTA('bodyColor')}>BODY</button>
        </div>
        <div id='handles' className='p-3 bg-white m-1 rounded-md'>
          <button onClick={() => setCurrentCTA('handles')}>HANDLES</button>
        </div>
        <div id='CORNERS' className='p-3 bg-white m-1 rounded-md'>
          <button onClick={() => setCurrentCTA('corners')}>CORNERS</button>
        </div>
        <div id='WHEELS' className='p-3 bg-white m-1 rounded-md'>
          <button onClick={() => setCurrentCTA('wheels')}>WHEELS</button>
        </div>
      </div>

      <CtaToRender />

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

export default App
