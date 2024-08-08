import { extractCta } from './subHelpers/extractingValuesFromActionType'

export const setLastTriggeredBy = (
  lastTriggeredBy: string[],
  actionType: string
): string[] => {
  if (!lastTriggeredBy.includes(extractCta(actionType))) {
    lastTriggeredBy.push(extractCta(actionType))
    return lastTriggeredBy
  } else {
    return lastTriggeredBy
  }
}
