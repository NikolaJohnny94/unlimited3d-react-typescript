import type { ColorsState } from '../types/ColorsState.type'

export const showSpecificColors = (
  initialComponent: string,
  state: ColorsState,
  color: string
) => {
  return state.initialComponent !== initialComponent &&
    state.initialComponent !== null &&
    color !== state.colorSelected
    ? 'hidden'
    : 'visible'
}
