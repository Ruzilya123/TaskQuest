import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';
import characterReducer from './features/character/characterSlice';
import statsReducer from './features/stats/statsSlice';
import achievementsReducer from './features/achievements/achievementsSlice.ts';
import { achievementsMiddleware } from "./features/achievements/achievementsMiddleware.ts";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        character: characterReducer,
        achievements: achievementsReducer,
        stats: statsReducer,
    },
    middleware: (gDM) =>
        gDM().concat(achievementsMiddleware),
})

store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.list));
    localStorage.setItem("character", JSON.stringify(store.getState().character));
    localStorage.setItem("avatar", JSON.stringify(store.getState().character.avatar));
    localStorage.setItem("achievements", JSON.stringify(store.getState().achievements));
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
