import { Container, Grid, Typography, CssBaseline, Paper, Button } from "@mui/material";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    
  };


  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container mt={10} spacing={3} justifyContent="center">
          <Grid item xs={12} mt={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Profile
            </Typography>
          </Grid>
        
          <Grid item xs={10} align="center" mb={1}>
            <Paper
              sx={{
                borderRadius: 5,
                p: 2,
                textAlign: "center",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Increase box shadow
                transition: "box-shadow 0.3s", // Add transition effect
                "&:hover": {
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", // Box shadow on hover
                  cursor: "pointer", // Change cursor on hover
                },
              }}
            >
              <Typography variant="h6"> {profile.name}</Typography>
              <Typography variant="body1"> {profile.email}</Typography>

              <Button variant="contained" color="primary" onClick={handleLogout} sx={{ marginTop: '16px' }}>
                Logout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
