import React, { useState } from 'react';
import Cards from '../components/addCard';
import {
  Card,
  CardContent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import {  useDispatch } from 'react-redux';
import { addAllTask} from '../slice/slice';


const AddOrChange = () => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(true)
  const [content, setContent] = useState('')
  const [company, setCompany] = useState('')
  const [branch, setBranch] = useState('')
  const [date, setDate] = useState('')
  const handleAddAllTask = () =>{
    dispatch(addAllTask({ id: Date.now(), content: content, company: company, branch: branch, date: date}))
    setContent('')
    setCompany('')
    setBranch('')
    setDate('')
    setShow(false)
  }
  

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant='h5'>Məhsul Silinmə (Əlavə et/ Dəyiş)</Typography>
      <div style={{ marginTop: '20px' }}>
        <div>
          <Typography variant='h6'>Məzmun Məlumatları</Typography>
          <Card sx={{ backgroundColor: '#dddddd', padding: '10px' }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputLabel htmlFor='Məzmun'>Məzmun</InputLabel>
                  <TextField type='text' id='Məzmun' fullWidth sx={{backgroundColor: '#fff'}} value={content} onChange={(e) => setContent(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Şirkət' >Şirkət</InputLabel>
                  <Select name='Şirkət' id='Şirkət' fullWidth sx={{backgroundColor: '#fff'}} value={company} onChange={(e) => setCompany(e.target.value)}>
                    <MenuItem value='Taç MMc'>Tac MMC</MenuItem>
                    <MenuItem value='muğam MMC'>Mugam MMC</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Filial'>Filial</InputLabel>
                  <Select name='' id='Filial' fullWidth sx={{backgroundColor: '#fff'}} value={branch} onChange={(e) => setBranch(e.target.value)}>
                    <MenuItem value='Binəqədi Filial'>Binəqədi Filial</MenuItem>
                    <MenuItem value='Baş ofis'>Baş ofis</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Əməliyyat Tarixi'>Əməliyyat Tarixi</InputLabel>
                  <TextField type='date' id='Əməliyyat Tarixi' fullWidth sx={{backgroundColor: '#fff'}} value={date} onChange={(e) => setDate(e.target.value)}/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Typography variant='h6'>Məhsul Siyahısı</Typography>
          <div style={{ width: '100%' }}>
            <Cards show={show} setShow={setShow}/>
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Typography variant='h6'>Əməliyyat</Typography>
          <div style={{ backgroundColor: '#bdbdbd', padding: '10px', display: 'flex', gap: '10px' }}>
            <Button variant='contained' color='primary' onClick={handleAddAllTask}>
              Yadda saxla
            </Button>
            <Button variant='contained' color='primary'>
              Ləğv et
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrChange;
