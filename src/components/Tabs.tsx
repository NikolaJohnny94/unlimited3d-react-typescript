import { useState } from 'react'
import { useColorsContext } from '../context/colors/ColorsContext'
import {
  defaultCameraModifier,
  hideAnnotations,
  showAnnotations,
} from '../utils'
import handleAnnotationsOnClick from '../helpers/onPointerClick/subHelpers/handleAnnotationsOnClick/handleAnnotationsOnClick'

export const Tabs = () => {
  const { largeOrGreaterScreen, setShowCtas, setCurrentCTA } =
    useColorsContext()
  const [activeTab, setActiveTab] = useState('configurator')

  const handleLocalStorageAnnotationsModifier = () => {
    switch (localStorage.getItem('modifierTriggered')) {
      case 'Extend handle':
        return 'handle_open'
      case 'Retract handle':
        return 'handle_close'
      case 'Open':
        return 'open'
      case 'Close':
        return 'close'
      case 'Wheel spinner on':
        return 'wheel_spinner_on'
      case 'Wheel spinner off':
        return 'wheel_spinner_off'
    }
  }

  const activateAnimationModifier = () => {
    Unlimited3D.activateModifier({
      modifier: handleLocalStorageAnnotationsModifier(),
    })
    setTimeout(() => {
      handleAnnotationsOnClick(
        localStorage.getItem('modifierTriggered') as string
      )
    }, 0)
  }
  return (
    <div
      id='tabs'
      className='flex justify-center absolute top-[2.5%] left-1/2 transform -translate-x-1/2 -translate-y-[2.5%] w-[95%] xl:w-[604px] lg:w-[400px] md:w-[400px] md:h-[42px] lg:h-[42px] h-16  rounded-lg bg-white/50 backdrop-blur-md flex-shrink-0"
'
    >
      <div
        id='configurator'
        className={`mx-12 w-1/2 flex justify-center items-center ${
          activeTab === 'configurator' ? 'border-b border-gray-500' : ''
        }`}
      >
        <button
          className='text-[#121010] font-manrope lg:text-[18px] xl:text-[20px] font-normal leading-[0.909]'
          onClick={() => {
            hideAnnotations([
              'Open',
              'Close',
              'Extend handle',
              'Retract handle',
              'Wheel spinner on',
              'Wheel spinner off',
            ]),
              setShowCtas(true),
              defaultCameraModifier(
                largeOrGreaterScreen ? 'desktop' : 'mobile'
              ),
              setCurrentCTA(null),
              setActiveTab('configurator')
          }}
        >
          CONFIGURATOR
        </button>
      </div>
      <div
        id='animations'
        className={`mx-12 w-1/2 flex justify-center items-center ${
          activeTab === 'animations' ? 'border-b border-gray-500' : ''
        }`}
      >
        <button
          className='text-[#121010] font-manrope text-[18px] lg:text-[20px] xl:text-[20px] font-normal leading-[0.909]'
          onClick={() => {
            showAnnotations(['Open', 'Extend handle', 'Wheel spinner on']),
              setShowCtas(false),
              defaultCameraModifier(
                largeOrGreaterScreen ? 'desktop' : 'mobile'
              ),
              setCurrentCTA(null),
              setActiveTab('animations'),
              activateAnimationModifier()
          }}
        >
          ANIMATIONS
        </button>
      </div>
    </div>
  )
}
