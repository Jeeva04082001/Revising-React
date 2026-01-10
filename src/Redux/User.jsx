import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Component/Navbar';


//dynamic route la irukka value ah get pannurathukku useParams Hook use aaguthu

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
