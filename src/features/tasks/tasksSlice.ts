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
        editTask: (state, action: PayloadAction<{ id: string; title: string; description?: string }>) => {
            const task = state.list.find(t => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.description = action.payload.description;
            }
        },
        removeTask: (state, action: PayloadAction<{ id: string }>) => {
            state.list = state.list.filter(t => t.id !== action.payload.id);
        }
    }
})

export const { addTask, editTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
