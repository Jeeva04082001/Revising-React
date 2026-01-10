import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice"
import fruitsReducer from "./Slice/fruitSlices"

const store = configureStore({
    reducer:{
        userInfo: userReducer,
        fruitsInfo:fruitsReducer
    }
})

export default store;