import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AddTaskForm } from "./features/tasks/AddTaskForm";
import { TaskList } from "./features/tasks/TaskList";
import { CharacterCard } from "./features/character/CharacterCard";
import { Layout } from "./components/Layout.tsx";
import { PageTransition } from "./components/PageTransition.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <nav className="flex gap-4 p-4 bg-white/80 shadow rounded-lg mb-6 justify-center">
                    <Link to="/" className="text-purple-600 font-medium hover:underline">📋 Задачи</Link>
                    <Link to="/character" className="text-purple-600 font-medium hover:underline">🧙 Персонаж</Link>
                    <Link to="/achievements" className="text-purple-600 font-medium hover:underline">🏆 Достижения</Link>
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
                                <CharacterCard />
                            </PageTransition>
                        } />
                        <Route path="/achievements" element={
                            <PageTransition>
                                <div className="p-6 bg-white rounded-xl shadow text-center">🏆 Тут будут достижения</div>
                            </PageTransition>
                        } />
                    </Routes>
                </AnimatePresence>
            </Layout>
        </BrowserRouter>
    )
}
