import React from 'react'
import { Button,Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Remove = () => {
  const data = [1, 2, 3]
  return (
    <div>
      <button>Əlavə et</button>
      <div>
        <span>Siyahı</span>
        <Table >
        <TableHead >
          <TableRow >
            <TableCell sx={{border: 1 }}>Məzmun</TableCell>
            <TableCell sx={{border: 1 }}>	Əməliyyat tarixi</TableCell>
            <TableCell sx={{border: 1 }}>Şirkət</TableCell>
            <TableCell sx={{border: 1 }}>Filial</TableCell>
            <TableCell sx={{border: 1 }}>Dəyiş</TableCell>
            <TableCell sx={{border: 1 }}>Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item)=>(
              
          <TableRow >
            <TableCell sx={{border: 1 }}>2334 N-li alış sənədi</TableCell>
            <TableCell sx={{border: 1 }}>02.02.2024</TableCell>
            <TableCell sx={{border: 1 }}>Tac MMC</TableCell>
            <TableCell sx={{border: 1 }}></TableCell>
            <TableCell sx={{border: 1 }}>
              <Button variant='contained' color='primary' size='small'>
                Dəyiş
              </Button>
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <Button variant='contained' color='primary' size='small'>
                Sil
              </Button>
            </TableCell>
          </TableRow>
          
          ))
        }
        </TableBody>
      </Table>
      </div>
    </div>
  )
}

export default Remove
