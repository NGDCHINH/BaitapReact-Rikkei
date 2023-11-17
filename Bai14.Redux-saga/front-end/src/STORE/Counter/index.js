import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 10,
        loading: true,
    },
    reducers:{
        inCreCounter: (state)=>{
            return {
                ...state,
                value :state.value + 1,
            }
        },
        DeCreCounter: (state)=>{
            return {
                ...state,
                value :state.value - 1,
            }
        },
        inCrByNumber : (state,actions)=>{
            return {
                ...state,
                value: Number(actions.payload) + state.value,
            }
        },
        deCrByNumber : (state,actions)=>{
            return {
                ...state,
                value: Number(actions.payload) - state.value,
            }
        }
    },
   
})


export const {inCreCounter, inCrByNumber, deCrByNumber, DeCreCounter} = counterSlice.actions

export default counterSlice.reducer