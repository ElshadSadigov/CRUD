import React from 'react';
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

const AddOrChange = () => {
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
                  <TextField type='text' id='Məzmun' fullWidth sx={{backgroundColor: '#fff'}}/>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Şirkət' >Şirkət</InputLabel>
                  <Select name='' id='Şirkət' fullWidth sx={{backgroundColor: '#fff'}}>
                    <MenuItem value='tac'>Tac MMC</MenuItem>
                    <MenuItem value='mugam'>Mugam MMC</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Filial'>Filial</InputLabel>
                  <Select name='' id='Filial' fullWidth sx={{backgroundColor: '#fff'}}>
                    <MenuItem value='binəqədi'>Binəqədi Filial</MenuItem>
                    <MenuItem value='bash'>Bash ofis</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor='Əməliyyat Tarixi'>Əməliyyat Tarixi</InputLabel>
                  <TextField type='date' id='Əməliyyat Tarixi' fullWidth sx={{backgroundColor: '#fff'}}/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Typography variant='h6'>Məhsul Siyahısı</Typography>
          <div style={{ width: '100%' }}>
            <Cards />
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Typography variant='h6'>Əməliyyat</Typography>
          <div style={{ backgroundColor: '#bdbdbd', padding: '10px', display: 'flex', gap: '10px' }}>
            <Button variant='contained' color='primary'>
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
