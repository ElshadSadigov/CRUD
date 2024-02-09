import React, { useEffect, useState } from 'react';

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
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, addTask, updateTask, deleteTask } from '../slice/slice';

const Cards = ({ show }) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');
  const [productType, setProductType] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [note, setNote] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), product: product, productType: productType, unit: unit, quantity: quantity, note: note }));
    setProduct('');
    setProductType('');
    setUnit('');
    setQuantity('');
    setNote('');
  };

  useEffect(() => {
    if(show==false){
      setProduct('');
    setProductType('');
    setUnit('');
    setQuantity('');
    setNote('');
    }
  },[show]);


  const handleUpdateTask = (id, updatedTask) => {
    dispatch(updateTask({ id, updatedTask }));
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  return (
    <TableContainer>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell sx={{ border: 1 }}>Məhsul</TableCell>
            <TableCell sx={{ border: 1 }}>Məhsul Növü</TableCell>
            <TableCell sx={{ border: 1 }}>Vahid</TableCell>
            <TableCell sx={{ border: 1 }}>Miqdar</TableCell>
            <TableCell sx={{ border: 1 }}>Qeyd</TableCell>
            <TableCell sx={{ border: 1 }}>Əlavə et</TableCell>
            <TableCell sx={{ border: 1 }}>Dəyiş</TableCell>
            <TableCell sx={{ border: 1 }}>Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell sx={{ border: 1 }}>
              <Select name='product' id='product' value={product} onChange={(e) => setProduct(e.target.value)}>
                <MenuItem value='Çay dəsti'>Çay dəsti</MenuItem>
                <MenuItem value='Stəkan dəsti'>Stəkan dəsti</MenuItem>
                <MenuItem value='Stəkan altlıq'>Stəkan altlıq</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Select name='productType' id='productType' value={productType} onChange={(e) => setProductType(e.target.value)}>
                <MenuItem value='Hazır məhsul'>Hazır məhsul</MenuItem>
                <MenuItem value='Xammal'>Xammal</MenuItem>
                <MenuItem value='Mal'>Mal</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Select name='unit' id='unit' value={unit} onChange={(e) => setUnit(e.target.value)}>
                <MenuItem value='kq'>kq</MenuItem>
                <MenuItem value='qram'>qram</MenuItem>
                <MenuItem value='litr'>litr</MenuItem>
                <MenuItem value='sm'>sm</MenuItem>
                <MenuItem value='km'>km</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <TextField type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <TextField type='text' value={note} onChange={(e) => setNote(e.target.value)} />
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Button onClick={handleAddTask} variant='contained' color='primary' size='small'>
                Əlavə et
              </Button>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Button variant='contained' color='primary' size='small' >
                Dəyiş
              </Button>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Button variant='contained' color='primary' size='small' >
                Sil
              </Button>
            </TableCell>
          </TableRow>
          {
            tasks.map(task => (
              <TableRow >
                <TableCell sx={{ border: 1 }}>{task.product}</TableCell>
                <TableCell sx={{ border: 1 }}>{task.productType}</TableCell>
                <TableCell sx={{ border: 1 }}>{task.unit}</TableCell>
                <TableCell sx={{ border: 1 }}>{task.quantity}</TableCell>
                <TableCell sx={{ border: 1 }}>{task.note}</TableCell>
                <TableCell sx={{ border: 1 }}>{null}</TableCell>
                <TableCell sx={{ border: 1 }}>
                  <Button variant='contained' color='primary' size='small' >
                    Dəyiş
                  </Button></TableCell>
                <TableCell sx={{ border: 1 }}>
                  <Button variant='contained' color='primary' size='small' onClick={() => handleDeleteTask(task.id)}>
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cards;
