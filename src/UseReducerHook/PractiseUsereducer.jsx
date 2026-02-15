// import React, { useState } from 'react'

// const PractiseUsereducer = () => {
//     const [count,setCount] = useState(0)

//     const increment = () =>{
//         setCount((curr)=> curr + 1)
//     }
//     const decrement = () =>{
//         setCount((curr)=>curr - 1)
//     }

//   return (
//     <>
//     <div style={{display:"flex", alignItems:"center"}}>
//         <button onClick={decrement}>-</button>
//         <h1>{count}</h1>
//         <button onClick={increment}>+</button>
//     </div>
    
//     </>
//   )
// }

// export default PractiseUsereducer;

// ===================================================================
// const [state, dispatch] = useReducer(reducerFn, initialState)



import React, { useReducer, useState } from 'react'

const Actions = {
    INCREMENT:"increment",
    DECREMENT:"decrement"
}

// function reducerFn(state,action){
//     switch(action.type){
//         case Actions.INCREMENT:
//             return{count:state.count+1}
//         case Actions.DECREMENT:
//             return{count:state.count-1}    
//     }
// }

function reducerFn(state,action){
    if (action.type === Actions.INCREMENT){
        return {count:state.count+1}
    }
    if (action.type === Actions.DECREMENT){
        return {count:state.count-1}
    }

}

const PractiseUsereducer = () => {
    const [state, dispatch] = useReducer(reducerFn, {count: 0})

    const increment = () =>{
        dispatch({type:Actions.INCREMENT})
    }
    const decrement = () =>{
        dispatch({type:Actions.DECREMENT})
    }

  return (
    <>
    <div style={{display:"flex", alignItems:"center"}}>
        <button onClick={decrement}>-</button>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button>
    </div>
    
    </>
  )
}

export default PractiseUsereducer;






















