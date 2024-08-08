import { Colors } from '@/enums/Colors.enum'

export type ColorsState = {
  initialComponent: null | string
  colorSelected: Colors
  lastTriggeredBy: string[]
  colors: {
    body: Colors
    corners: Colors
    handles: Colors
    wheels: Colors
  }
}
