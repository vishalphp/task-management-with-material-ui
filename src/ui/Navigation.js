import React from 'react'
import { List, ListItem, IconButton, Box   } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link as DomLink } from 'react-router-dom';


export default function Navigation(props) {

  const [state, setState] = React.useState({ 
    top: false, 
    left: false, 
    bottom: false, 
    right: false, 
}); 
const toggleDrawer = (anchor, open) => (event) => { 
  if ( 
      event && 
      event.type === "keydown" && 
      (event.key === "Tab" || event.key === "Shift") 
  ) { 
      return; 
  } 

  setState({ ...state, [anchor]: open }); 
}; 

  return (
    <>
    <Grid container columns={12} justifyContent="space-between" alignItems={'center'} flexDirection={'row-reverse'} > 
    <IconButton variant="contained" color="#fff" aria-label="open menu" onClick={toggleDrawer('top', true)} sx={{ display: { xs: 'flex', sm: 'none' }}} >
       <MenuRoundedIcon sx={{ color: '#fff' }}  />
    </IconButton>
    <SwipeableDrawer
          anchor={'top'} 
          open={state['top']} 
          onClose={toggleDrawer('top', false)} 
          onOpen={toggleDrawer('top', true)} 
          sx={{ display: { xs: 'flex', sm: 'none' }}}
          ModalProps={{
            BackdropProps:{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }
          }}
          
          >
            <Box alignItems={'center'} justifyContent={'center'} style={{color: `${props.theme.palette.primary.topmenuText}`, backgroundColor: `${props.theme.palette.primary.main}`}} padding={'20px'} fontSize={'24px'} fontWeight={'700'}>
            <Link href="#" color="inherit" rel="noopener" underline="hover">  <div className='logo' style={{color: `${props.theme.palette.primary.topmenuText}`, textAlign: 'center'}} >MatLearnTut</div> </Link>
            </Box>
            <List component={Stack} direction="column" fontWeight={700} style={{color: `${props.theme.palette.primary.topmenuText}`, backgroundColor: `${props.theme.palette.primary.main}`}} >
               
                <ListItem style={{borderBottom: '1px solid #ccc'}}>
                <DomLink to="/tasks" color="#fff" rel="noopener" underline="hover">  Tasks</DomLink>
                </ListItem>
                <ListItem style={{borderBottom: '1px solid #ccc'}}>
                <Link href="#" color="inherit" rel="noopener" underline="hover">Documents</Link>
                </ListItem>
            </List>
    </SwipeableDrawer>

    <List component={Stack} direction="row" fontWeight={700} style={{color: `${props.theme.palette.primary.topmenuText}`}} sx={{ display: { xs: 'none', sm: 'flex' }}}>
        <ListItem>
        <DomLink to="/tasks" color="#fff" rel="noopener" underline="hover">  Tasks</DomLink>
        </ListItem>
        <ListItem>
        <Link href="#" color="inherit" rel="noopener" underline="hover">Documents</Link>
        </ListItem>
    </List>
    </Grid>
    </>
  )
}
