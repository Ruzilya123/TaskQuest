import type { RootState } from "../../store.ts";
import { useAppSelector } from "../../hooks.ts";

export const TaskList = () => {
    const tasks = useAppSelector((state: RootState) => state.tasks.list)

    return (
        <div className="mt-4 flex flex-col gap-2">
            {tasks.map(task => (
                <div
                    key={task.id}
                    className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                >
                    <div>
                        <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
                            {task.title}
                        </h3>
                        {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => console.log('Toggle complete')}
                            className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                            {task.completed ? "↩️" : "✔️"}
                        </button>
                        <button
                            onClick={() => console.log('Delete task')}
                            className="px-3 py-1 bg-red-500 text-white rounded"
                        >
                            🗑️
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
