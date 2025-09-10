/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Middleware } from "@reduxjs/toolkit";
import { toggleTask } from "../tasks/tasksSlice";
import { addXp } from "../character/characterSlice";
import { unlockAchievement } from "./achievementsSlice";
import type { RootState } from "../../store.ts";

export const achievementsMiddleware: Middleware = store => next => (action: any) => {
    const result: any = next(action)
    const state = store.getState() as RootState

    // 1. Проверка при выполнении задач
    if (action.type === toggleTask.type) {
        const completedCount = state.tasks.list.filter((t: any) => t.completed).length

        if (completedCount >= 1 && !state.achievements.find((a: any) => a.id === "first_task")?.unlocked) {
            store.dispatch(unlockAchievement("first_task"))
        }

        if (completedCount >= 10 && !state.achievements.find((a: any) => a.id === "ten_tasks")?.unlocked) {
            store.dispatch(unlockAchievement("ten_tasks"))
        }
    }

    // 2. Проверка при апе уровня
    if (action.type === addXp.type) {
        const level = state.character.level

        if (level >= 5 && !state.achievements.find((a: any) => a.id === "level_5")?.unlocked) {
            store.dispatch(unlockAchievement("level_5"))
        }
    }

    return result
}
