import { extractCtaAndColorFromActionType } from './subHelpers/extractCtaAndColorFromActionType'

export const setColorSelected = (
  initialComponent: string | null,
  colorSelected: string,
  actionType: string
) => {
  return initialComponent === null ||
    extractCtaAndColorFromActionType('cta', actionType) === initialComponent
    ? extractCtaAndColorFromActionType('color', actionType)
    : colorSelected
}
