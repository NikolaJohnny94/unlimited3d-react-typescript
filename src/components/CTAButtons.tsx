import type { FC } from 'react'

type Props = {
  setCurrentCTA: (value: React.SetStateAction<string | null>) => void
}

export const CTAButtons: FC<Props> = ({ setCurrentCTA }) => {
  return (
    <div
      id='ctas'
      className='flex justify-center p-3 absolute bottom-[2.5%] left-1/2 transform -translate-x-1/2 translate-y-[2.5%]'
    >
      <div id='body' className='p-3 bg-white m-1 rounded-md'>
        <button onClick={() => setCurrentCTA('body')}>BODY</button>
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
  )
}
