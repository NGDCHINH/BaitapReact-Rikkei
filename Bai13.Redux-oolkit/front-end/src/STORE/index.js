import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import taskReducer from "./task"; 

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    },
});
