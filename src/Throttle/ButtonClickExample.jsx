// import React, { useState } from 'react'

// function throttle(func,delay){
//     let lastCall = 0;

//     return function(...args){
//         const now = new Date().getTime();

//         if(now - lastCall >= delay){
//             lastCall=now;
//             func(...args);
//         }
//     }

// }

// const ButtonClickExample = () => {

//     const [count, setCount] = useState(0);

//     const handlClick = throttle(()=>{
//         setCount((prev) => prev + 1)
//         console.log("Clicked");
        
//     },5000)
//   return (
//     <div>
//         <h2>Count: {count}</h2>
//         <button onClick={handlClick}> Click </button>
//     </div>
//   )
// }

// export default ButtonClickExample;



// ===============  using useRef ==========================================================




// import React, { useState,useRef } from 'react'

// function throttle(func,delay){
//     let lastCall = 0;
//     console.log(lastCall,'lastCall');
    

//     return function(...args){
//         const now = new Date().getTime();
//         console.log(now,'now');
        
//         if(now - lastCall >= delay){
//             lastCall=now;
//             func(...args);
//         }
//     }

// }

// const ButtonClickExample = () => {

//     const [count, setCount] = useState(0);

//     const throttleClick = useRef(
//         throttle(()=>{
//             setCount((prev) => prev+1)
//             console.log("Clicked....");   
//         },2000)
//     );

//     const handlClick = throttle(()=>{
//         setCount((prev) => prev + 1)
//         console.log("Clicked");
        
//     },5000)

//   return (
//     <div>
//         <h2>Count: {count}</h2>
//         <button onClick={throttleClick.current}> Click </button>
//     </div>
//   )
// }

// export default ButtonClickExample;



// ===============  using useCallback ==========================================================


import React, { useState,useRef, useCallback } from 'react'

// Closure in Your Throttle

function throttle(func,delay){
    // console.log(func,'func---');
    // console.log(delay,'delay-------');
    
    
    let lastCall = 0;
    console.log(lastCall,'lastCall');
    return (...args) => {
        
        const now = new Date().getTime();
        console.log(now,'now');
        console.log(lastCall,'befor update');
        if(now - lastCall >= delay){
            lastCall=now;
            console.log(lastCall,"after update");
            func(...args);

        }
    }

}

const ButtonClickExample = () => {

    const [count, setCount] = useState(0);

    const throttleClick = useRef(
        throttle(()=>{
            setCount((prev) => prev+1)
            console.log("Clicked....");   
        },2000)
    );

    const handleClick = useCallback(()=>{
        throttleClick.current();
        console.log("ckickeddd");
        
    },[]);

   

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}> Click </button>
    </div>
  )
}

export default ButtonClickExample;


// =====================================================================

// 🔑 Final Concept Summary

// | Hook          | Purpose                       |
// | ------------- | ----------------------------- |
// | `useState`    | store state                   |
// | `useRef`      | store value without re-render |
// | `useCallback` | memoize function              |
// | `throttle`    | limit function execution      |


// Render
//    ↓
// throttle created
//    ↓
// stored in useRef
//    ↓
// Button click
//    ↓
// handleClick
//    ↓
// throttleClick.current()
//    ↓
// throttle logic
//    ↓
// setCount
//    ↓
// React re-render

// ===========================================================================
// "Why useRef is used for throttle?"

// Answer:

// Because React functional components re-render, recreating functions and resetting variables. useRef preserves the throttled function across renders.


