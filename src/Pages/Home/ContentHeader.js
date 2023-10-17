import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import LoupeSharpIcon from '@mui/icons-material/LoupeSharp';

export default function ContentHeader() {
  return (
      <>
        <Grid2 xs={12} textAlign={'left'} margin={'auto'} padding={'0px'}>
             <Typography variant="h4" gutterBottom sx={{fontSize: {xs:'20px', sm: '32px'}}} fontWeight={'700'} >
                    Task Management
                </Typography>
             </Grid2>
             
        <Grid2 xs={12} textAlign={'right'} sx={{fontSize: {xs:'20px', sm: '36px'}}} margin={'auto'} columns={3} > 
               <LoupeSharpIcon fontSize={'36px'} style={{cursor:'pointer'}}/>
               <NoteAddSharpIcon fontSize={'36px'} style={{cursor:'pointer'}} />
               <AddRoundedIcon fontSize={'36px'} fontWeight={'400'} style={{ cursor:'pointer', border: '2px dotted #ccc', borderRadius: '40px'}} />    
        </Grid2> 
      </>
    )
}
