import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { useDispatch } from 'react-redux'
import { setUsers } from './Slice/userSlice'

const Home = () => {
  const dispatch = useDispatch()

  const [FormInput, setFormInput] = useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })


  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormInput((curr)=>{
      return{
      ...curr,
      [name]:value
      }
    })
  }

  const addUser = (event)=>{
    event.preventDefault();
    dispatch(setUsers(FormInput));
  }

  return (
    <div>
        <form>
          <label>Name</label>
          <br/>
          <input
          name='name'
          type='text'
          value={FormInput.name}
          onChange={handleChange}
          />
          <br/>

          <label>Age</label>
          <br/>
          <input
          name='age'
          type='text'
          value={FormInput.age}
          onChange={handleChange}
          />
          <br/>

          <label>Email</label>
          <br/>
          <input
          name='email'
          type='text'
          value={FormInput.email}
          onChange={handleChange}
          />
          <br/>

          <label>Contact</label>
          <br/>
          <input
          name='contact'
          type='text'
          value={FormInput.contact}
          onChange={handleChange}
          />
          <br/>

          <button type="button" onClick={addUser}>Add</button>


        </form>
    </div>
  )
}

export default Home;