import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {

    const navegacion  = useNavigate();


    const IniciarSesion = (url,credenciales) => {
        try{
            // const response = axios.get({
            //     'url': url,
            //     'headers':{
            //         'Content-Type' : 'application/json'
            //     }
            // });
            const response  = axios.post(url, credenciales, {
                'headers':{
                    // 'X-Powered-By' : 'Express',
                    'Content-Type' : 'application/json'
                    // 'Content-Length' : '205',
                    // 'ETag' : 'W/"cd-377ZLi5q1VxkZ8GdYaRtg/1Cg5o"',
                    // 'Connection' : 'keep-alive'
                }
                });

                navegacion("/Inicio");
                login();
                console.log(response)
        }catch(err){
            alert("Error al iniciar sesion: ", err)
        }
    }

  return {
    IniciarSesion
  }
}