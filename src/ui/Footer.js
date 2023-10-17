import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export default function Footer(props) {
  return (
    <Grid2 backgroundColor={props.bg} color={props.textColor} fontSize={'16px'} textAlign={'center'} padding={'10px'}>@ 2023 MatLearnTut. All rights reserved.</Grid2>
  )
}
