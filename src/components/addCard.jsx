import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const Cards = () => {
  return (
    <TableContainer>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell sx={{border: 1 }}>Məhsul</TableCell>
            <TableCell sx={{border: 1 }}>Məhsul Növü</TableCell>
            <TableCell sx={{border: 1 }}>Vahid</TableCell>
            <TableCell sx={{border: 1 }}>Miqdar</TableCell>
            <TableCell sx={{border: 1 }}>Qeyd</TableCell>
            <TableCell sx={{border: 1 }}>Əlavə et</TableCell>
            <TableCell sx={{border: 1 }}>Dəyiş</TableCell>
            <TableCell sx={{border: 1 }}>Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell sx={{border: 1 }}>
              <Select name='' id=''>
                <MenuItem value='Çay dəsti'>Çay dəsti</MenuItem>
                <MenuItem value='Stəkan dəsti'>Stəkan dəsti</MenuItem>
                <MenuItem value='Stəkan altlıq'>Stəkan altlıq</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <Select name='' id='' >
                <MenuItem value='Hazır məhsul'>Hazır məhsul</MenuItem>
                <MenuItem value='Xammal'>Xammal</MenuItem>
                <MenuItem value='Mal'>Mal</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <Select name='' id='' >
                <MenuItem value='kq'>kq</MenuItem>
                <MenuItem value='qram'>qram</MenuItem>
                <MenuItem value='litr'>litr</MenuItem>
                <MenuItem value='sm'>sm</MenuItem>
                <MenuItem value='km'>km</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <TextField type='number'  />
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <TextField type='text' />
            </TableCell>
            <TableCell sx={{border: 1 }}>
              <Button variant='contained' color='primary' size='small'>
                Əlavə et
              </Button>
            </TableCell>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cards;
