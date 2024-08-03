import { useEffect } from 'react'
import initUnlimited3D from './client/init'
import { useColorsContext } from './context/ColorsContext'
import {
  RenderSelectedCTA,
  CTAButtons,
  ModelContainer,
  Tabs,
} from './components'

function App() {
  const { currentCTA, setCurrentCTA } = useColorsContext()

  useEffect(() => {
    initUnlimited3D()
  }, [])

  return (
    <div className='main_wrapp relative'>
      {/* Configurator and Animations tabs */}
      <Tabs />
      {/* CTA buttons */}
      <CTAButtons setCurrentCTA={setCurrentCTA} />
      {/* Rendering color picker for selected CTA*/}
      <RenderSelectedCTA currentCTA={currentCTA} />
      {/* 3D model container with laoding spinner */}
      <ModelContainer />
    </div>
  )
}

export default App
