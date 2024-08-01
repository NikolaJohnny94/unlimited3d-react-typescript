import { createContext, useContext, type Dispatch } from 'react'

import type { colorsState } from './initialState'

type ColorsContextType = {
  state: colorsState
  dispatch: Dispatch<any>
}

export const ColorsContext = createContext({} as any)

export const useColorsContext = () => useContext(ColorsContext)
