import React from 'react'
import { useSelector } from 'react-redux';
import { Button,Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { selectAllTasks } from '../slice/slice';

const Remove = () => {
  const allTasks = useSelector(selectAllTasks);
  console.log(allTasks)
  return (
    <div>
      <button>Əlavə et</button>
      <div>
        <span>Siyahı</span>
        <Table >
        <TableHead >
          <TableRow >
            <TableCell sx={{border: 1 }}>Məzmun</TableCell>
            <TableCell sx={{border: 1 }}>Əməliyyat tarixi</TableCell>
            <TableCell sx={{border: 1 }}>Şirkət</TableCell>
            <TableCell sx={{border: 1 }}>Filial</TableCell>
            <TableCell sx={{border: 1 }}>Dəyiş</TableCell>
            <TableCell sx={{border: 1 }}>Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            allTasks.map((item)=>(
              
          <TableRow >
            <TableCell sx={{border: 1 }}>{item.content}</TableCell>
            <TableCell sx={{border: 1 }}>{item.date}</TableCell>
            <TableCell sx={{border: 1 }}>{item.company}</TableCell>
            <TableCell sx={{border: 1 }}>{item.branch}</TableCell>
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
