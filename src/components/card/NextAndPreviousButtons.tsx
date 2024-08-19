import { SVG } from '@components/common'
import { setNextAndPreviousButtons } from '@/helpers'
import { CTA } from '@/enums/CTA.enum'
import type { Dispatch, FC } from 'react'

type Props = {
  cta: CTA
  setCurrentCTA: Dispatch<React.SetStateAction<CTA | null>>
}

export const NextAndPreviousButtons: FC<Props> = ({ cta, setCurrentCTA }) => {
  return (
    <>
      <div
        className={`flex justify-between p-6 lg:px-6 lg:py-10  xl:px-6 xl:py-10 ${
          cta === CTA.BODY ? '' : 'mt-[120px] lg:mt-[120px] xl:mt-[120px]'
        }`}
      >
        <button
          className='scale-100 transition active:scale-90 delay-75'
          onClick={() => setCurrentCTA(setNextAndPreviousButtons(cta)[0])}
          title='Previous'
        >
          <SVG name='ARROW LEFT' />
        </button>
        <div className='flex justify-center items-center'>
          <span className='mr-2 text-[#121010] font-manrope text-base font-normal leading-[1.25] !text-[18px]'>
            Next
          </span>
          <button
            onClick={() => setCurrentCTA(setNextAndPreviousButtons(cta)[1])}
            title='Next'
            className='scale-100 transition active:scale-90 delay-75'
          >
            <SVG name='ARROW RIGHT' />
          </button>
        </div>
      </div>
    </>
  )
}
