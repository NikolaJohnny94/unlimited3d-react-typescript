import type { Dispatch, FC } from 'react'
import SVG from '../SVG'

type Props = {
  cta: string
  setCurrentCTA: Dispatch<React.SetStateAction<string | null>>
}

export const NextAndPreviousButtons: FC<Props> = ({ cta, setCurrentCTA }) => {
  const setNextAndPreviousButtons = (cta: string) => {
    switch (cta) {
      case 'BODY':
        return ['wheels', 'handles']
      case 'HANDLES':
        return ['body', 'corners']
      case 'CORNERS':
        return ['handles', 'wheels']
      case 'WHEELS':
        return ['corners', 'body']
      default:
        return ['wheels', 'handles']
    }
  }
  return (
    <>
      <div
        className={`flex justify-between p-6 ${
          cta === 'BODY' ? '' : 'mt-[30px] lg:mt-[150px] xl:mt-[150px]'
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
