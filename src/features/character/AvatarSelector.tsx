import { useSelector } from "react-redux";
import { setAvatar, availableAvatars } from "./characterSlice";
import type { RootState } from "../../store.ts";
import { useAppDispatch } from "../../hooks.ts";

export const AvatarSelector = () => {
    const dispatch = useAppDispatch();
    const currentAvatar = useSelector((state: RootState) => state.character.avatar)

    return (
        <div className="mt-4">
            <h3 className="font-semibold mb-2 text-purple-600">Выбери аватар:</h3>
            <div className="flex gap-3 flex-wrap">
                {availableAvatars.map(avatar => (
                    <button
                        key={avatar}
                        onClick={() => dispatch(setAvatar(avatar))}
                        className={`text-4xl p-2 rounded-lg border-2 transition ${
                            currentAvatar === avatar ? "border-purple-600 scale-110" : "border-gray-300"
                        }`}
                    >
                        {avatar}
                    </button>
                ))}
            </div>
        </div>
    )
}
