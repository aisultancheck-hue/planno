import { EmptyState } from '../components/states/EmptyState'
import './TasksPage.css'

export function TasksPage() {
  return (
    <div className="tasks-page">
      <header className="tasks-header">
        <div>
          <p className="page-eyebrow">
            Task management
          </p>

          <h2>All tasks</h2>

          <p className="page-description">
            Search, filter and organize everything in one place.
          </p>
        </div>

        <button
          type="button"
          className="primary-action"
        >
          + New task
        </button>
      </header>

      <section
        className="tasks-toolbar"
        aria-label="Task filters"
      >
        <label className="tasks-search">
          <span className="tasks-search-icon">
            ⌕
          </span>

          <input
            type="search"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
        </label>

        <select
          aria-label="Filter by status"
          defaultValue="all"
        >
          <option value="all">
            All statuses
          </option>
          <option value="todo">To do</option>
          <option value="in-progress">
            In progress
          </option>
          <option value="done">Done</option>
        </select>

        <select
          aria-label="Filter by priority"
          defaultValue="all"
        >
          <option value="all">
            All priorities
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </section>

      <section
        className="desktop-task-table"
        aria-label="Task table"
      >
        <div className="task-table-header">
          <span>Status</span>
          <span>Task</span>
          <span>Priority</span>
          <span>Assignee</span>
          <span>Date</span>
          <span>Deadline</span>
          <span>Updated</span>
        </div>

        <EmptyState
          title="Your task list is empty"
          description="Once task data is connected, your tasks will appear here."
        />
      </section>

      <section className="mobile-task-list">
        <EmptyState
          title="No tasks yet"
          description="Your mobile task cards will appear here."
        />
      </section>
    </div>
  )
}