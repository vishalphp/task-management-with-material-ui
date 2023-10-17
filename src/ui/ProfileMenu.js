import React from 'react'
import { List, ListItem   } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import proImage from '../assets/146031.png';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

export default function ProfileMenu(props) {
  return (
     <>
      <Grid container display={'flex'} justifyContent="space-between" alignItems={'center'}  >
      <List component={Stack} display={'flex'} sx={{ flexDirection: {xs: 'row-reverse', sm: 'row'}, width: '100%' }}  alignItems={'center'} style={{color: `${props.theme.palette.primary.topmenuText}`}} >
         <ListItem sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: { xs: 'center', sm: 'right' } }}>
             <Link href="#" color="inherit" rel="noopener" underline='none'> <NotificationsActiveRoundedIcon /> </Link>
          </ListItem>
          <ListItem sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: { xs: 'center', sm: 'right' } }}>
             <Link href="#" color="inherit" rel="noopener" underline='none'> <SettingsSuggestOutlinedIcon /> </Link>
          </ListItem>
          <ListItem sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: { xs: 'center', sm: 'right' } }}>
             <Link href="#" color="inherit" rel="noopener" underline='none'>  Victor </Link>
          </ListItem>
          <ListItem sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
             <Link href="#" color="inherit" rel="noopener" underline='none'> <Avatar alt="profile image" src={proImage} /> </Link>
          </ListItem>
      </List>
      </Grid>
     </>
  )
}
