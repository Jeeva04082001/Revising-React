import React,{useCallback, useMemo, useState} from 'react';
import List from './List';
//14-06-2025

// const UseCallBack = () => {

//     const [Number, setNumber] = useState(0);
//     const [Dark,setDark] = useState(false);

//     const getItems = () => {
//         return [Number+1, Number+2, Number+3];
//     }
//     const getItems1 = useCallback(()=>{
//         return[Number+1, Number+2, Number+3];
//     },[Number]);

//     const theme = {
//         backgroundColor:Dark ? 'black' : 'White',
//         color: Dark ? 'White' : 'black'
//     };


//     return (
//         <>
//             <div style={theme}>
//                 <input
//                 type= 'number'
//                 value={Number}
//                 onChange={(e)=> setNumber(parseInt(e.target.value))}
                
//                 />

//                 <button onClick={()=> setDark((curr)=> !curr)}>Toogle Theme</button>
//                 <List getItems={getItems}/>
//                 {/* <List getItems={getItems1}/> */}

//             </div>
        
//         </>
//     )




    

// }

//============ using useMemo=========================================

// const UseCallBack = () => {

//     const [Number, setNumber] = useState(0);
//     const [Dark,setDark] = useState(false);

//     const getItems = () => {
//         return [Number+1, Number+2, Number+3];
//     }
//     const getItems1 = useMemo(()=>{
//         return[Number+1, Number+2, Number+3];
//     },[Number]);

//     const theme = {
//         backgroundColor:Dark ? 'black' : 'White',
//         color: Dark ? 'White' : 'black'
//     };


//     return (
//         <>
//             <div style={theme}>
//                 <input
//                 type= 'number'
//                 value={Number}
//                 onChange={(e)=> setNumber(parseInt(e.target.value))}
                
//                 />

//                 <button onClick={()=> setDark((curr)=> !curr)}>Toogle Theme</button>
//                 {/* <List getItems={getItems}/> */}
//                 <List getItems={getItems1}/>

//             </div>
        
//         </>
//     )




    

// }

//============ using useCallback ===========================

const UseCallBack = () => {

    const [Number, setNumber] = useState(0);
    const [Dark,setDark] = useState(false);

    const getItems = () => {
        return [Number+1, Number+2, Number+3];
    }

    const getItems1 = useCallback((incrementor)=>{
        return[
            Number + incrementor +1, 
            Number + incrementor +2,
            Number + incrementor +3,
        ];
    },[Number]);

    const theme = {
        backgroundColor:Dark ? 'black' : 'White',
        color: Dark ? 'White' : 'black'
    };


    return (
        <>
            <div style={theme}>
                <input
                type= 'number'
                value={Number}
                onChange={(e)=> setNumber(parseInt(e.target.value))}
                
                />

                <button onClick={()=> setDark((curr)=> !curr)}>Toogle Theme</button>
                {/* <List getItems={getItems}/> */}
                <List getItems={getItems1}/>

            </div>
        
        </>
    )




    

}


export default UseCallBack;












