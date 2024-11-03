import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabla = (props) => {

  const { dataTable } = props;

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {props.rowHeader.map((header) => (
                <TableCell>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((data, index) =>(
              <TableRow key={index}>
              {Object.entries(data).map(([key,value]) =>(
                  <TableCell key={key}>
                    {typeof value === 'object'
                    ? JSON.stringify(value) // Convierte objetos o arreglos en string
                    : value.toString()}
                  </TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Tabla