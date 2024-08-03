import { useEffect } from 'react'
import initUnlimited3D from './client/init'
import {
  RenderSelectedCTA,
  CTAButtons,
  ModelContainer,
  Tabs,
} from './components'

function App() {
  useEffect(() => {
    initUnlimited3D()
  }, [])

  return (
    <div className='main_wrapp relative'>
      {/* Configurator and Animations tabs */}
      <Tabs />
      {/* CTA buttons */}
      <CTAButtons />
      {/* Rendering color picker for selected CTA*/}
      <RenderSelectedCTA />
      {/* 3D model container with laoding spinner */}
      <ModelContainer />
    </div>
  )
}

export default App
