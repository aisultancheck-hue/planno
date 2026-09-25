import { EmptyState } from '../components/states/EmptyState'
import './TasksPage.css'

export function TasksPage() {
  return (
    <div className="tasks-page">
      <header className="tasks-header">
        <div>
          <p className="tasks-eyebrow">Tasks</p>

          <h2>Task Table</h2>

          <p className="tasks-description">
            Search, filter and review your tasks.
          </p>
        </div>

        <button
          type="button"
          className="tasks-create-button"
        >
          + New task
        </button>
      </header>

      <section
        className="tasks-toolbar"
        aria-label="Task filters"
      >
        <label className="tasks-search">
          <span className="sr-only">
            Search tasks
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

          <option value="todo">
            To Do
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>
        </select>

        <select
          aria-label="Filter by priority"
          defaultValue="all"
        >
          <option value="all">
            All priorities
          </option>

          <option value="high">
            High
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="low">
            Low
          </option>
        </select>
      </section>

      <section
        className="desktop-task-table"
        aria-label="Task table"
      >
        <div
          className="task-table-header"
          role="row"
        >
          <span>Status</span>
          <span>Title</span>
          <span>Priority</span>
          <span>Assignee</span>
          <span>Date</span>
          <span>Deadline</span>
          <span>Updated</span>
        </div>

        <EmptyState
          title="No tasks yet"
          description="Tasks will appear here once task data is connected."
        />
      </section>

      <section className="mobile-task-list">
        <EmptyState
          title="No tasks yet"
          description="On mobile, tasks will appear as compact cards instead of a wide table."
        />
      </section>
    </div>
  )
}