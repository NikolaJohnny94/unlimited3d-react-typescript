import { initialState } from './initialState'
import getLastTriggeredBy from './helpers/getLastTriggeredBy'

export const colorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BODY_COLOR/ALUMINIUM':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'BODY_COLOR/BLACK':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'BODY_COLOR/RED':
      console.log(state.colorSelected !== action.type.split('/')[1])
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'BODY_COLOR/BLUE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'BODY_COLOR/GREEN':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'BODY_COLOR/ORANGE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.bodyColorsParts,
            material: action.payload.bodyColor,
          },
        ],
      })

      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    //Corners
    case 'CORNERS_COLOR/ALUMINIUM':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'CORNERS_COLOR/BLACK':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'CORNERS_COLOR/RED':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'CORNERS_COLOR/BLUE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'CORNERS_COLOR/GREEN':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'CORNERS_COLOR/ORANGE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.cornersColorsParts,
            material: action.payload.cornersColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    //wheels
    case 'WHEELS_COLOR/ALUMINIUM':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'WHEELS_COLOR/BLACK':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'WHEELS_COLOR/RED':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'WHEELS_COLOR/BLUE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'WHEELS_COLOR/GREEN':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'WHEELS_COLOR/ORANGE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.wheelsColorsParts,
            material: action.payload.wheelsColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    //handles
    case 'HANDLES_COLOR/ALUMINIUM':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'HANDLES_COLOR/BLACK':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'HANDLES_COLOR/RED':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'HANDLES_COLOR/BLUE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    case 'HANDLES_COLOR/GREEN':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }

    case 'HANDLES_COLOR/ORANGE':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: action.payload.handlesColorsParts,
            material: action.payload.handlesColor,
          },
        ],
      })
      return {
        ...state,
        initialComponent:
          state.initialComponent === null
            ? (action.type.split('/')[0] as string)
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? (action.type.split('/')[1] as string)
            : state.colorSelected,
        lastTriggeredBy: getLastTriggeredBy(state.lastTriggeredBy, action.type),
      }
    default:
      return state
  }
}
