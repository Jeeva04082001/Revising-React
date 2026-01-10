import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Component/Navbar';

const User = () =>{
    const {username} = useParams()
    return(
        <div>
            <Navbar/>
            <h1>User:{username}</h1>
        </div>
    )
}
export default User;
