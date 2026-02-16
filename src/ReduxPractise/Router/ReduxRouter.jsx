import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Home from '../Pages/Home'
import Users from '../Pages/Users'

const ReduxRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users />}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default ReduxRouter