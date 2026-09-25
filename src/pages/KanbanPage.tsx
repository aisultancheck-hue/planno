import { EmptyState } from '../components/states/EmptyState'
import './KanbanPage.css'

export function KanbanPage() {
  return (
    <div className="kanban-page">
      <header className="kanban-header">
        <div>
          <p className="kanban-eyebrow">Tasks</p>
          <h2>Kanban</h2>
          <p className="kanban-description">
            Organize your tasks by status.
          </p>
        </div>

        <button
          type="button"
          className="kanban-create-button"
        >
          + New task
        </button>
      </header>

      <div className="kanban-board">
        <section className="kanban-column">
          <header className="kanban-column-header">
            <h3>To Do</h3>
            <span className="kanban-count">0</span>
          </header>

          <div className="kanban-column-content">
            <EmptyState
              title="No tasks"
              description="Tasks waiting to be started will appear here."
            />
          </div>
        </section>

        <section className="kanban-column">
          <header className="kanban-column-header">
            <h3>In Progress</h3>
            <span className="kanban-count">0</span>
          </header>

          <div className="kanban-column-content">
            <EmptyState
              title="No tasks"
              description="Tasks currently being worked on will appear here."
            />
          </div>
        </section>

        <section className="kanban-column">
          <header className="kanban-column-header">
            <h3>Done</h3>
            <span className="kanban-count">0</span>
          </header>

          <div className="kanban-column-content">
            <EmptyState
              title="No tasks"
              description="Completed tasks will appear here."
            />
          </div>
        </section>
      </div>
    </div>
  )
}