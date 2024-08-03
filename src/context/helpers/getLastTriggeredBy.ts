const getLastTriggeredBy = (state: any, action: any): string[] => {
  return !state.lastTriggeredBy ||
    !state.lastTriggeredBy.includes(action.type.split('/')[0])
    ? state.lastTriggeredBy.push(action.type.split('/')[0])
    : state.lastTriggeredBy
}

export default getLastTriggeredBy
