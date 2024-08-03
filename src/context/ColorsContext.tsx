import { createContext, useContext, type Dispatch } from 'react'

import type { colorsState } from './initialState'

type ColorsContextType = {
  state: colorsState
  currentCTA: string | null
  dispatch: Dispatch<any>
  setCurrentCTA: React.Dispatch<React.SetStateAction<string | null>>
}

export const ColorsContext = createContext({} as ColorsContextType)

export const useColorsContext = () => useContext(ColorsContext)
