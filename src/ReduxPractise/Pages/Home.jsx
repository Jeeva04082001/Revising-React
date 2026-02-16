import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Slice/userSlice";

const Home = () => {
    const dispatch = useDispatch()
    const [user,setUser]=useState({
        name:"",
        age:"",
        phone:"",
        email:""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser((curr)=>({
            ...curr,
            [name]:value
        }))
    }

    const handleAdd = () => {
        dispatch(addUser(user))
        setUser({
            name:"",
            age:"",
            phone:"",
            email:""
        })

    }




    return (
        <>
            <label>Name</label><br/>
            <input 
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            />
            <br/>

            <label>Age</label><br/>
            <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
            />
            <br/>

            <label>Phone</label><br/>
            <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            />
            <br/>

            <label>Email</label><br/>
            <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            />
            <br/><br/>

            <button type="button" onClick={handleAdd}>Add</button>
        </>

    )

}
export default Home;