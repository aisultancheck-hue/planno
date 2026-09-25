import { EmptyState } from '../components/states/EmptyState'
import './KanbanPage.css'

const columns = [
  {
    title: 'To do',
    count: 0,
    accent: 'todo',
    description:
      'Tasks waiting to be started will appear here.',
  },
  {
    title: 'In progress',
    count: 0,
    accent: 'progress',
    description:
      'Tasks currently being worked on will appear here.',
  },
  {
    title: 'Done',
    count: 0,
    accent: 'done',
    description:
      'Completed tasks will appear here.',
  },
]

export function KanbanPage() {
  return (
    <div className="kanban-page">
      <header className="kanban-header">
        <div>
          <p className="page-eyebrow">
            Workflow
          </p>

          <h2>Kanban board</h2>

          <p className="page-description">
            See the status of your work at a glance.
          </p>
        </div>

        <div className="kanban-header-actions">
          <button
            type="button"
            className="secondary-action"
          >
            Filter
          </button>

          <button
            type="button"
            className="primary-action"
          >
            + New task
          </button>
        </div>
      </header>

      <div className="kanban-board">
        {columns.map((column) => (
          <section
            key={column.title}
            className="kanban-column"
          >
            <header className="kanban-column-header">
              <div className="kanban-column-title">
                <span
                  className={`kanban-dot kanban-dot-${column.accent}`}
                />

                <h3>{column.title}</h3>
              </div>

              <span className="kanban-count">
                {column.count}
              </span>
            </header>

            <div className="kanban-column-content">
              <EmptyState
                title="Nothing here yet"
                description={column.description}
              />
            </div>

            <button
              type="button"
              className="kanban-add-button"
            >
              + Add task
            </button>
          </section>
        ))}
      </div>
    </div>
  )
}