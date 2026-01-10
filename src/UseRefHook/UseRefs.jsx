// 13-06-2025


import React, {useRef, useState, useEffect} from 'react';



const UseRefs = () =>{

    const [Input, setInput] = useState("");

    const inputRef = useRef();

    console.log('getting rendered');


    // const display = () => {
    //     console.log(inputRef.current);
        
    // }



    // This connects the DOM input element directly to inputRef, so:

    // inputRef.current === the actual <input> DOM node


    // useEffect(()=>{
    //     inputRef.current = Input
    // },[Input])



    const display = () => {
        console.log(inputRef.current);
        inputRef.current.focus
        
    }

    return (


        // <>
        // <h1>Input</h1>

        // <input
        // type='text'
        // value={Input}
        // onChange={(event)=> setInput(event.target.value)}
        // />
        // <h2>My Name is {Input}</h2>
        // </>

        //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

        // <>
        // <h1>Input</h1>

        // <input
        // ref={inputRef}
        // type='text'
        // // value={Input}
        // // onChange={(event)=> setInput(event.target.value)}
        // />
        // {/* <h2>My Name is {Input}</h2> */}

        // <p>My name Is {inputRef.current?.value}</p>
        // <button onClick={display}> Show Input</button>
        // </>


        //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

        
        <>
            <h1>Input</h1>

            <input
            ref={inputRef}
            type='text'
            value={Input}
            onChange={(event)=> setInput(event.target.value)}
            />
            <p>My Name is {Input}</p>

            {/* <p>My name Is {inputRef.current}</p> */}

            <p>My name Is {inputRef.current ? inputRef.current.value : ""}</p>

            <button onClick={display}> Show Input</button>
        </>




    )
    


}

export default UseRefs;