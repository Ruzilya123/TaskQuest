import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from './types';

interface TasksState {
    list: Task[];
}

const initialState: TasksState = {
    list: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string; description?: string }>) => {
            const newTask: Task = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
                createdAt: Date.now(),
            }
            state.list.push(newTask)
        },
    }
})

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
