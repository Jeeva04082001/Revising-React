import {useState, useLayoutEffect,useEffect } from 'react';

const PrectiseEffectAndLayout = () => {
    const [count,setCount] = useState(0)


    useEffect(()=>{
        console.log("render----------1",count);
        
    },[count])

    useLayoutEffect(()=>{
        console.log("render-----------2",count);
        
    },[count])

    console.log("rendering------------",count);

    
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>setCount((curr)=> curr+1)}>Add</button>
    </>
  )
}

export default PrectiseEffectAndLayout