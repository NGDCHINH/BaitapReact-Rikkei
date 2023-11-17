import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        listUser : [
            {
                id : 1,
                name : "ndchinh",
                age: 18,
            },
            {
                id : 2,
                name : "nquynh",
                age: 18,
            }
        ]
    }
})


export default userSlice.reducer;