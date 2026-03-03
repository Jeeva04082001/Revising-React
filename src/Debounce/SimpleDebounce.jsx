// import React,{useEffect,useState} from "react";

// const SimpleDebounce = () => {

//     const [users, setUsers] = useState([]);
//     console.log(users,'users');
    
//     const [search, setSearch] =useState("");


//     useEffect(()=>{
//         async function fetchUsers(){
//             const res = await fetch("https://jsonplaceholder.typicode.com/users")
//             const data = await res.json();
//             setUsers(data)
//         }
//         fetchUsers();
//     },[])

//     const filteredUsers = users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()))

//     return (
//         <>
//             <h2>Search Users</h2>

//             <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e)=>setSearch(e.target.value)}
//             />
//             <ul>
//                 {filteredUsers.map((user)=>(
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </>
        
//     )

// }

// export default SimpleDebounce;



//================================================================


import React,{useEffect,useState} from "react";

const SimpleDebounce = () => {

    const [allUsers, setAllUsers] = useState([]);
    // console.log(allUsers,'allUsers');
    
    const [users, setUsers] = useState([]);
    console.log(users,'users');
    
    const [search, setSearch] =useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    console.log(debouncedSearch,"debouncedSearch");
    
    //Debounce Logic

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedSearch(search)
        },500);
        console.log(timer);
        
        return () => clearTimeout(timer)
    },[search])


    useEffect(()=>{
        async function fetchUsers(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json();
            setAllUsers(data)
            setUsers(data);
        }
        fetchUsers();
    },[]);


    useEffect(()=>{
        if (!debouncedSearch){
            setUsers(allUsers);
            return;
        } 
        const filteredUsers = allUsers.filter((user)=> user.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
        setUsers(filteredUsers);
      
    },[debouncedSearch,allUsers])


    return (
        <>
            <h2>Search Users</h2>

            <input
            type="text"
            placeholder="Search..."
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

export default SimpleDebounce;


























