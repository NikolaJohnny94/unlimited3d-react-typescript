import { useColorsContext } from '../context/colors/ColorsContext'

export const CTAButtons = () => {
  const { currentCTA, showCTAS, setCurrentCTA } = useColorsContext()
  return (
    <div
      className={`flex p-3 absolute bottom-[2.5%] left-1/2 transform -translate-x-1/2 translate-y-[2.5%] gap-8 ${
        showCTAS ? 'visible' : 'hidden'
      }`}
    >
      <button
        className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[44px]'
        onClick={() => setCurrentCTA('body')}
      >
        <span className='text-[#121010] font-manrope text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2'>
          <input type='radio' checked={currentCTA === 'body'} /> BODY
        </span>
      </button>
      <button
        className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[44px]'
        onClick={() => setCurrentCTA('handles')}
      >
        <span className='text-[#121010] font-manrope text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2'>
          <input type='radio' checked={currentCTA === 'handles'} /> HANDLES
        </span>
      </button>
      <button
        className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[44px]'
        onClick={() => setCurrentCTA('corners')}
      >
        <span className='text-[#121010] font-manrope text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2'>
          <input type='radio' checked={currentCTA === 'corners'} /> CORNERS
        </span>
      </button>
      <button
        className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[44px]'
        onClick={() => setCurrentCTA('wheels')}
      >
        <span className='text-[#121010] font-manrope text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2'>
          <input type='radio' checked={currentCTA === 'wheels'} /> WHEELS
        </span>
      </button>
    </div>
  )
}
