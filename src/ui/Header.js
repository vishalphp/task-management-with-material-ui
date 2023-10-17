import React from 'react'
import { useTheme } from '@mui/material/styles'
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Container from '@mui/material/Container';

export default function Header() {
    const theme = useTheme(); 

  return (
    <>
    <div className="headerwrapper" style={{background: `${theme.palette.primary.main}`}}>
    <Container >
    <Grid container alignItems="center" flexDirection={'row'} justifyContent="center"  >
    <Grid xs={5} sm={3} md={2} spacing={2} fontWeight={700} fontSize={'24px'} alignItems="left" display="flex" flexDirection={'row'} justifyContent="left"  > 
         <Logo theme={theme} alignItems={'left'}/>
    </Grid>
    <Grid xs={5} sm={5} md={7} spacing={2}>
         <Navigation theme={theme} position={'fixed'} />
      </Grid>
      <Grid xs={2} sm={4} md={3} spacing={0} >
         <ProfileMenu theme={theme} alignItems={'center'}/>
         </Grid>
    </Grid>
    </Container>
        
    </div>
    </>
  )
}
