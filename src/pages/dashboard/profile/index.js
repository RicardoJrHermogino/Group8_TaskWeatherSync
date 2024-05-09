import { Container, Grid, Typography, CssBaseline, Paper, Button, Avatar } from "@mui/material";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Ricardo Jr. Hermogino",
    email: "ricardohermoginojr@gmail.com",
    industry: "Agriculture", 

  });
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
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
          <Grid item xs={12} align="center" mb={1}>
            <Paper
              sx={{
                position: 'relative', 
                borderRadius: 5,
                p: 4,
                textAlign: "center",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", 
                transition: "box-shadow 0.3s", 
                "&:hover": {
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", 
                  cursor: "pointer", 
                },
              }}
            >
              <Button 
                variant="contained" 
                onClick={handleLogout} 
                sx={{ 
                  borderRadius:'17px',
                  position: 'absolute',
                  bgcolor:'black',
                  top: 35, 
                  right: 30, 
                  zIndex: 1 
                }}
              >
                Log out
              </Button>
              <Avatar
                alt={profile.name}
                src="/avatar.jpg" 
                sx={{ width: 50, height: 50, marginBottom: 2, }}
              />
              <Image src="/image/profile_display.png" alt="sample" width={160} height={140} />
              <Typography variant="h6" gutterBottom><strong>{profile.name}</strong></Typography>
              <Typography variant="body2" gutterBottom>{profile.email}</Typography>
              <Typography variant="body2" gutterBottom>Industry: {profile.industry}</Typography> 
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
