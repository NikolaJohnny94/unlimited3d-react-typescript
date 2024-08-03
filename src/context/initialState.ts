export type colorsState = {
  initialComponent: null | string
  colorSelected: string
  lastTriggeredBy: string[]
}

export const initialState: colorsState = {
  initialComponent: null,
  colorSelected: 'aluminum',
  lastTriggeredBy: [],
}
