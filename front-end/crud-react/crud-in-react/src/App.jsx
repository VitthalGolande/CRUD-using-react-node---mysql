import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from './Student'
import Create from './Create'
import Updatestudent from './Updatestudent'

function App() {
  return (
    <div>

       <BrowserRouter>
           <Routes>
            <Route path='' element={<Student/>} /> 
            <Route path='/create' element={<Create/>} />
            <Route path='/update/:id' element={<Updatestudent/>} />
           </Routes>
       
       </BrowserRouter>

    </div>
  )
}

export default App