import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';

  {/* 13-06-2025 */}

// const UseMemo = () => {

//     const [Number, setNumber] = useState(0);
//     const [Dark, setDark] = useState(false);

//     const doubleNumber = slowFunction(Number)

//     const doubleNumber1 = useMemo(() => {
//         return slowFunction(Number)
//     },[Number])

//     const themeStyle = {
//         backgroundColor : Dark ? "black" : "White",
//         color: Dark ? "White" : "black"
//     }

//     return (
//         <>
//             <input
//             type='number'
//             value={Number}
//             onChange={(e)=> setNumber(e.target.value)}
//             />
//             <button onClick={()=> setDark((curr) => !curr)}>Toogle Theme</button>
//             <div style={themeStyle}>{doubleNumber}</div>
//             <div style={themeStyle}>{doubleNumber1}</div>


//         </>
//     )



// }

// export default UseMemo;

// function slowFunction(num) {
//     console.log("run slow----------");

//     for (let i = 0; i < 1000000000; i++){}
//     return num *2
    
// }



//----------------------------------------------------

// const UseMemo = () => {

//     const [Number, setNumber] = useState(0);
//     const [Dark, setDark] = useState(false);

   

//     const [DoubleNumber, setDoubleNumber] = useState(0);


//     const doubleNumber = useMemo(()=>{
//         return slowFunction(Number)
//     },[Number]) // Number la irukka value change aanathaa call aagum


//     useEffect(()=>{
//         setDoubleNumber(slowFunction(Number));
//     },[Number])

//     const themeStyle = {
//         backgroundColor : Dark ? "black" : "White",
//         color: Dark ? "White" : "black"
//     }

//     useEffect(()=>{
//         console.log('ttttttttttt');
        
//     },[])

//     return (
//         <>
//             <input
//             type='number'
//             value={Number}
//             onChange={(e)=> setNumber(e.target.value)}
//             />
//             <button onClick={()=> setDark((curr) => !curr)}>Toogle Theme</button>
//             {/* <div style={themeStyle}>{doubleNumber}</div> */}
//             <div style={themeStyle}>{DoubleNumber}</div>

//             <div style={themeStyle}>{doubleNumber}</div>



//         </>
//     )



// }

// export default UseMemo;

// function slowFunction(num) {
//     console.log("run slow----------");

//     for (let i = 0; i < 1000000000; i++){}
//     return num *2
    
// }


//----------------------------------------------------


const UseMemo = () => {

    const [Number, setNumber] = useState(0);
    const [Dark, setDark] = useState(false);

   

    // const [DoubleNumber, setDoubleNumber] = useState(0);


    const doubleNumber = useMemo(()=>{
        return slowFunction(Number)
    },[Number]) // Number la irukka value change aanathaa call aagum


    

    const themeStyle = useMemo(()=>{
        return {
            backgroundColor : Dark ? "black" : "White",
            color: Dark ? "White" : "black"
        }
    },[Dark]);

    useEffect(()=>{
        console.log('ttttttttttt');
        
    },[themeStyle])

    return (
        <>
            <input
            type='number'
            value={Number}
            onChange={(e)=> setNumber(e.target.value)}
            />
            <button onClick={()=> setDark((curr) => !curr)}>Toogle Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>



        </>
    )



}

export default UseMemo;

function slowFunction(num) {
    console.log("run slow----------");

    for (let i = 0; i < 1000000000; i++){}
    return num *2
    
}

