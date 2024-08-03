import { useColorsContext } from '../context/colors/ColorsContext'
import {
  defaultCameraModifier,
  hideAnnotations,
  showAnnotations,
} from '../utils'

export const Tabs = () => {
  const { setShowCtas, setCurrentCTA } = useColorsContext()
  return (
    <div
      id='tabs'
      className='flex justify-center p-3 absolute top-[2.5%] left-1/2 transform -translate-x-1/2 -translate-y-[2.5%]'
    >
      <div id='configurator' className='p-3 bg-white'>
        <button
          onClick={() => {
            hideAnnotations(['Open', 'Extend handle', 'Wheel spinner on']),
              setShowCtas(true),
              defaultCameraModifier(),
              setCurrentCTA(null)
          }}
        >
          CONFIGURATOR
        </button>
      </div>
      <div id='animations' className='p-3 bg-white'>
        <button
          onClick={() => {
            showAnnotations(['Open', 'Extend handle', 'Wheel spinner on']),
              setShowCtas(false),
              defaultCameraModifier(),
              setCurrentCTA(null)
          }}
        >
          ANIMATIONS
        </button>
      </div>
    </div>
  )
}
