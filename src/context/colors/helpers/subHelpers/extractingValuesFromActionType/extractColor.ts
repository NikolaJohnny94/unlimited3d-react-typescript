import { Colors } from '@/enums/Colors.enum'

export const extractColor = (actionType: string): Colors => {
  return actionType.split('/')[1] as Colors
}
