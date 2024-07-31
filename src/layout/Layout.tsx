import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div id='tabs' className='flex justify-center p-3'>
        <div id='configurator' className='p-3'>
          <Link to='/configurator'>CONFIGURATOR</Link>
        </div>
        <div id='animations' className='p-3'>
          <Link to='/animations'>ANIMATIONS</Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
