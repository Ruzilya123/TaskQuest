import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'
import characterReducer from './features/character/characterSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        character: characterReducer,
    },
})

store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.list));
    localStorage.setItem("character", JSON.stringify(store.getState().character));
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
