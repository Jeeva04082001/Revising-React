import React, { useReducer, useState } from 'react'



// What is useReducer?
// useReducer is a React Hook used for state management, especially useful when:

// The state logic is complex.

// The state depends on previous values.

// You want a more predictable state transition using actions.

// -------------------------------------------
// -------------------------------------------



// Complex State Logic
// When the next state depends on previous state values.

// Or when the state update logic is not straightforward.

// 📍Examples:

// Forms with multiple inputs and validation logic.

// Managing toggle states, dropdowns, modals, etc., in combination.

// -------------------------------------------
// -------------------------------------------



// Use it when:

// You have multiple related state values.

// You need cleaner and scalable state logic than useState.

// You're building forms, complex toggles, or managing different UI states.

// -------------------------------------------
// -------------------------------------------

// useReducer is a React hook like useState but for more complex state logic.

// It uses a reducer function and dispatch to manage state transitions.

// Useful in scenarios where managing state with useState gets messy.


// -------------------------------------------
// -------------------------------------------


// state: current state value.

// dispatch(action): function to trigger state change.

// reducerFunction(state, action): decides how to update state based on action.





// function reducreFn (state, action) {
//     return { count : state.count+1}
// }

// function reducreFn(state,action){
//     switch(action.type){
//         case "increment":
//             return{count: state.count + 1}
//         case "decrement":
//             return{count: state.count - 1}
//         default:
//             return state;
//     }
    
// }

const ACTIONS = {
    INCREMENT:"increment",
    DECREMENT:"decrement",
}
function reducreFn(state,action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return{count: state.count + 1}
        case ACTIONS.DECREMENT:
            return{count: state.count - 1}  
        default:
            return state;      
    }
}



const Usereducer = () => {
    //state data va update pannurathukku useReducer funtion use aagum

    const [state, dispatch] = useReducer(reducreFn, {count: 1})
    console.log(state,'state-----1');

   // state = variable , dispatch = function

    const [Count, setCount]=useState(1)
    
    // const increment = () =>{
    //     setCount((curr) => curr + 1)
    // }

    const increment = () =>{
        // setCount((curr) => curr + 1)
        // dispatch({type: "increment"});
        dispatch({type: ACTIONS.INCREMENT})
    }
    const decrement = () =>{
        // setCount((curr) => curr -1);
        // dispatch({type: "decrement"});
        dispatch({type: ACTIONS.DECREMENT})
    }
  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <button onClick={decrement}> - </button>
        {/* <h1>{Count}</h1> */}
        <h1>{state.count}</h1>
        <button onClick={increment}> + </button>
    </div>
  )
}

export default Usereducer;