import { Button, Container, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { Fragment } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useOutletContext } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

export default function Index() {
  const taskCard = useOutletContext();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


 
  return (
    <>
    
    <Container>
    <Grid2 container display={'flex'} flexDirection={'row'} paddingTop={'30px'}>
        <Grid2 xs={12} sm={12} display={'flex'} marginBottom={'20px'}>
         <Typography variant='h4' margin={'auto'} sx={{fontSize:{xs:'24px', sm: '48px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>Add Tasks</Typography>
        </Grid2>
     <Grid2 xs={8} margin={'auto'} marginBottom={'40px'}  sx={{ padding:{xs:'20px 15px', sm:'40px 30px'}, background: '#fff', boxShadow: '1px 5px 7px #aaaaaa', borderRadius: '5px',  }}  container display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
     
        <Grid2 xs={12} sm={8} display={'flex'} marginBottom={'15px'}>
           <TextField id="standard-basic" label="Task Name" variant="standard" fullWidth={true} />
        </Grid2>
        <Grid2 xs={4} sm={1} display={'flex'} >
           <CalendarMonthIcon variant={'contained'} style={{ color: 'rgb(121, 128, 255)' }}  />
        </Grid2>
        <Grid2 xs={8} sm={3} display={'flex'}>
        <Button variant="contained" sx={{fontSize:{xs:'15px', sm: '16px'}}} style={{color: '#fff', width:'100%'}} >Add New</Button>
        </Grid2>
     </Grid2>

     <Grid2 xs={10} margin={'auto'} marginBottom={'40px'} sx={{ borderTop: '1px solid #ccc', padding:'30px 0'  }}  container display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
     

     {
     taskCard.map((tasks, index)=> <Grid2 key={index} container xs={12} marginBottom={'20px'}>
      <Grid2 xs={12} sm={10} display={'flex'} sx={{xs:{fontSize:'14px'}, sm:{fontSize:'16px'}}}> <Typography variant="h6" component="h2" display={'flex'}  style={{textAlign: 'left'}}>
      <MultipleStopIcon style={{ color: 'rgb(121, 128, 255)', marginRight: '10px' }}/>  {tasks.title} </Typography>
      </Grid2>
      <Grid2 xs={12} sm={2} display={'flex'} flexDirection={'column'}  sx={{ xs:{alignItems: 'flex-start' }, sm:{alignItems: 'flex-end'}}}  >
          <Grid2 xs={12} sm={12} display={'flex'} sx={{xs:{alignItems: 'flex-start'}, sm:{alignItems: 'flex-end'}}} marginBottom={'10px'}>
            <BorderColorIcon display={'flex'} style={{cursor: 'pointer', color:'rgb(121, 128, 255)', textAlign:'right', marginRight: '10px'}} />
             <DeleteForeverIcon display={'flex'} style={{cursor: 'pointer', color:'red', textAlign:'left', marginRight: '10px'}} />
          </Grid2>
          <Grid2 xs={12} sm={12} display={'flex'}>
           <InfoIcon style={{cursor: 'pointer', textAlign:'left', color: '#ccc', marginRight: '10px'}} /> { (new Date(tasks.date)).getDate()+' '+monthNames[(new Date(tasks.date)).getMonth()]+' '+(new Date(tasks.date)).getFullYear() }
            </Grid2>
      
      </Grid2></Grid2>
    
       )}


     </Grid2>


    </Grid2>
     
    </Container>
    </>
  )
}
