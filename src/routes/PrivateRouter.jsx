import * as React from 'react'
import Navbar from '../Componentes/Navbar'

const PrivateRouter = ({children}) => {

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;

}

export default PrivateRouter