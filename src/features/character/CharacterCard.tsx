import type { RootState } from '../../store.ts';
import { useAppSelector } from '../../hooks.ts';
import { AvatarSelector } from "./AvatarSelector";
import { NameEditor } from './NameEditor';

export const CharacterCard = () => {
    const { name, avatar, xp, level } = useAppSelector((state: RootState) => state.character)

    return (
        <div className="p-6 bg-white/90 shadow-xl rounded-2xl flex flex-col items-center w-full max-w-sm border border-purple-200">
            <div className="text-7xl">{avatar}</div>
            <h2 className="text-2xl font-bold mt-2 text-purple-700">{name}</h2>
            <NameEditor />

            <p className="text-gray-600 font-medium mt-2">⭐ Уровень {level}</p>

            {/* XP Progress */}
            <div className="w-full bg-gray-200 rounded-full h-4 mt-3 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all"
                    style={{ width: `${(xp / 100) * 100}%` }}
                />
            </div>
            <p className="text-sm mt-1">{xp}/100 XP</p>

            {/* Выбор аватара */}
            <AvatarSelector />
        </div>
    )
}
