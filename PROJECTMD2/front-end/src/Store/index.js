import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Store/auth";
import AdminReducer from "./Admin";

const store = configureStore({
    reducer: {
        auth:AuthReducer,
        anime:AdminReducer
    }
})

export default store;