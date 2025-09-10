import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})

store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.list))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
