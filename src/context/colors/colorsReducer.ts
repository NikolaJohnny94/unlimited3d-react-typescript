import { initialState } from './initialState'
import {
  setLastTriggeredBy,
  setInitialComponent,
  setColorSelected,
  resetColors,
} from './helpers'
import { changeColor } from '@/utils'
import {
  Colors,
  ActionTypeWithPayload,
  ActionTypeWithoutPayload,
} from '@/enums'
import type { Action } from '@/types'

export const colorsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypeWithPayload.BODY_COLOR_ALUMINIUM:
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

    case ActionTypeWithPayload.BODY_COLOR_BLACK:
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
    case ActionTypeWithPayload.BODY_COLOR_RED:
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

    case ActionTypeWithPayload.BODY_COLOR_BLUE:
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
    case ActionTypeWithPayload.BODY_COLOR_GREEN:
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

    case ActionTypeWithPayload.BODY_COLOR_ORANGE:
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
    case ActionTypeWithPayload.CORNERS_COLOR_ALUMINIUM:
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
    case ActionTypeWithPayload.CORNERS_COLOR_BLACK:
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
    case ActionTypeWithPayload.CORNERS_COLOR_RED:
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

    case ActionTypeWithPayload.CORNERS_COLOR_BLUE:
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
    case ActionTypeWithPayload.CORNERS_COLOR_GREEN:
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

    case ActionTypeWithPayload.CORNERS_COLOR_ORANGE:
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
    case ActionTypeWithPayload.WHEELS_COLOR_ALUMINIUM:
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
    case ActionTypeWithPayload.WHEELS_COLOR_BLACK:
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
    case ActionTypeWithPayload.WHEELS_COLOR_RED:
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

    case ActionTypeWithPayload.WHEELS_COLOR_BLUE:
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
    case ActionTypeWithPayload.WHEELS_COLOR_GREEN:
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

    case ActionTypeWithPayload.WHEELS_COLOR_ORANGE:
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
    case ActionTypeWithPayload.HANDLES_COLOR_ALUMINIUM:
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
    case ActionTypeWithPayload.HANDLES_COLOR_BLACK:
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
    case ActionTypeWithPayload.HANDLES_COLOR_RED:
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

    case ActionTypeWithPayload.HANDLES_COLOR_BLUE:
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
    case ActionTypeWithPayload.HANDLES_COLOR_GREEN:
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

    case ActionTypeWithPayload.HANDLES_COLOR_ORANGE:
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
    case ActionTypeWithoutPayload.RESET_COLORS:
      return {
        ...state,
        colors: resetColors(state.initialComponent, state.colorSelected),
      }
    default:
      return state
  }
}
