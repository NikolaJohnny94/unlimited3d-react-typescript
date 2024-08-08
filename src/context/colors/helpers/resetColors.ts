import { Colors } from '@/enums/Colors.enum'

export const resetColors = (
  initialComponent: string | null,
  colorSelected: Colors
) => {
  switch (initialComponent) {
    case 'BODY_COLOR':
      return {
        body: colorSelected,
        handles: Colors.ALUMINIUM,
        corners: Colors.ALUMINIUM,
        wheels: Colors.ALUMINIUM,
      }
    case 'CORNERS_COLOR':
      return {
        body: Colors.ALUMINIUM,
        handles: Colors.ALUMINIUM,
        corners: colorSelected,
        wheels: Colors.ALUMINIUM,
      }
    case 'HANDLES_COLOR':
      return {
        body: Colors.ALUMINIUM,
        handles: Colors.ALUMINIUM,
        corners: colorSelected,
        wheels: Colors.ALUMINIUM,
      }
    case 'WHEELS_COLOR':
      return {
        body: Colors.ALUMINIUM,
        handles: Colors.ALUMINIUM,
        corners: Colors.ALUMINIUM,
        wheels: colorSelected,
      }
    default: {
      return {
        body: Colors.ALUMINIUM,
        handles: Colors.ALUMINIUM,
        corners: Colors.ALUMINIUM,
        wheels: Colors.ALUMINIUM,
      }
    }
  }
}
