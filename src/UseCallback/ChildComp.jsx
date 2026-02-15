import React from 'react'

const ChildComp = React.memo(({onIncrement}) => {

    console.log("child rendering");
    
  return <button onClick={onIncrement}>Increment</button>;
  
})

export default ChildComp;