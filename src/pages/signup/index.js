import { useState } from 'react';
import { Container, Grid, Typography, Link, TextField, Button, CssBaseline, MenuItem, Select, FormControl, FormHelperText, InputLabel, Alert } from "@mui/material";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function SignUp() {
  
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workType, setWorkType] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !workType || !email ) {
      setError('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    
  
    // dini mangyayari na If intiro na validations sa input napass, proceed with signup logic

    // Additional signup logic...
    // dini ang logic san pag sign-up, for example, sending data to backend or JSON server
    router.push('/signup/verification');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const initialWorkTypes = ['Agriculture Industry', 'Fishing Industry', 'Construction Industry', 'Energy Industry', 'Shipping and Maritime Industry', 'Tourism Industry'];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="large" mb={10}>
      <Typography variant="h4" align="center" style={{ marginTop: '40px' }}>TaskWeatherSync</Typography>
        <Grid container spacing={2} mt={15} mb={20}>
          <Grid container spacing={2} justifyContent="center" alignItems="center" item xs={12} md={6}  >
            <Grid item md={7} xs={10}>
              <Typography variant="h4" align="center" >Register</Typography>
              <Typography variant="body2" align="center">
                Already have an account? <Link href="/login">Login here.</Link>
              </Typography>
            </Grid>
            <Grid item md={7} xs={10}>
              {error && <Alert severity="error" fullWidth>{error}</Alert>}
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={7} xs={10}>
              <FormControl fullWidth required sx={{ minWidth: 120 }}>
                <InputLabel id="work-type-label">Industry Sector</InputLabel>
                <Select
                  labelId="work-type-label"
                  id="work-type-select"
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  label="Industry Sector"
                  
                >
                  {initialWorkTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>

                <FormHelperText>Choose your industry sector</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={7} xs={10}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                error={!!error}
              />
            </Grid>
            
            <Grid item md={7} xs={10}>
              <Button 
                variant="contained" 
                fullWidth 
                onClick={handleSignUp} 
                sx={{
                  height: "55px",
                  borderRadius: "12px",
                  bgcolor: "black",
                  color: "white", // Text color
                }}
              > 
                Sign Up
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" item xs={6} sx={{ display: { xs: 'none', sm: 'Grid' } }}>
            <Image src="/3d-weather-icons/SVGgraphics/welcomedesign.svg" alt="sample" width={1200} height={500} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
