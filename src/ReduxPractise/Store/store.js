import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice";




const store = configureStore({
    reducer:{
        userInfo:userReducer,
    }
})

export default store;






