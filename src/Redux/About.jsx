import React from 'react'
import Navbar from './Component/Navbar'
import { useSelector } from 'react-redux'


const About = () => {
  const fruits = useSelector((state)=>state.fruitsInfo.fruits)

  console.log(fruits,'fruits');
  
  return (
    <div>
        <Navbar/>
        <h1>About</h1>
    </div>
  )
}

export default About