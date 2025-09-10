import { AddTaskForm } from "./features/tasks/AddTaskForm.tsx";
import './App.css'

function App() {
  return (
      <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-purple-200 to-pink-200">
          <h1 className="text-3xl font-bold mb-4">🎮 TaskQuest</h1>
          <AddTaskForm />
      </div>
  )
}

export default App
