import React,{useState,useEffect} from 'react'
import {useDebounce} from "./CustomDebounceHook";


const Component = () => {
    const [search, setSearch] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const debounce = useDebounce(search,500);

    useEffect(()=>{
        async function fetchUsers(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data);
            setAllUsers(data);
        }
        fetchUsers();
    },[])

    useEffect(()=>{
        if(!debounce){
            setUsers(allUsers);
            return;
        }
        const filterUser = allUsers.filter((user)=> user.name.toLowerCase().includes(debounce.toLowerCase()))
        setUsers(filterUser);

    },[debounce])




  return (
    <>
        <h2>Search Users</h2>

        <input
        type='text'
        placeholder='search...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    </>
  )
}

export default Component;