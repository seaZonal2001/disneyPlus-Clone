import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../store/features/user/userSlice";
import movieReducer from "../store/features/movie/movieSlice"
;
export default configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});