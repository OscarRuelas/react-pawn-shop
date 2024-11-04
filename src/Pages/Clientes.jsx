import React from 'react'
import CardComponent from '../Componentes/Card'
import { Box, Button } from '@mui/material'
import BottonForm from '../Componentes/BottonForm'
import Tabla from '../Componentes/Tabla'
import { Link } from 'react-router-dom'


const Clientes = () => {
  const rowHeader = [
    "ID",
    "NOMBRE",
    "APELLIDO",
    "DIRECCION",
    "TELEFONO",
    "CORREO",
    "TIPO IDENTIFICACION",
    "NUMERO IDENTIFICACION",
    "ESTATUS"
  ];

  const dataTable = [
    {id:1,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:2,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:3,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:4,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:5,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:6,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:7,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:8,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:9,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:10,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:11,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
    {id:12,nombre:"Oscar",apellido:"Osorio",dieccion:"Rio Presidio #81228",telefono:"655223545",correo:"oscarosorio@gmail.com",tipoId:"INE",numid:121546,estatus:"A"},
  ]

  return (
    <>
      <Box className='flex flex-col items-center  gap-4 grow self-center mt-20 '>
        <CardComponent>
          <Link to={"/AgregarClientes"}>
            <BottonForm descripcion="Agregar Clientes" href="/ClientesAgregar" fullsize={false} />
          </Link>
          <Tabla rowHeader = {rowHeader} dataTable= {dataTable} />
        </CardComponent>
      </Box>
    </>
  )
}

export default Clientes