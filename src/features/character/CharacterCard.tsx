import { useAppSelector } from '../../hooks.ts';
import type { RootState } from '../../store.ts';

export const CharacterCard = () => {
    const { name, avatar, xp, level } = useAppSelector((state: RootState) => state.character);

    return (
        <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col items-center">
            <div className="text-6xl">{avatar}</div>
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-gray-600">Уровень: {level}</p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                    className="bg-purple-500 h-3 rounded-full transition-all"
                    style={{ width: `${(xp / 100) * 100}%` }}
                ></div>
            </div>
            <p className="text-sm mt-1">{xp}/100 XP</p>
        </div>
    )
}
