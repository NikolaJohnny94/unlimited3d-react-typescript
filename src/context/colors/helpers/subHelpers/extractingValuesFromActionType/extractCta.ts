export const extractCta = (actionType: string) => {
  return actionType.split('/')[0]
}
