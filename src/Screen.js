import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './layout/RootLayout'
import Tasks from './Pages/addTask'
import Document from './Pages/Document'

export default function Screen() {
  return (
    <Routes>
        <Route element={<RootLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/document' element={<Document />} />
        </Route>
        
    </Routes>
  )
}
