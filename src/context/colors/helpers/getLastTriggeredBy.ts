const getLastTriggeredBy = (state: any, action: any): string[] => {
  return !state.lastTriggeredBy ||
    !(state.lastTriggeredBy as string[]).includes(action.type.split('/')[0])
    ? (state.lastTriggeredBy as string[]).push(action.type.split('/')[0])
    : state.lastTriggeredBy
}

export default getLastTriggeredBy
