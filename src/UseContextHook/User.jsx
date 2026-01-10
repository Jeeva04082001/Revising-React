import React from 'react'
import { ThemeContext } from './Usecontext';
import { useContext } from 'react';

const User = () => {
    const {Theme} = useContext(ThemeContext);

    console.log(Theme,'themeeee');

    const themeStyle = {
        backgroundColor : Theme === "light" ? "white" : "black",
        color: Theme === "light" ? "black" : "white",
    }
    
  return (
    <div>
        <h1 style={themeStyle}>User</h1>
    </div>
  )
}

export default User;