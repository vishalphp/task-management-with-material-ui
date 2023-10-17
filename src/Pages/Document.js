import { Container, List, ListItem, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export default function Document() {
  return (
<Container> 
<Grid2 container xs={12} display={'flex'} marginTop={'40px'} marginBottom={'40px'} flexDirection={'row'} alignItems={'flex-start'} textAlign={'left'}>

<Grid2 xs={12}  marginTop={'10px'} marginBottom={'10px'} display={'flex'} flexDirection={'row'} alignItems={'flex-start'} textAlign={'left'}>

<Typography variant='h4' sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'} textAlign={'left'}>Title:</Typography>
       
</Grid2>

<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'} display={'flex'} flexDirection={'row'} alignItems={'flex-start'} textAlign={'left'}>
Task Management Pages With Material UI
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
<Typography variant='h4' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>Project Goals and Objectives:</Typography>
</Grid2>

<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
The project is designed using material-ui design library and optimized with webpack 5. The project has two pages, one home, and a second task. 
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
The project's main goal is to learn new things that may not be covered while working in a product-based company. The project will enhance the knowledge in react.
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
<Typography variant='h4' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>Project Scope:</Typography>
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
The common section covers the navigation, logo, footer, and root layout for all pages. 
<List>
 <ListItem>1) The home page covers the grid, card, progress bar, and related media classes.</ListItem>
  <ListItem>2) The tasks pages cover the form-related input fields and list of data using a grid.</ListItem>
</List>
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
<Typography marginTop={'10px'} marginBottom={'10px'} variant='h4' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>WebPack Used:</Typography>
<List>
<ListItem>1) Entry point</ListItem>
<ListItem>2) Output</ListItem>
<ListItem>3) HtmlWebpackPlugin</ListItem>
<ListItem>4) MiniCssExtractPlugin</ListItem>
<ListItem>5) CssMinimizerWebpackPlugin</ListItem>
<ListItem>6) CopyWebpackPlugin</ListItem>
<ListItem>7) babelrc</ListItem>
<ListItem>8) css-loader</ListItem>
<ListItem>9) file-loader</ListItem>
<ListItem>10) style-loader</ListItem>
</List>
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
<Typography variant='h4' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>How to run code locally:</Typography>
</Grid2>
<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>
<Typography variant='h5' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>Frontend-</Typography>
<List>
<ListItem>1) Need to make a clone of the branch from https://github.com/vishalphp/task-management-with-material-ui.git</ListItem>
<ListItem>2) Fire the command npm i locally to install all dependencies.</ListItem>
<ListItem>3) Fire the command npm run start to start the server.</ListItem>
<ListItem>4) Fire the URL (http://localhost:8080/) on the browser.</ListItem>
</List>
</Grid2>

<Grid2 xs={12} marginTop={'10px'} marginBottom={'10px'}>

<Typography variant='h5' margin={'auto'} sx={{fontSize:{xs:'24px'}}}  fontWeight={'700'} color={'rgb(121, 128, 255)'}>Backend-</Typography>
<List>
<ListItem>1) No backend added/required.</ListItem>
</List>
</Grid2>

</Grid2>
</Container> 
  )
}
