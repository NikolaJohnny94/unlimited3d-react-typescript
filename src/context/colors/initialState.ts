import type { ColorsState } from '../../types/ColorsState.type'

export const initialState: ColorsState = {
  initialComponent: null,
  colorSelected: 'aluminum',
  lastTriggeredBy: [],
  colors: {
    body: 'ALUMINIUM',
    corners: 'ALUMINIUM',
    handles: 'ALUMINIUM',
    wheels: 'ALUMINIUM',
  },
}
