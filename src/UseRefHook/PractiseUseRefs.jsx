// import React, { useEffect, useRef, useState } from 'react'

// const PractiseUseRefs = () => {
//     const [input,setInput] = useState("")
//     const inputRef = useRef(null)
//     const handleChange = (e) =>{
//         setInput(e.target.value)

//     }
//     
//   return (
//     <>
//         <input
//         type='text'
//         value={input}
//         ref={inputRef}
//         onChange={handleChange}
//         />
//         <h2>input : {input}</h2>
//     </>
//   )
// }

// export default PractiseUseRefs;


//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


// import React, { useEffect, useRef, useState } from 'react'

// const PractiseUseRefs = () => {
//     const [input,setInput] = useState("")
//     const inputRef = useRef(null)

//     const handleChange = (e) =>{
//         setInput(e.target.value)

//     }
//     useEffect(()=>{
//         console.log(inputRef.current);
//         inputRef.current = input
//     },[input])

//   return (
//     <>
//         <input
//         type='text'
//         ref={inputRef}
//         onChange={handleChange}
//         />
//         <h2>Prev input : {inputRef.current}</h2>
//         <h2>curr input : {input}</h2>
//     </>
//   )
// }

// export default PractiseUseRefs;


//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


import React, { useEffect, useRef, useState } from 'react'

const PractiseUseRefs = () => {
    const [input,setInput] = useState("")
    const inputRef = useRef(null)
    const prevRef = useRef(null)

    const handleChange = (e) =>{
        console.log(e.target.value);
        
        setInput(e.target.value)

    }
   
    useEffect(()=>{
        console.log(prevRef.current);
        prevRef.current = input
    },[input])

    const display = () => {
        console.log(prevRef.current);
        
        console.log(inputRef.current);
        
        inputRef.current.focus()
    }

  return (
    <>
        <input
        type='text'
        ref={inputRef}
        onChange={handleChange}
        value={input}
        />
        <h1>Prev: {prevRef.current}</h1>
        <h1>Curr: {input}</h1>
        
        <button onClick={display}>Show </button>
    </>
  )
}

export default PractiseUseRefs;


