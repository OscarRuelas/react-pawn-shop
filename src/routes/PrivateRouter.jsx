import * as React from 'react'
import Navbar from '../Componentes/Navbar'

const PrivateRouter = ({children}) => {
  return (
      <div className='h-screen w-screen flex flex-col justify-between'>
          <div className='flex h-full'>
              <Navbar />
              {children}
          </div>
      </div>
  )
}

export default PrivateRouter