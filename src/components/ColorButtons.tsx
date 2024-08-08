import type { Dispatch, FC } from 'react'
import { Button } from './Button'

type Props = {
  cta: string
  currentColor: string
  // setColor: Dispatch<React.SetStateAction<string>>
}

export const ColorButtons: FC<Props> = ({ cta, currentColor }) => {
  return (
    <div className='hidden  lg:visible xl:visible lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-3'>
      <Button CTA={cta} color='ALUMINIUM' currentColor={currentColor} />
      <Button CTA={cta} color='BLACK' currentColor={currentColor} />
      <Button CTA={cta} color='RED' currentColor={currentColor} />
      <Button CTA={cta} color='BLUE' currentColor={currentColor} />
      <Button CTA={cta} color='GREEN' currentColor={currentColor} />
      <Button CTA={cta} color='ORANGE' currentColor={currentColor} />
    </div>
  )
}
