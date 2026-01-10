import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { useDispatch } from 'react-redux'
import { setFruits } from './Slice/fruitSlices'


const Contact = () => {
  const [fruits,setFruitsInfo] = useState("")
  const dispatch = useDispatch();

  const addFruits = ()=>{
    dispatch(setFruits(fruits))
  }



  return (
    <div>
        <Navbar/>
        <h1>Contact</h1>
        <input
        type='text'
        placeholder='enter fruit'
        onChange={(e)=> setFruitsInfo(e.target.value)}
        />
        <button onClick={addFruits}>Add</button>
    </div>
  )
}

export default Contact