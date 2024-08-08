import { extractCta } from './subHelpers/extractingValuesFromActionType'

export const setInitialComponent = (
  initialComponent: string | null,
  actionType: string
): string => {
  return initialComponent === null ? extractCta(actionType) : initialComponent
}

export default setInitialComponent
