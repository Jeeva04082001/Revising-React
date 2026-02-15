// import React, { useMemo, useState } from 'react'

// const PractiseUseMemo = () => {
//     const [num,setNum] = useState(0);
//     const [count,setCount] = useState(0)

//     const doubleNum = useMemo(()=>{
//         console.log("calculating.......");
//         return num * 2;
        
//     },[num])
//   return (
//     <>
//         <input
//         type='number'
//         value={num}
//         onChange={(e)=> setNum(e.target.value)}
//         />
//         <button onClick={()=>setCount(count+1)}>count: {count}</button>
//         <h2>Double: {doubleNum}</h2>
//     </>
//   )
// }

// export default PractiseUseMemo;

//=========================================================================


import React, { useMemo, useState } from 'react'

const PractiseUseMemo = () => {
    const [search,setSearch]=useState("")
    const [count,setCount]=useState(0);

    const users = [
        "Arun", "Ajith", "Bala", "Chitra", "Divya",
        "Ganesh", "Hari", "Jeeva", "Karthik", "Manoj"
    ];

    const filteredUsers = useMemo(()=>{
        return users.filter(name=> name.toLowerCase().includes(search.toLowerCase()))
    },[search])

  return (
    <div>
        <input
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        <ul>
            {filteredUsers.map((name)=>(
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default PractiseUseMemo;