import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";
import { editTask, removeTask, toggleTask } from "./tasksSlice.ts";
import type { RootState } from "../../store.ts";

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

    return (
        <div className="mt-4 flex flex-col gap-2 w-full max-w-lg">
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
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
                                    {task.title}
                                </h3>
                                {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => dispatch(toggleTask({ id: task.id }))}
                                    className="px-3 py-1 bg-green-500 text-white rounded"
                                >
                                    {task.completed ? "↩️" : "✔️"}
                                </button>
                                <button
                                    onClick={() => handleEdit(task.id, task.title, task.description)}
                                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => dispatch(removeTask({ id: task.id }))}
                                    className="px-3 py-1 bg-red-500 text-white rounded"
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
