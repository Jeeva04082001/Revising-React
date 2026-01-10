import React,{ useEffect, useState } from "react"



//[11-06-2025]

// const UseEffectHooks = () => {
//     const [num, setNum] = useState(100);
//     const [num1, setNum1] = useState(200);

//     useEffect(()=>{
//         setNum(200)
//         console.log('1111111');
        
//     },[])

//     console.log(num,'num----');
    

//     useEffect(()=>{
//         setNum1(300)
//         console.log('222222222');
        
//     },[num1])

//     // console.log(num,'33333333333');
//     console.log(num1,'44444444444');
    

//     return(
//         <>
//         <h1>{num}</h1>
//         <button onClick={()=> setNum((curr)=> curr+1)}>Add</button>

// <br/>
//         {/* <h2>{num1}</h2>
//         <button onClick={()=>
//         setNum1((curr)=>{
//             return curr + 1;
//         })}>Add2</button> */}

//         <h3>{num1}</h3>
//         <button onClick={()=>setNum1((curr) => curr + 1) }> Add 3</button>


//         </>
//     )



// }





const UseEffectHooks = () => {
    const [num, setNum] = useState(100);
    const [num1, setNum1] = useState(200);

   

    // useEffect(()=>{
       
    //     console.log('fro  useeffect');
        
    // },[num,num1])

    console.log(num,'1111111111');
    console.log(num1,'222222222222');
    


    // useEffect(() => {
    //     setNum(200)

    //     console.log('from useeffect');

    //     return () =>{
    //         setNum(100)
    //         console.log('clean memory');
            
    //     }
        
    // })

    
    useEffect(() => {
        setNum(200)

        console.log('from useeffect');

        return () =>{
            setNum(null)
            console.log('clean memory');
            
        }
        
    },[num,num1])


    return(
        <>
        <h1>{num}</h1>
        <button onClick={()=> setNum((curr)=> curr+1)}>Add</button>

        <br/>
        
        <h2>{num1}</h2>
        <button onClick={()=>
        setNum1((curr)=>{
            return curr + 1;
        })}>Add2</button>

        {/* <h3>{num1}</h3>
        <button onClick={()=>setNum1((curr) => curr + 1) }> Add 3</button> */}


        </>
    )



}

export default UseEffectHooks;