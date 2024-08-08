import { Colors } from '@/enums/Colors.enum'
import {
  extractColor,
  extractCta,
} from './subHelpers/extractingValuesFromActionType'

export const setColorSelected = (
  initialComponent: string | null,
  colorSelected: Colors,
  actionType: string
) => {
  return initialComponent === null ||
    extractCta(actionType) === initialComponent
    ? extractColor(actionType)
    : colorSelected
}
