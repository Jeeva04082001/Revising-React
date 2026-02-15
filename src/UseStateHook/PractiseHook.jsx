// [15-02-2026]

import { useState } from "react"

const PractiseHook = ()=>{
    const [count,setCount]=useState(0)

    const handleAdd = () => {
        setCount((curr)=>{
            return curr + 1
        })

    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>add1</button>
        <button onClick={handleAdd}>add2</button>
        </>
    )

}
export default PractiseHook;


