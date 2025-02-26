import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice"



const store = configureStore({
  auth:authSlice
})

export default store