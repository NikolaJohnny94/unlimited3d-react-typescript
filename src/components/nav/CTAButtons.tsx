import { CTA } from '@/enums'
import { useColorsContext } from '../../context/colors/ColorsContext'

export const CTAButtons = () => {
  const { currentCTA, showCTAS, setCurrentCTA } = useColorsContext()
  if (showCTAS) {
    return (
      <div className='grid grid-cols-2 gap-4 lg:flex xl:flex lg:gap-8 xl:gap-8 p-3 absolute bottom-[2.5%] left-1/2 transform -translate-x-1/2 translate-y-[2.5%] w-[90%] md:w-[45%] lg:w-[90%] xl:w-[90%] justify-center'>
        <button
          className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[36px]'
          onClick={() => {
            setCurrentCTA(CTA.BODY), localStorage.setItem('cta', 'body')
          }}
        >
          <span className='text-[#121010] text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2 justify-center items-center'>
            <input
              type='radio'
              checked={currentCTA === CTA.BODY}
              className='accent-black'
            />
            BODY
          </span>
        </button>
        <button
          className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[36px]'
          onClick={() => {
            setCurrentCTA(CTA.HANDLES), localStorage.setItem('cta', 'handles')
          }}
        >
          <span className='text-[#121010] text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2 justify-center items-center'>
            <input
              type='radio'
              checked={currentCTA === CTA.HANDLES}
              className='accent-black'
            />{' '}
            HANDLES
          </span>
        </button>
        <button
          className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[36px]'
          onClick={() => {
            setCurrentCTA(CTA.CORNERS), localStorage.setItem('cta', 'corners')
          }}
        >
          <span className='text-[#121010] text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2 justify-center items-center'>
            <input
              type='radio'
              checked={currentCTA === CTA.CORNERS}
              className='accent-black'
            />{' '}
            CORNERS
          </span>
        </button>
        <button
          className='inline-flex pr-6 pl-[18px] py-3 justify-center items-center gap-2 rounded-lg bg-white h-[36px]'
          onClick={() => {
            setCurrentCTA(CTA.WHEELS), localStorage.setItem('cta', 'wheels')
          }}
        >
          <span className='text-[#121010] text-base font-normal leading-[1.25] tracking-[0.32px] uppercase h-[20px] flex gap-2 justify-center items-center'>
            <input
              type='radio'
              checked={currentCTA === CTA.WHEELS}
              className='accent-black'
            />
            WHEELS
          </span>
        </button>
      </div>
    )
  }
}
