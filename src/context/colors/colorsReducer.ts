import { initialState } from './initialState'
import { changeColor } from '../../utils'
import {
  setLastTriggeredBy,
  setInitialComponent,
  setColorSelected,
} from './helpers'

// const resetColor = (
//   colorSelected: string,
//   cta: string,
//   initialComponent: string | null
// ) => {
//   let newObj: any = {}
//   if (initialComponent) {
//     const ctas = [
//       'BODY_COLOR',
//       'WHEELS_COLOR',
//       'CORNERS_COLOR',
//       'HANDLES_COLOR',
//     ]
//     const otherCtas: string[] = ctas.filter(
//       (cta: string) => cta !== initialComponent
//     )
//     console.log(otherCtas)
//     const returnOtherCtas = () => {
//       otherCtas.forEach((cta: string) => ({
//         [`${cta.split('_')[0].toLowerCase()}`]: 'ALUMINIUM',
//       }))
//     }

//     otherCtas.forEach((cta: string) => ({
//       [`${cta.split('_')[0].toLowerCase()}`]: 'ALUMINIUM',
//     }))
//     newObj = {}
//     newObj = {
//       [initialComponent.split('_')[0].toLowerCase()]: colorSelected,
//       returnOtherCtas()
//     }
//   }
//   return newObj
// }

const resetColor = (initialComponent: string | null, colorSelected: string) => {
  switch (initialComponent) {
    case 'BODY_COLOR':
      return {
        body: colorSelected,
        handles: 'ALUMINIUM',
        corners: 'ALUMINIUM',
        wheels: 'ALUMINIUM',
      }
    case 'CORNERS_COLOR':
      return {
        body: 'ALUMINIUM',
        handles: 'ALUMINIUM',
        corners: colorSelected,
        wheels: 'ALUMINIUM',
      }
    case 'HANDLES_COLOR':
      return {
        body: 'ALUMINIUM',
        handles: 'ALUMINIUM',
        corners: colorSelected,
        wheels: 'ALUMINIUM',
      }
    case 'WHEELS_COLOR':
      return {
        body: 'ALUMINIUM',
        handles: 'ALUMINIUM',
        corners: 'ALUMINIUM',
        wheels: colorSelected,
      }
    default: {
      return {
        body: 'ALUMINIUM',
        handles: 'ALUMINIUM',
        corners: 'ALUMINIUM',
        wheels: 'ALUMINIUM',
      }
    }
  }
}

export const colorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET_COLORS':
      return {
        ...state,
        colors: resetColor(state.initialComponent, state.colorSelected),
      }
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
          body: 'ALUMINIUM',
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
          body: 'BLACK',
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
          body: 'RED',
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
          body: 'BLUE',
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
          body: 'GREEN',
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
          body: 'ORANGE',
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
          corners: 'ALUMINIUM',
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
          corners: 'BLACK',
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
          corners: 'RED',
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
          corners: 'BLUE',
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
          corners: 'GREEN',
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
          corners: 'ORANGE',
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
          wheels: 'ALUMINIUM',
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
          wheels: 'BLACK',
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
          wheels: 'RED',
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
          wheels: 'BLUE',
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
          wheels: 'GREEN',
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
          wheels: 'ORANGE',
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
          handles: 'ALUMINIUM',
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
          handles: 'BLACK',
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
          handles: 'RED',
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
          handles: 'BLUE',
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
          handles: 'GREEN',
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
          handles: 'ORANGE',
        },
      }

    default:
      return state
  }
}
