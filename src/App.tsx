import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AddTaskForm } from "./features/tasks/AddTaskForm";
import { TaskList } from "./features/tasks/TaskList";
import { CharacterCard } from "./features/character/CharacterCard";
import { Layout } from "./components/Layout.tsx";
import { PageTransition } from "./components/PageTransition.tsx";
import { AchievementsList } from "./features/achievements/AchievementsList.tsx";
import { StatsChart } from "./features/stats/StatsChart.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <nav className="flex gap-4 p-4 bg-white/80 shadow rounded-lg mb-6 justify-center">
                    <Link to="/" className="text-purple-600 font-medium hover:underline">📋 Задачи</Link>
                    <Link to="/character" className="text-purple-600 font-medium hover:underline">🧙 Персонаж</Link>
                    <Link to="/achievements" className="text-purple-600 font-medium hover:underline">🏆 Достижения</Link>
                    <Link to="/stats" className="text-purple-600 font-medium hover:underline">📊 Статистика</Link>
                </nav>

                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={
                            <PageTransition>
                                <AddTaskForm />
                                <TaskList />
                            </PageTransition>
                        } />
                        <Route path="/character" element={
                            <PageTransition>
                                <div className="w-full flex justify-center">
                                    <CharacterCard />
                                </div>
                            </PageTransition>
                        } />
                        <Route path="/achievements" element={
                            <PageTransition>
                                <AchievementsList />
                            </PageTransition>
                        } />
                        <Route path="/stats" element={
                            <PageTransition>
                                <StatsChart />
                            </PageTransition>
                        } />
                    </Routes>
                </AnimatePresence>
            </Layout>
        </BrowserRouter>
    )
}
