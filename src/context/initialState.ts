export type colorsState = {
  initialComponent: string | null
  colorSelected: string
}

export const initialState: any = {
  initialComponent: null,
  colorSelected: 'aluminum',
  resetInitialComponentColors: false,
  lastTriggeredBy: [],
}
