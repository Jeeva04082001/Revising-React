import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser } from '../Slice/userSlice'

const Users = () => {
    const users = useSelector((state)=>state.userInfo.usersList)
    const dispatch = useDispatch()

    console.log(users,'users------');

    const deleteUserInfo = (index) => {
        dispatch(deleteUser(index))

    }
    
  return (
    <div>
        <h1>Users</h1>
        {users?.map((user,index)=>{
            return(
                <div key={index}>
                    <h3>{user.name}</h3>
                    <h3>{user.age}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.contact}</h3>
                    <button onClick={()=>deleteUserInfo(index)}>Delete</button>
                </div>

            )
            
        })}

    </div>
  )
}

export default Users