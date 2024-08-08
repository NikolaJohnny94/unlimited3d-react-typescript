import { Colors } from '@/enums/Colors.enum'
import type { ColorsState } from '../../types/ColorsState.type'

export const initialState: ColorsState = {
  initialComponent: null,
  colorSelected: Colors.ALUMINIUM,
  lastTriggeredBy: [],
  colors: {
    body: Colors.ALUMINIUM,
    corners: Colors.ALUMINIUM,
    handles: Colors.ALUMINIUM,
    wheels: Colors.ALUMINIUM,
  },
}
