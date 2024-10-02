import React, { useState } from 'react'
import CardComponent from '../Componentes/Card'
import InputForm from '../Componentes/InputForm'
import BottonForm from '../Componentes/BottonForm'
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';
import { useLogin } from '../Hooks/useLogin';

const Login = () => {
  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const { IniciarSesion } = useLogin();

  const Acceso = (e) =>{
    e.preventDefault();
    let credenciales = {
      "nombreusuario":user,
      "password": contra
    }
    IniciarSesion('http://localhost:3000/login', credenciales);
  }
  
  return (
    <>
        <div className='flex justify-center w-screen'>
            <CardComponent >
                <div className='flex flex-col items-center gap-3'>
                    <LoginIcon fontSize="large" color='primary' />
                    <Typography component="h1" variant="h5" gutterBottom>Iniciar Sesión</Typography>
                    <InputForm label= "Usuario *" type= "text" value= {user} onChange= {(e) =>setUser(e.target.value)} />
                    <InputForm label= "Contraseña *" type= "password" value= {contra} onChange= {(e) => setContra(e.target.value)} />
                </div>
                <BottonForm descripcion="Iniciar Sesión" href="/Inicio" onClick={(e) =>Acceso(e)} />
            </CardComponent>
        </div>
    </>
  )
}

export default Login