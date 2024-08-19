import { useState } from 'react'
import { useColorsContext } from '@/context/colors/ColorsContext'
import {
  setDefaultCameraModifier,
  hideAnnotations,
  showAnnotations,
} from '@/utils'
import {
  activateAnimationModifierBasedOnLocalStorage as activateAnimationModifier,
  getLastViewedCta,
} from '@/helpers'
import { Annotations } from '@/enums'

export const Tabs = () => {
  const { largeOrGreaterScreen, setShowCtas, setCurrentCTA } =
    useColorsContext()
  const [activeTab, setActiveTab] = useState('configurator')

  const showConfiguratorTab = () => {
    hideAnnotations([
      Annotations.OPEN,
      Annotations.CLOSE,
      Annotations.EXTEND_HANDLE,
      Annotations.RETRACT_HANDLE,
      Annotations.WHEEL_SPINNER_ON,
      Annotations.WHEEL_SPINNER_OFF,
    ])
    setShowCtas(true)
    setDefaultCameraModifier(largeOrGreaterScreen ? 'desktop' : 'mobile')

    setCurrentCTA(getLastViewedCta())
    setActiveTab('configurator')
  }

  const showAnimationsTab = () => {
    showAnnotations([
      Annotations.OPEN,
      Annotations.EXTEND_HANDLE,
      Annotations.WHEEL_SPINNER_ON,
    ])
    setShowCtas(false)
    setCurrentCTA(null)
    setActiveTab('animations')
    activateAnimationModifier()
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
          onClick={showConfiguratorTab}
          title='Configurator'
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
          onClick={showAnimationsTab}
          title='Animations'
        >
          ANIMATIONS
        </button>
      </div>
    </div>
  )
}
