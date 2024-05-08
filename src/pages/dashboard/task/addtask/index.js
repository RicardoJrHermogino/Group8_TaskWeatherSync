import React, { useState } from 'react';
import { Container, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, IconButton, Grid } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Navbar from '../../../components/navbar';


const style = {
  width: '85%',
  maxWidth: 400,
  borderRadius: 6,
  padding: '24px',
  backgroundColor: '#fff',
  margin: 'auto',
  marginTop: '40px',
  boxShadow: 'none', // Remove the shadow effect
};

export default function AddTask() {
  const [taskName, setTaskName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [date, setDate] = useState('');
  const [restrictedWeather, setRestrictedWeather] = useState('');
  const [environment, setEnvironment] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // Redirect to another page after submission
    router.push('/dashboard/task/all_scheduled');
  };

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <>
    <Navbar/>
    <Container maxWidth="sm">
      <Grid container mb={10}>
      <Box sx={style}>
        <IconButton onClick={handleGoBack} sx={{ position: 'absolute', top: 15, left: 20 }}>
          <ArrowBack />
        </IconButton>
          <Typography mb={3} variant="h5"><strong>Add New Task</strong></Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <TextField
            label="Street Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            InputLabelProps={{ shrink: true }} 
            sx={{ marginTop: '16px' }}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="restricted-weather">Restricted Weather</InputLabel>
            <Select
              labelId="restricted-weather"
              id="weather-select"
              value={restrictedWeather}
              onChange={(e) => setRestrictedWeather(e.target.value)}
              label="Restricted Weather"
            >
              <MenuItem value="rainy">Rainy</MenuItem>
              <MenuItem value="sunny">Sunny</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="environment">Environment</InputLabel>
            <Select
              labelId="environment"
              id="environment-select"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
              label="Environment"
            >
              <MenuItem value="sea">Sea</MenuItem>
              <MenuItem value="mountain">Mountain</MenuItem>
              <MenuItem value="openField">Open Field</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop:"17px",
              width: '100%',
              height: '40px',
              borderRadius: '28px',
              bgcolor: 'black'
            }}
          >
            Add
          </Button>
        </form>
      </Box>
      </Grid>
    </Container>
    </>
  );
}
