import { useAppSelector } from "../../hooks.ts";
import type { RootState } from "../../store";

export const AchievementsList = () => {
    const achievements = useAppSelector((state: RootState) => state.achievements)

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">🏆 Достижения</h2>
            <div className="flex flex-col gap-3">
                {achievements.map(a => (
                    <div
                        key={a.id}
                        className={`p-3 rounded-lg border flex justify-between items-center ${
                            a.unlocked ? "bg-green-100 border-green-400" : "bg-gray-100 border-gray-300"
                        }`}
                    >
                        <div>
                            <h3 className="font-semibold">{a.title}</h3>
                            <p className="text-sm text-gray-500">{a.description}</p>
                        </div>
                        <span>{a.unlocked ? "✅" : "🔒"}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
