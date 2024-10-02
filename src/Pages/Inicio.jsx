import React from "react";
import Header from "../Componentes/Header";
import Navbar from "../Componentes/Navbar";
import CardComponent from "../Componentes/Card";
import { Typography } from "@mui/material";
import { Tabla } from "../Componentes/Tabla";

const Inicio = () => {
  return (
    <>
      <div className="flex flex-col items-center  gap-4 grow self-center">
        <CardComponent>
          <Typography component="h1" variant="h5" color="primary" gutterBottom>
            Empeños Activos
          </Typography>
          <Typography component="h1" variant="h4" gutterBottom>
            150
          </Typography>
          <Typography component="p" variant="subtitle1" gutterBottom>
            Valor Total:
          </Typography>
          <Typography component="p" variant="subtitle1" gutterBottom>
            $7,500,000 MXN
          </Typography>
        </CardComponent>

        <div className="flex gap-8">
          <CardComponent>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Empeños Recientes
            </Typography>
            <Tabla />
          </CardComponent>

          <CardComponent>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Próximos Vencimientos
            </Typography>
            <Typography component="h1" variant="h6" gutterBottom>
              Ana Martínez
            </Typography>
            <Typography component="p" variant="subtitle1" gutterBottom>
              Volkswagen Jetta 2016 - Vence: 2023-07-15
            </Typography>
            <Typography component="h1" variant="h6" gutterBottom>
              Pedro Sánchez
            </Typography>
            <Typography component="p" variant="subtitle1" gutterBottom>
              Ford Focus 2018 - Vence: 2023-07-18
            </Typography>
            <Typography component="h1" variant="h6" gutterBottom>
              Laura Rodríguez
            </Typography>
            <Typography component="p" variant="subtitle1" gutterBottom>
              Chevrolet Cruze 2017 - Vence: 2023-07-20
            </Typography>
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default Inicio;
