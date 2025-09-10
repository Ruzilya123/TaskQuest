import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Achievement } from "./types";

const initialAchievements: Achievement[] = [
    { id: "first_task", title: "Первая задача!", description: "Выполни 1 задачу", unlocked: false },
    { id: "ten_tasks", title: "Мастер продуктивности", description: "Выполни 10 задач", unlocked: false },
    { id: "level_5", title: "Прокачанный герой", description: "Достигни уровня 5", unlocked: false },
    { id: "level_10", title: "Легенда", description: "Достигни уровня 10", unlocked: false },
    { id: "fifty_tasks", title: "Ветеран задач", description: "Выполни 50 задач", unlocked: false },
    { id: "hundred_tasks", title: "Легендарный продуктивист", description: "Выполни 100 задач", unlocked: false },
] satisfies Achievement[]

// Синхронизация с localStorage
const syncAchievements = (): Achievement[] => {
    const saved = localStorage.getItem("achievements")
    if (!saved) return initialAchievements

    try {
        const parsed: Achievement[] = JSON.parse(saved)
        return initialAchievements.map(ia => {
            const savedAch = parsed.find(a => a.id === ia.id)
            return savedAch ? { ...ia, unlocked: savedAch.unlocked } : ia
        })
    } catch {
        return initialAchievements
    }
}

const initialState: Achievement[] = syncAchievements()

const achievementsSlice = createSlice({
    name: "achievements",
    initialState,
    reducers: {
        unlockAchievement: (state, action: PayloadAction<string>) => {
            const ach = state.find(a => a.id === action.payload)
            if (ach && !ach.unlocked) {
                ach.unlocked = true
                localStorage.setItem("achievements", JSON.stringify(state))
            }
        },
        // (опционально) resetAchievements для тестов
        resetAchievements: () => {
            localStorage.removeItem("achievements")
            return initialAchievements
        }
    }
})

export const { unlockAchievement, resetAchievements } = achievementsSlice.actions
export default achievementsSlice.reducer
