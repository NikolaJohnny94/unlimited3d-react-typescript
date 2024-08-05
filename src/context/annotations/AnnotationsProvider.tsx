import { useReducer } from 'react'
import { AnnotationsContext } from './AnnotationContext'
import { annotationsReducer } from './annotationsReducer'
import { initialState } from './initialState'

type Props = {
  children: React.ReactElement
}

export const ColorsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(annotationsReducer, initialState)

  return (
    <AnnotationsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AnnotationsContext.Provider>
  )
}
