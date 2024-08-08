import { initialState } from './initialState'
import { changeColor } from '../../utils'
import {
  setLastTriggeredBy,
  setInitialComponent,
  setColorSelected,
  resetColors,
} from './helpers'
import { Colors } from '@/enums/Colors.enum'

// type Actions = {
//   type: string

//   payload?: {
//     bodyColorsParts: string[]
//     bodyColor: string
//     cornersColorsParts: string[]
//     cornersColor: string
//     handlesColorsParts: string[]
//     handlesColor: string
//     wheelsColorsParts: string[]
//     wheelsColor: string
//   }
// }

export const colorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BODY_COLOR/ALUMINIUM':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.ALUMINIUM,
        },
      }
    case 'BODY_COLOR/BLACK':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.BLACK,
        },
      }
    case 'BODY_COLOR/RED':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.RED,
        },
      }

    case 'BODY_COLOR/BLUE':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.BLUE,
        },
      }
    case 'BODY_COLOR/GREEN':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.GREEN,
        },
      }

    case 'BODY_COLOR/ORANGE':
      changeColor(action.payload.bodyColorsParts, action.payload.bodyColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          body: Colors.ORANGE,
        },
      }

    //Corners
    case 'CORNERS_COLOR/ALUMINIUM':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.ALUMINIUM,
        },
      }
    case 'CORNERS_COLOR/BLACK':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.BLACK,
        },
      }
    case 'CORNERS_COLOR/RED':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.RED,
        },
      }

    case 'CORNERS_COLOR/BLUE':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.BLUE,
        },
      }
    case 'CORNERS_COLOR/GREEN':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.GREEN,
        },
      }

    case 'CORNERS_COLOR/ORANGE':
      changeColor(
        action.payload.cornersColorsParts,
        action.payload.cornersColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          corners: Colors.ORANGE,
        },
      }
    //wheels
    case 'WHEELS_COLOR/ALUMINIUM':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.ALUMINIUM,
        },
      }
    case 'WHEELS_COLOR/BLACK':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.BLACK,
        },
      }
    case 'WHEELS_COLOR/RED':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.RED,
        },
      }

    case 'WHEELS_COLOR/BLUE':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.BLUE,
        },
      }
    case 'WHEELS_COLOR/GREEN':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.GREEN,
        },
      }

    case 'WHEELS_COLOR/ORANGE':
      changeColor(action.payload.wheelsColorsParts, action.payload.wheelsColor)
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          wheels: Colors.ORANGE,
        },
      }

    //handles
    case 'HANDLES_COLOR/ALUMINIUM':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.ALUMINIUM,
        },
      }
    case 'HANDLES_COLOR/BLACK':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.BLACK,
        },
      }
    case 'HANDLES_COLOR/RED':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.RED,
        },
      }

    case 'HANDLES_COLOR/BLUE':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.BLUE,
        },
      }
    case 'HANDLES_COLOR/GREEN':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.GREEN,
        },
      }

    case 'HANDLES_COLOR/ORANGE':
      changeColor(
        action.payload.handlesColorsParts,
        action.payload.handlesColor
      )
      return {
        ...state,
        initialComponent: setInitialComponent(
          state.initialComponent,
          action.type
        ),
        colorSelected: setColorSelected(
          state.initialComponent,
          state.colorSelected,
          action.type
        ),
        lastTriggeredBy: setLastTriggeredBy(state.lastTriggeredBy, action.type),
        colors: {
          ...state.colors,
          handles: Colors.ORANGE,
        },
      }
    case 'RESET_COLORS':
      return {
        ...state,
        colors: resetColors(state.initialComponent, state.colorSelected),
      }
    default:
      return state
  }
}
