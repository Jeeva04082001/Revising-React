import React, { useEffect, useLayoutEffect, useState } from 'react'



// The short answer:

// Use useLayoutEffect when you need to synchronously read or write to the DOM before the browser paints anything on the screen — so users don't see flickering or layout shifts.

//----------------------------------------------

// useEffect = "I'll run my code after the screen is painted."

// useLayoutEffect = "I'll run my code before the screen is painted, right after React renders."

//--------------------------------------


// 2. Preventing Visual Flicker / Glitches
// If you’re making visual adjustments like:

// Scrolling

// Animating

// Applying dynamic styles or transforms

//--------------------------------------

// Only use useLayoutEffect when you must read/write the DOM before paint.
// For everything else (like data fetching, logging, subscriptions), use useEffect.

//--------------------------------------



const EffectAndLayout = () => {

    const [Count, setCount] = useState(0)

    useEffect(()=>{
        console.log(Count,'Count--------');
        
    },[Count])
    console.log('rendered------1');

    useLayoutEffect(()=>{
        console.log(Count,'COUNT-------2');
        
    },[Count])
    console.log('rendered------2');

    
  return (
    <div>
        <h1>{Count}</h1>
        <button onClick={()=> setCount((curr)=> curr+1)}>Add</button>
    </div>
  )
}

export default EffectAndLayout