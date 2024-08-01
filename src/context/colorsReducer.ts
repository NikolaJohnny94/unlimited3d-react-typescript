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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'aluminium',
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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'black',
      }
    case 'body-color/red':
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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'red',
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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'blue',
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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'green',
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
        initialComponent: action.payload.initialComponent,
        colorSelected: 'orange',
      }
    default:
      return state
  }
}
