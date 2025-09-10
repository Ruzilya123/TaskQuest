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
    localStorage.setItem("avatar", JSON.stringify(store.getState().character.avatar));
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
