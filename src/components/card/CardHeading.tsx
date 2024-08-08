import { FC } from 'react'
import { SVG } from '@components/common'

type Props = {
  cta: string
  color: string
  closeColorPanel: () => void
}

export const CardHeading: FC<Props> = ({ cta, color, closeColorPanel }) => {
  return (
    <>
      <div className='flex justify-between mt-[32px] mb-[24px] px-6'>
        <div className='color-picker-heading text-black text-base font-normal leading-normal'>
          {cta} Color
        </div>
        <button
          className='text-black text-base font-normal leading-normal scale-100 transition active:scale-90 delay-75'
          onClick={closeColorPanel}
        >
          <SVG name='X' />
        </button>
      </div>
      <div className='flex justify-between px-6 pb-6 '>
        <div className='text-black text-base font-normal leading-normal !text-[18px]'>
          Select Color
        </div>
        <div className='text-black text-base font-normal leading-normal !text-[18px]'>
          {color}
        </div>
      </div>
    </>
  )
}
