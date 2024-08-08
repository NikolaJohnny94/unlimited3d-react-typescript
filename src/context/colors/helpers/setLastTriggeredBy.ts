import { extractCtaAndColorFromActionType } from './subHelpers/extractCtaAndColorFromActionType'

export const setLastTriggeredBy = (
  lastTriggeredBy: string[],
  actionType: string
): string[] => {
  if (
    !lastTriggeredBy.includes(
      extractCtaAndColorFromActionType('cta', actionType)
    )
  ) {
    lastTriggeredBy.push(extractCtaAndColorFromActionType('cta', actionType))
    return lastTriggeredBy
  } else {
    return lastTriggeredBy
  }
}
