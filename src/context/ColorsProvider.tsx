import { useReducer } from 'react'
import { ColorsContext } from './ColorsContext'
import { colorsReducer } from './colorsReducer'
import { initialState } from './initialState'

type Props = {
  children: any
}

export const ColorsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(colorsReducer, initialState)

  return (
    <ColorsContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorsContext.Provider>
  )
}
