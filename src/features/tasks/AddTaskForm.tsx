import { type FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTask } from './tasksSlice';

export const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addTask({ title, description }));
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание (необязательно)"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                ➕ Добавить задачу
            </button>
        </form>
    )
}
