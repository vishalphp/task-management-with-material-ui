import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './layout/RootLayout'
import Tasks from './Pages/addTask'

export default function Screen() {
  return (
    <Routes>
        <Route element={<RootLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
        </Route>
        
    </Routes>
  )
}
