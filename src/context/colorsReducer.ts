import { initialState } from './initialState'

// export const initialState: any = {
//     initialComponent: null,
//     colorSelected: '',
//   }

export const colorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'body-color/aluminium':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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
    case 'body-color/black':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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
    case 'body-color/red':
      console.log(state.colorSelected !== action.type.split('/')[1])
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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

    case 'body-color/blue':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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
    case 'body-color/green':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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

    case 'body-color/orange':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.bodyColorsParts[0],
              action.payload.bodyColorsParts[1],
            ],
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
    case 'corners-color/aluminium':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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
    case 'corners-color/black':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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
    case 'corners-color/red':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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

    case 'corners-color/blue':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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
    case 'corners-color/green':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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

    case 'corners-color/orange':
      Unlimited3D.changeMaterials({
        partObjects: [
          {
            parts: [
              action.payload.cornersColorsParts[0],
              action.payload.cornersColorsParts[1],
            ],
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
    default:
      return state
  }
}
