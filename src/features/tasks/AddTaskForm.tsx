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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 bg-white shadow rounded-xl">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
                className="border p-2 rounded"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание задачи (опционально)"
                className="border p-2 rounded"
            />
            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
            >
                ➕ Добавить задачу
            </button>
        </form>
    )
}
