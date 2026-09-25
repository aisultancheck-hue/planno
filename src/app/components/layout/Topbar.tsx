import { useLocation, useNavigate } from 'react-router-dom'

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/tasks': 'Tasks',
  '/kanban': 'Kanban',
  '/calendar': 'Calendar',
  '/templates': 'Templates',
  '/archive': 'Archive',
  '/settings': 'Settings',
  '/profile': 'Profile',
}

export function Topbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const pageTitle =
    pageTitles[location.pathname] ?? 'Planno'

  function openTasks() {
    navigate('/tasks')
  }

  function openProfile() {
    navigate('/profile')
  }

  return (
    <header className="topbar">
      <div>
        <p className="topbar-label">
          Workspace
        </p>

        <h1 className="topbar-title">
          {pageTitle}
        </h1>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          onClick={openTasks}
          aria-label="Open task search"
        >
          Search
        </button>

        <button
          type="button"
          onClick={openProfile}
          aria-label="Open profile"
        >
          Profile
        </button>
      </div>
    </header>
  )
}