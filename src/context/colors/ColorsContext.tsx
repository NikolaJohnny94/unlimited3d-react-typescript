import { createContext, useContext, type Dispatch } from 'react'

import type { ColorsState } from '../../types/ColorsState.type'
import { CTA } from '@/enums'

type ColorsContextType = {
  state: ColorsState
  currentCTA: CTA | null
  showCTAS: boolean
  largeOrGreaterScreen: boolean
  dispatch: Dispatch<any>
  setCurrentCTA: React.Dispatch<React.SetStateAction<CTA | null>>
  setShowCtas: React.Dispatch<React.SetStateAction<boolean>>
}

export const ColorsContext = createContext({} as ColorsContextType)

export const useColorsContext = () => useContext(ColorsContext)
