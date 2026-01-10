import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    
    reducers:{
        // setUsers:(action,payload) => {}

        //action ah dispatch pannum pothu yethachi information send panna athu payload la kedaikkum.

        setUsers:(state,action)=>{
            state.users = [...state.users, action.payload];
        },

        deleteUser:(state,action) => {
            state.users = state.users.filter(
                (user,index)=>index !== action.payload
            )
        }

    }
    
});

export const {setUsers, deleteUser} = userSlice.actions;
export default userSlice.reducer;

