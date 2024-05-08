import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Image from "next/image";
import { useRouter } from 'next/router';

const WelcomeDashboard = () => {
  const router = useRouter();
  
  const gradientStyle = {
    padding: "20px",
    borderRadius: "5px"
  };

  const handleGetStartedClick = () => {
    router.push('/login'); // Change '/login' to your actual login page route
  };

  return (
    <Container>
      <Grid container justifyContent="center" spacing={3} style={gradientStyle}>
        <Grid item xs={12} md={12} mt={4} mb={3}>
          <Typography variant="h5" align="center" gutterBottom>
             <strong> Discover TaskWeatherSync Smart Scheduler</strong> 
          </Typography>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" item xs={6}>
          <Image src="/3d-weather-icons/sun/16.png" alt="sample" width={350} height={350} />
        </Grid>

        <Grid item xs={12} sm={6} md={12} mt={3}>
          <Typography variant="body2" align="center" mb={3} gutterBottom sx={{color: 'gray'}}>
            TaskWeatherSync: Start Your Weather-Informed Task Management Journey Now
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ 
              borderRadius: '20px', 
              backgroundColor: 'black', 
              color: 'white', 
              minWidth: '', 
              fontWeight: 'bold', 
              height: '53px' 
            }}
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomeDashboard;
