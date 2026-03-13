// import React, { useState } from "react";


// const SampleDebounce = () => {
//     const [timer,setTimer] = useState(null);

//     const handleChange = (e) => {
//         const value = e.target.value;
//         clearTimeout(timer);
//         const newTimer = setTimeout(()=>{
//             console.log("Api Called", value);

//             fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => console.log(data))
            
//         },1000)
//         setTimer(newTimer)
//     }

//     return(
//         <>
//             <h2> React Debounce Example </h2>
//             <input
//             type="text"
//             placeholder="Type Something..."
//             onChange={handleChange}
//             />
//         </>

//     );

// }
// export default SampleDebounce;


// =================================================================================

import React,{useEffect,useState} from 'react'

const SampleDebounce = () => {

    const [users, setUsers] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const [search, setSearch]= useState("")
    const [debounceSearch, setDebounceSearch]=useState("")

    console.log(users);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceSearch(search)
        },500)
        return () => clearTimeout(timer)
    },[search])
    
    useEffect(()=>{
        async function fetchUser(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)
            setFilterUser(data)
        }
        fetchUser()

    },[])

    // const filteredUsers = users.filter((user)=> user.name.toLowerCase().includes(debounceSearch.toLowerCase()))
    
    // console.log(filteredUsers);

    useEffect(()=>{
        if(!debounceSearch){
            setFilterUser(users);
            return;
        }

        const filtered = users.filter((user)=> user.name.toLowerCase().includes(debounceSearch.toLowerCase()))
        setFilterUser(filtered)
    },[debounceSearch,users])
    
  return (
    // <div>
    //     <h2>Search Users</h2>
    //     <input 
    //     type='text'
    //     placeholder='Search...'
    //     value={search}
    //     onChange={(e)=>setSearch(e.target.value)}
    //     />
    //     <ul>
    //         {filteredUsers.map(user => (
    //             <li key={user.id}>{user.name}</li>
    //         ))}
    //     </ul>
    // </div>

    <div>
        <h2>Search Users</h2>
        <input 
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <ul>
            {filterUser.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
    
  )
}

export default SampleDebounce















