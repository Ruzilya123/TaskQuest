import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks.ts";
import type { RootState } from "../../store.ts";
import { setName } from "./characterSlice";

export const NameEditor = () => {
    const dispatch = useAppDispatch()
    const currentName = useSelector((state: RootState) => state.character.name)
    const [name, setNewName] = useState(currentName)
    const [editing, setEditing] = useState(false)

    const handleSave = () => {
        if (name.trim()) {
            dispatch(setName(name.trim()))
            setEditing(false)
        }
    }

    return (
        <div className="mt-4 text-center">
            {editing ? (
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setNewName(e.target.value)}
                        className="border p-2 rounded w-40 text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm"
                    >
                        Сохранить
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setEditing(true)}
                    className="text-purple-600 font-medium hover:underline text-sm"
                >
                    ✏️ Изменить имя
                </button>
            )}
        </div>
    )
}
