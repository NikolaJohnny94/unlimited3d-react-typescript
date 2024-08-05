import { createContext, useContext, type Dispatch } from 'react'

type AnnotationContextType = {
  state: any
  dispatch: React.Dispatch<any>
}

export const AnnotationsContext = createContext({} as AnnotationContextType)

export const useAnnotationsContext = () => useContext(AnnotationsContext)
