import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './views/Home.tsx'
// import Configurator from './views/Configurator.tsx'
// import Animations from './views/Animations.tsx'
// import Layout from './layout/Layout.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/configurator' element={<Configurator />} />
//           <Route path='/animations' element={<Animations />} />
//         </Routes>
//       </Layout>
//     </Router>
//   </React.StrictMode>
// )
