import { createContext, useContext, type Dispatch } from 'react'

import type { ColorsState } from '../../types/ColorsState.type'

type ColorsContextType = {
  state: ColorsState
  currentCTA: string | null
  showCTAS: boolean
  dispatch: Dispatch<any>
  setCurrentCTA: React.Dispatch<React.SetStateAction<string | null>>
  setShowCtas: React.Dispatch<React.SetStateAction<boolean>>
}

export const ColorsContext = createContext({} as ColorsContextType)

export const useColorsContext = () => useContext(ColorsContext)
