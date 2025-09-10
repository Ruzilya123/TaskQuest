import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
            <h1 className="text-4xl font-bold text-purple-700 mb-6 drop-shadow-md">🎮 TaskQuest</h1>

            <div className="w-full max-w-2xl">
                {children}
            </div>
        </div>
    )
}
