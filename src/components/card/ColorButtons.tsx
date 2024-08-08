import { Button } from '@components/common'
import { Colors, CTA } from '@/enums'
import type { FC } from 'react'

type Props = {
  cta: CTA
  currentColor: string
}

export const ColorButtons: FC<Props> = ({ cta, currentColor }) => {
  return (
    <div className='hidden  lg:visible xl:visible lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-3'>
      <Button cta={cta} color={Colors.ALUMINIUM} currentColor={currentColor} />
      <Button cta={cta} color={Colors.BLACK} currentColor={currentColor} />
      <Button cta={cta} color={Colors.RED} currentColor={currentColor} />
      <Button cta={cta} color={Colors.BLUE} currentColor={currentColor} />
      <Button cta={cta} color={Colors.GREEN} currentColor={currentColor} />
      <Button cta={cta} color={Colors.ORANGE} currentColor={currentColor} />
    </div>
  )
}
