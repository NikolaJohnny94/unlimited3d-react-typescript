import type { colorsState } from '../context/initialState'

export const showSpecificColors = (
  initialComponent: string,
  state: colorsState,
  color: string
) => {
  return state.initialComponent !== initialComponent &&
    state.initialComponent !== null &&
    color !== state.colorSelected
    ? 'hidden'
    : 'visible'
}
