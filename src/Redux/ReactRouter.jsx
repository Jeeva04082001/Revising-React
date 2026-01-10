import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Users from './Users';
import About from './About';
import Contact from './Contact';
import Navbar from './Component/Navbar';
import User from './User';
import Error from './Error';

const ReactRouter = () =>{
    return(
        <BrowserRouter>
        {/* <Navbar/> */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='Users' element={<Users/>}/>
                <Route path='User/:username' element={<User/>} />
                <Route path='About' element={<About/>}/>
                <Route path='Contact' element={<Contact/>}/>
                <Route path='*' element={<Error />} />
                
            </Routes>
        </BrowserRouter>
    )

}

export default ReactRouter;