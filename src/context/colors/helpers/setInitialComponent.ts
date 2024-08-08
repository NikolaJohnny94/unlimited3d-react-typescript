import { extractCtaAndColorFromActionType } from './subHelpers/extractCtaAndColorFromActionType'

export const setInitialComponent = (
  initialComponent: string | null,
  actionType: string
): string => {
  return initialComponent === null
    ? extractCtaAndColorFromActionType('cta', actionType)
    : initialComponent
}

export default setInitialComponent
