export const extractCtaAndColorFromActionType = (
  itemToExtract: string,
  actionType: string
) => {
  switch (itemToExtract) {
    case 'cta':
      return actionType.split('/')[0]
    case 'color':
      return actionType.split('/')[1]
    default:
      return ''
  }
}
