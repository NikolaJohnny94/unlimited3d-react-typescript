import { ActionTypeWithPayload } from '@/enums'

type ActionWithoutPayloadType = 'RESET_COLORS'

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
  type: ActionWithoutPayloadType
}

export type Action = ActionWithPayload | ActionWithoutPayload
