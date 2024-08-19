import { ActionTypeWithPayload } from '@/enums'

type Payload = {
  bodyColorsParts: string[]
  bodyColor: string
  cornersColorsParts: string[]
  cornersColor: string
  handlesColorsParts: string[]
  handlesColor: string
  wheelsColorsParts: string[]
  wheelsColor: string
}

type ActionWithPayload = {
  type: ActionTypeWithPayload
  payload: Payload
}

type ActionWithoutPayload = {
  type: 'RESET_COLORS'
}

export type Action = ActionWithPayload | ActionWithoutPayload
