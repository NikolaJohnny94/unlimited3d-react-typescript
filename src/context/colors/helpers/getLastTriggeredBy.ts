const getLastTriggeredBy = (
  lastTriggeredBy: string[],
  actionType: string
): string[] => {
  if (!lastTriggeredBy.includes(actionType.split('/')[0])) {
    lastTriggeredBy.push(actionType.split('/')[0])
    return lastTriggeredBy
  } else {
    return lastTriggeredBy
  }
}

export default getLastTriggeredBy
