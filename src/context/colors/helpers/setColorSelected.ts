import {
  extractColor,
  extractCta,
} from './subHelpers/extractingValuesFromActionType'
import { Colors } from '@/enums/Colors.enum'

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
