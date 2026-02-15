import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp';


const PractiseeUseCallback = () => {
    const [num,setNum] = useState(0);
    const [count,setCount]=useState(0);

    const incrementCount = useCallback(()=>{
        console.log("Parent rendered");

        setCount((prev)=>prev+1)
    },[])




  return (
    <div>
        <input
        type='number'
        value={num}
        onChange={(e)=>setNum(e.target.value)}
        />
        <ChildComp onIncrement={incrementCount}/>
        <h3>Count: {count}</h3>
    </div>
  )
}

export default PractiseeUseCallback