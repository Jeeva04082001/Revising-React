import React from 'react'
import Navbar from './Component/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from './Slice/userSlice'

const Users = () => {
  const users = useSelector((state)=> state.userInfo.users)

  console.log(users,'users');

  const dispatch = useDispatch()

  const deleteUserInfo = (index) =>{
    dispatch(deleteUser(index))

  }
  
  return (
    <div>
        <Navbar />
        {users?.map((user,index)=>{
          return(
            <div key={index}>
              <h1>{user.name}</h1>
              <h1>{user.age}</h1>
              <h1>{user.email}</h1>
              <h1>{user.contact}</h1>
              <button onClick={()=>deleteUserInfo(index)}>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default Users