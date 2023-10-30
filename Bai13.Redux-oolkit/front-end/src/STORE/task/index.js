import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        listTask: [
            {
                id: 1,
                title: "demo 1",
                isComplete: false,
            },
            {
                id: 2,
                title: "demo 2",
                isComplete: true,
            },
        ],
        task: null
    },
    reducers: {
        getDetail: (state, action) => {
            const task = state.listTask.find(item => item.id == action.payload);
            console.log(task);
            return { ...state, task: task };
        },
        updateStatus : (state,action)=>{
            const newTask = {
                ...state.task,
                isComplete : !state.task.isComplete
            }
            return {
                ...state,
                task : newTask,
            }
        }
    },
});



export const { getDetail,updateStatus} = taskSlice.actions;
export default taskSlice.reducer;
