export type ColorsState = {
  initialComponent: null | string
  colorSelected: string
  lastTriggeredBy: string[]
  colors: {
    body: string
    corners: string
    handles: string
    wheels: string
  }
}
