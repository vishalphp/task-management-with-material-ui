import React, { useState } from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'
import Footer from '../ui/Footer';

export default function RootLayout() {
  const theme = useTheme();
  const taskCard = [{title: 'Lorem Ipsum is simply dummy text of the printing', category: 'copywritting', date:'12/11/2022', comment:[], attachment:[], status:'process', bg: '#f4cce3' },{title: 'It is a long established fact that a reader will be distracted', category: 'design', date:'10/01/2022', comment:[], attachment:[], status:'todo', bg:'#d6eafc'},{title: 'Many desktop publishing packages and web page editors now use Lorem Ipsum', category: 'development', date:'07/01/2019', comment:['xyz'], attachment:[], status:'done', bg: '#d2e4ca'},{title: 'Many desktop publishing packages and 2', category: 'review', date:'02/04/2017', comment:['xyz','vbn'], attachment:'', status:'review', bg:'#fcdbed'},{title: 'Lorem Ipsum 2 is simply dummy text of 2 the printing', category: 'copywritting', date:'04/11/2021', comment:[], attachment:[], status:'review', bg:'#fcdbed' },{title: 'It is a long 2 established fact that a reader 2 will be distracted', category: 'development', date:'10/07/2000', comment:[], attachment:[], status:'todo', bg:'#d6eafc'},{title: 'Many desktop publishing 3 packages and web page editors now use Lorem Ipsum', category: 'design', date:'07/06/2019', comment:[], attachment:[], status:'done', bg: '#d2e4ca'},{title: 'Many desktop publishing 3 packages and 2', category: 'done', date:'04/22/2019', comment:[], attachment:[], status:'review', bg:'#fcdbed'}];


  return (
    <>
    <div  style={{background: `${theme.palette.primary.light}`}}>
      <Header />
      <Outlet context={taskCard} />
      <Footer bg={theme.palette.primary.footerBackground} textColor={theme.palette.primary.topmenuText}/>
    </div>
    </>
  )
}
