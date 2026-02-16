import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList:[]
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.usersList = [...state.usersList, action.payload]
        },

        deleteUser:(state,action)=>{
            state.usersList=state.usersList.filter(
                (user,index)=>index !== action.payload
            )
        }
    }
})

export const {addUser,deleteUser} = userSlice.actions;
export default userSlice.reducer





