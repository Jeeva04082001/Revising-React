import {configureStore} from "@reduxjs/toolkit"
import  useReducer from "../Slices/userSlice"


const store = configureStore ({
    reducer:{
        userInfo: useReducer,
    }
})

export default store;