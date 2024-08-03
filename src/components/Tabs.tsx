import { hideAnnotations, showAnnotations } from '../utils'

export const Tabs = () => {
  return (
    <div
      id='tabs'
      className='flex justify-center p-3 absolute top-[2.5%] left-1/2 transform -translate-x-1/2 -translate-y-[2.5%]'
    >
      <div id='configurator' className='p-3 bg-white'>
        <button
          onClick={() =>
            hideAnnotations(['Open', 'Extend handle', 'Wheel spinner on'])
          }
        >
          CONFIGURATOR
        </button>
      </div>
      <div id='animations' className='p-3 bg-white'>
        <button
          onClick={() =>
            showAnnotations(['Open', 'Extend handle', 'Wheel spinner on'])
          }
        >
          ANIMATIONS
        </button>
      </div>
    </div>
  )
}
