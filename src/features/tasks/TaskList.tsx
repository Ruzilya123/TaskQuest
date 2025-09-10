import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";
import {editTask, markXpAwarded, removeTask, toggleTask} from "./tasksSlice.ts";
import { addXp, XP_PER_TASK } from "../character/characterSlice.ts";
import { unlockAchievement } from "../achievements/achievementsSlice.ts";
import { addCompletion } from "../stats/statsSlice.ts";
import type { RootState } from "../../store.ts";
import type { Task } from "./types.ts";

export const TaskList = () => {
    const tasks = useAppSelector((state: RootState) => state.tasks.list)
    const dispatch = useAppDispatch()

    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");

    const handleEdit = (id: string, title: string, description?: string) => {
        setEditingTaskId(id);
        setEditTitle(title);
        setEditDescription(description || "");
    }

    const handleSave = (id: string) => {
        if (!editTitle.trim()) return;
        dispatch(editTask({ id, title: editTitle, description: editDescription }));
        setEditingTaskId(null);
    }

    const handleTaskCompletion = (task: Task) => {
        if (!task.completed) {
            if (!task.xpAwarded) {
                dispatch(addXp(XP_PER_TASK))
                dispatch(markXpAwarded(task.id))
                dispatch(addCompletion())
            }

            // проверка на ачивки
            if (tasks.filter(t => t.completed).length + 1 === 1) {
                dispatch(unlockAchievement("first_task"))
            }
            if (tasks.filter(t => t.completed).length + 1 === 10) {
                dispatch(unlockAchievement("ten_tasks"))
            }
        }
        dispatch(toggleTask(task.id))
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            {tasks.map(task => (
                <div
                    key={task.id}
                    className="flex flex-col gap-2 p-3 bg-gray-100 rounded-lg shadow"
                >
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="border p-2 rounded"
                            />
                            <textarea
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                className="border p-2 rounded"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleSave(task.id)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded"
                                >
                                    💾 Сохранить
                                </button>
                                <button
                                    onClick={() => setEditingTaskId(null)}
                                    className="px-3 py-1 bg-gray-400 text-white rounded"
                                >
                                    ❌ Отмена
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-between p-4 bg-white/90 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200">
                            <div>
                                <h3 className={`font-semibold text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                                    {task.title}
                                </h3>
                                {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleTaskCompletion(task)}
                                    className={`px-3 py-1 rounded font-medium transition ${
                                        task.completed ? "bg-gray-400 text-white" : "bg-green-500 hover:bg-green-600 text-white"
                                    }`}
                                >
                                    {task.completed ? "↩️" : "✔️"}
                                </button>
                                <button
                                    onClick={() => handleEdit(task.id, task.title, task.description)}
                                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => dispatch(removeTask({ id: task.id }))}
                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
