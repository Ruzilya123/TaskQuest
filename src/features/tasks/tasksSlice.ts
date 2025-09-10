import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from './types';

interface TasksState {
    list: Task[];
}

const initialState: TasksState = {
    list: JSON.parse(localStorage.getItem("tasks") || "[]"),
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
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.list.find(t => t.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        markXpAwarded: (state, action: PayloadAction<string>) => {
            const t = state.list.find(x => x.id === action.payload)
            if (t) t.xpAwarded = true
            localStorage.setItem("tasks", JSON.stringify(state.list))
        },
        // (опционально) resetTasks для тестов
        resetTasks: () => {
            localStorage.removeItem("tasks")
            return { list: [] }
        }
    }
})

export const { addTask, editTask, removeTask, toggleTask, resetTasks, markXpAwarded } = taskSlice.actions;
export default taskSlice.reducer;
