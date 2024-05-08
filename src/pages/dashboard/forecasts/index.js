import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, CssBaseline, Paper } from '@mui/material';
import Navbar from "../../components/navbar";
import ProfileButton from "../../components/profile_button";
import Image from 'next/image'; // Import Image component

const API_KEY = '5726f728f2cd3a818fdd39c3348c4399';
const CITY = 'Sorsogon';

export default function Forecasts() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  const gradientStyle = {
    padding: "20px",
    borderRadius: "5px"
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Grid container mb={15} spacing={5} style={gradientStyle} textAlign={'center'}>
        <Grid item xs={6}>
          <Typography variant="h4"><strong> Forecasts</strong></Typography>
        </Grid>
        <ProfileButton />
        {weather && (
          <Grid item xs={12} textAlign={'center'}>
            <Paper
              sx={{
                borderRadius: 5,
                p: 2,
                textAlign: 'center',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h6">Current Weather in {CITY}</Typography>
              <Typography variant="body1">Temperature: {weather.main.temp}°C</Typography>
              <Typography variant="body1">Weather: {weather.weather[0].description}</Typography>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Paper
            sx={{
              borderRadius: 5,
              p: 2,
              textAlign: 'center',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'gray',
              minHeight: '200px',
            }}
          >
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Image src="/image/image.png" alt="sample" width={320} height={200} /> {/* Adjust the path to the image */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
