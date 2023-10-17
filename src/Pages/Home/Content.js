import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlagIcon from '@mui/icons-material/Flag';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Content({taskCd}) {

  const {title, category, date, comment, attachment, bg } = taskCd;
  const d = new Date(date);
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const modifyDate = monthNames[(new Date(date)).getMonth()]+' '+(new Date(date)).getDate();
//const modifyDate =  date.toLocaleString("en", {month: "long"  }) + ' ' +  date.toLocaleString("en", { day: "numeric" });


  return (
    <>
      <Card sx={{ maxWidth: {sx: 'auto', sm: '260px' } , textAlign: 'left' }} >
         <CardContent>
            
        <Grid2 container flexDirection={'row'} display={'flex'}>
        
        <Grid2 xs={9}>
        <Typography variant="subtitle1" display={'inline-block'} gutterBottom padding={'2px 15px'} borderRadius={'40px'} backgroundColor={bg} color={'#333'} fontSize={'14px'}>
            {category}
        </Typography>
        </Grid2>
        <Grid2 xs={3} textAlign={'right'}>
         <MoreHorizIcon style={{color: '#ccc', textAlign: 'right', fontSize:'32px'}}  />
         </Grid2>
        </Grid2>
        <Grid2 container flexDirection={'row'} display={'flex'} paddingTop={'10px'} paddingBottom={'10px'} >
        <Typography variant="body2" gutterBottom fontSize={'18px'}>
          {title}
        </Typography>
        </Grid2>

        <Grid2 container style={{ fontSize:'14px'}} flexDirection={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
      
          <Grid2 display={'flex'} xs={4} spacing={1}  >
            <FlagIcon style={{color: '#ccc', fontSize:'20px', paddingRight: '3px'}} /> {modifyDate}
          </Grid2>
          <Grid2 display={'flex'} xs={4} spacing={1}>
            <ModeCommentIcon style={{color: '#ccc', fontSize:'20px', paddingRight: '3px'}} /> {comment?.length}
          </Grid2>
          <Grid2 display={'flex'} xs={4} spacing={1}>
            <AttachFileIcon style={{color: '#ccc', fontSize:'20px', paddingRight: '3px'}} /> {attachment?.length}
          </Grid2>

        </Grid2>

         </CardContent>
      </Card>
    </>
  )
}
