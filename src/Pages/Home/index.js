import React from 'react'; 
import ContentHeader from './ContentHeader';
import Sidebar from './Sidebar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/material';
import Content from './Content';
import { useOutletContext } from 'react-router-dom';


export default function Index() {
  const taskCard = useOutletContext();

  return (
     <>
       <Container > 
          <Grid2 container paddingTop={'20px'} flexDirection={'row'} paddingBottom={'20px'} display={'flex'} justifyContent={'center'} alignItems={'stretch'} spacing={2}>
            <Grid2 xs={12} sm={8} md={8}  container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} paddingRight={'20px'}>
              <Grid2 xs={12} display={'flex'} flexDirection={'row'}  justifyContent={'center'} alignItems={'center'} >
                <ContentHeader />
              </Grid2>
              <Grid2 container xs={12} display={'flex'} flexDirection={'row'}  justifyContent={'flex-start'} alignItems={'stretch'} paddingBottom={'40px'} >
                 
                 {
                  taskCard.map((taskCd, Index)=> <Grid2 xs={12} sm={6} md={4} key={Index} ><Content taskCd={taskCd} /></Grid2> )
                 }
              </Grid2>
            </Grid2>
            <Grid2 xs={12} sm={4} md={4}  display={'flex'} justifyContent={'center'} alignItems={'stretch'} sx={{borderLeft: { xs: 'none', sm: '1px solid #d6eafc'  }}}  paddingLeft={'20px'} >
                <Sidebar />
            </Grid2>
          
            </Grid2> 
            
      </Container>
     </>
  )
}
