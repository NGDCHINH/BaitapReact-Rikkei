import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter"
import userSlice from "./user"
import createSagaMiddleWare from "redux-saga"
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleWare()

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        user : userSlice
    },
    middleware: (getDefaulMiddleWare)=>getDefaulMiddleWare().concat(sagaMiddleWare)
});


sagaMiddleWare.run(rootSaga);