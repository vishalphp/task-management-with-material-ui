import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function Sidebar() {


  const BorderLinearProgress = styled(LinearProgress)(({ theme, filcolor, progresscolor }) => ({
    height: 10,
    width: '100%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: filcolor,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: progresscolor,
    },
  }));

  return (
    <>
    <Grid2 container xs={12} display={'flex'} flexDirection={'column'}  >
      
      <Grid2 xs={12} display={'flex'} flexDirection={'row'}  >
          <Typography variant="h6" gutterBottom fontWeight={'700'} >
                      Task Process
          </Typography>
      </Grid2> 
      <Grid2 xs={12} marginTop={'20px'} container display={'flex'} alignItems={'stretch'} flexDirection={'row'} >
        
        <Grid2 xs={6} textAlign={'left'} >
           <Typography variant="h6" gutterBottom fontWeight={'700'} fontSize={'16px'} >copywritting </Typography>
        </Grid2>
        <Grid2 xs={6} textAlign={'right'}>
           3/8
         </Grid2>

         <Grid2 xs={12} display={'flex'}>
         <BorderLinearProgress variant="determinate" value={50} filcolor="#ccc" progresscolor="#f4cce3" />
         </Grid2>

      </Grid2>

      <Grid2 xs={12} marginTop={'20px'} container display={'flex'} alignItems={'stretch'} flexDirection={'row'} >
        
        <Grid2 xs={6} textAlign={'left'} >
           <Typography variant="h6" gutterBottom fontWeight={'700'} fontSize={'16px'} >design </Typography>
        </Grid2>
        <Grid2 xs={6} textAlign={'right'}>
           2/8
         </Grid2>

         <Grid2 xs={12} display={'flex'}>
         <BorderLinearProgress variant="determinate" value={30} filcolor="#ccc" progresscolor="#d6eafc" />
         </Grid2>

      </Grid2>
      <Grid2 xs={12} marginTop={'20px'} container display={'flex'} alignItems={'stretch'} flexDirection={'row'} >
        
        <Grid2 xs={6} textAlign={'left'} >
           <Typography variant="h6" gutterBottom fontWeight={'700'} fontSize={'16px'} >development </Typography>
        </Grid2>
        <Grid2 xs={6} textAlign={'right'}>
           4/8
         </Grid2>

         <Grid2 xs={12} display={'flex'}>
         <BorderLinearProgress variant="determinate" value={70} filcolor="#ccc" progresscolor="#d2e4ca" />
         </Grid2>

      </Grid2>



    </Grid2>
    </>
  )
}
