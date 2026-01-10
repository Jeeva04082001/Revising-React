import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits:[],
};

const fruitSlice = createSlice({
    name:"fruits",
    initialState,
    reducers:{
        setFruits:(state,action)=>{
            state.fruits=[...state.fruits, action.payload]
        },
    },
});

export const {setFruits} = fruitSlice.actions;
export default fruitSlice.reducer;