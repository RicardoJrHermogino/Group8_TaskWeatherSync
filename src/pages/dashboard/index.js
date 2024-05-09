import { useState } from 'react';
import { Card, CardContent, Typography, Grid, CssBaseline, Button, Dialog, DialogTitle, DialogContent, DialogActions,TableContainer,Table,TableHead,TableRow,TableBody,TableCell } from "@mui/material";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Navbar from "../components/navbar";
import ProfileButton from "../components/profile_button";
import RestrictedTasksPage from './task/restricted_task'; // Import the new component
import Image from "next/image";
import { useRouter } from 'next/router';

const Dashboard = () => {
  const currentDate = dayjs().format("MMMM DD, YYYY");
  const currentDay = dayjs().format("dddd");
  const [open, setOpen] = useState(true); // State for controlling the dialog
  const [allowWeather, setAllowWeather] = useState(false); // State to track whether weather access is allowed
  const [displayAllowButton, setDisplayAllowButton] = useState(true); // State to track whether to display the "Allow Location" button

  const gradientStyle = {
    padding: "20px",
    borderRadius: "5px"
  };

  const handleClose = (allow) => {
    setOpen(false); 
    setAllowWeather(allow); 
    if (!allow) {
      setDisplayAllowButton(true); 
    } else {
      setDisplayAllowButton(false); 
    }
  };

  const router = useRouter();
  const TaskButon = () => {
      router.push('/dashboard/task'); 
  };


  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Grid container mb={15} spacing={6} style={gradientStyle}>

        <Dialog open={open} onClose={() => handleClose(false)}>
          <DialogTitle >Allow Location Access</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              To provide you with accurate weather information in your location, please allow access to your location.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose(false)} color="primary">
              Deny
            </Button>
            <Button onClick={() => handleClose(true)} color="primary">
              Allow
            </Button>
          </DialogActions>
        </Dialog>



        <Grid item xs={6}>
          <Typography variant="h4"><strong>Home</strong></Typography>
        </Grid>
        <ProfileButton/>
        <Grid item xs={10}>
          <Typography variant="body2" color="#757575" >
            Good Morning,
          </Typography>
          <Typography variant="h5">Ricardo Jr. Hermogino</Typography>
        </Grid>



        {displayAllowButton && (
          <Grid item xs={12} textAlign={'center'}>
            <Button  variant="contained" sx={{bgcolor:'black',minWidth: "90%", borderRadius: "20px"}} onClick={() => handleClose(true)}>
              Allow Location
            </Button>
          </Grid>
        )}
        {/* Display weather-related content only if weather access is allowed */}
        {allowWeather && (
          <>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Image src="/3d-weather-icons/moon/1.png" alt="sample" width={160} height={140} />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Typography sx={{ letterSpacing: 8 }}>Rainy Night</Typography>
              <Typography variant="h2">22&deg;C</Typography>
              <Typography>
                <strong>{currentDay}</strong>{" "}
                <span style={{ color: "#757575" }}>{currentDate}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography sx={{ mb: 1 }}><strong>Consider bringing an umbrella with you.</strong></Typography>
            </Grid>
          </>
        )}
        
        {/* Display non-weather related content */}
        <Grid item xs={12} >
          <Button onClick={TaskButon}>
          <Card sx={{ borderRadius: 5, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', minHeight:'100%' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={12} textAlign={'center'}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Task Summary</Typography>
                </Grid>
                <Grid item xs={12}  >
                  <TableContainer>
                    <Table>
                      <TableHead >
                        <TableRow >
                          <TableCell>Task</TableCell>
                          <TableCell>Number</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableRow>
                          <TableCell>Scheduled Tasks Favorable to Weather</TableCell>
                          <TableCell><Typography sx={{color:'green'}}>10</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell> Scheduled Tasks affected by weather</TableCell>
                          <TableCell><Typography sx={{color:'red'}}>3</Typography></TableCell>
                        </TableRow>
                       
                        <TableRow>
                          <TableCell>Restricted Tasks Today</TableCell>
                          <TableCell>16</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          </Button>
        </Grid>

        {allowWeather && (
          <>
        <Grid item xs={12}>
          <Typography color="#757575" sx={{fontSize: '0.8rem'}} textAlign={'center'}>
            The average temperature for the next 5 days will be 21 degrees, it will rain for 7 days
          </Typography>
        </Grid>
        </>
        )}

        {/* Display weather details */}
        {allowWeather && (
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#292929", borderRadius: 5 }}>
              <CardContent>
                <Grid container spacing={6} sx={{ textAlign: "center" }}>
                  <Grid item xs={4}>
                    <Icon icon="uil:cloud-wind" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      136
                    </Typography>
                    <Typography color="#b3b3b3">Air Quality</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Icon icon="lets-icons:pressure" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      846hpa
                    </Typography>
                    <Typography color="#b3b3b3">Pressure</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Icon icon="mdi:uv-ray-outline" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      2
                    </Typography>
                    <Typography color="#b3b3b3">UV</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Icon icon="mingcute:rain-line" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      4mm
                    </Typography>
                    <Typography color="#b3b3b3">Precipitation</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Icon icon="bx:wind" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      11km/h
                    </Typography>
                    <Typography color="#b3b3b3">Wind</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Icon icon="ph:eye-bold" color="#fff" fontSize={45} />
                    <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                      6.4 km
                    </Typography>
                    <Typography color="#b3b3b3">Visibility</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}

        

      </Grid>
    </>
  );
};

export default Dashboard;
