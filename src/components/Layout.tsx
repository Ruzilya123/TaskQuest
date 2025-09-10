import type { ReactNode } from "react";
import TaskQuestLogo from "../assets/TaskQuestLogo.png";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
            <img src={TaskQuestLogo} alt="TaskQuest Logo" className="h-48 mb-4 drop-shadow-md" />

            <div className="w-full max-w-2xl">
                {children}
            </div>
        </div>
    )
}
