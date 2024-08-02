import { initialState } from './initialState'

// export const initialState: any = {
//     initialComponent: null,
//     colorSelected: '',
//   }

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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
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
            ? action.type.split('/')[0]
            : state.initialComponent,
        colorSelected:
          state.initialComponent === null ||
          action.type.split('/')[0] === state.initialComponent
            ? action.type.split('/')[1]
            : state.colorSelected,
        resetInitialComponentColors:
          state.colorSelected !== action.type.split('/')[1] ? true : false,
        lastTriggeredBy:
          !state.lastTriggeredBy ||
          !state.lastTriggeredBy.includes(action.type.split('/')[0])
            ? state.lastTriggeredBy.push(action.type.split('/')[0])
            : state.lastTriggeredBy,
      }
    default:
      return state
  }
}
