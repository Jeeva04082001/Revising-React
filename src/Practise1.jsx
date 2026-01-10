import React, {useState,useEffect} from "react";
import { ThemeContext } from "./Practise";
import { useContext } from "react";

const Practise1 = () => {

    const {Theme} = useContext(ThemeContext);

    console.log(Theme,'themeeee');


    const themeStyle = {
        backgroundColor : Theme === "light" ? "white" : "black",
        color: Theme === "light" ? "black" : "white",
    }


    return(
        <div>
            <h1 style={themeStyle}>Practise</h1>
            
        </div>
    )

}

export default Practise1;