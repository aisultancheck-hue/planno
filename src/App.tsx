import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './app/components/layout/AppLayout'
import { DashboardPage } from './pages/DashboardPage'
import { TasksPage } from './pages/TasksPage'
import { KanbanPage } from './pages/KanbanPage'
import { CalendarPage } from './pages/CalendarPage'
import './App.css'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </AppLayout>
  )
}

export default App