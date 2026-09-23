const todayTasks = [
  {
    id: 1,
    title: 'Prepare dashboard layout',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Check mobile navigation',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Review responsive layout',
    status: 'Done',
    priority: 'Low',
  },
]

export function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">Overview</p>
          <h2>Dashboard</h2>
          <p className="dashboard-description">
            Track your progress and tasks for today.
          </p>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card progress-card">
          <div className="dashboard-card-header">
            <div>
              <p className="dashboard-card-label">Today&apos;s Progress</p>
              <h3>3 of 5 tasks</h3>
            </div>

            <span className="progress-percentage">60%</span>
          </div>

          <div
            className="progress-track"
            role="progressbar"
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Today's task progress"
          >
            <div className="progress-value" />
          </div>

          <p className="dashboard-muted">
            2 tasks remaining for today.
          </p>
        </article>

        <article className="dashboard-card statistics-card">
          <div className="dashboard-card-header">
            <div>
              <p className="dashboard-card-label">
                Monthly Statistics
              </p>
              <h3>September</h3>
            </div>
          </div>

          <div className="statistics-grid">
            <div className="stat-item">
              <strong>24</strong>
              <span>Completed</span>
            </div>

            <div className="stat-item">
              <strong>8</strong>
              <span>In Progress</span>
            </div>

            <div className="stat-item">
              <strong>5</strong>
              <span>To Do</span>
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard-card today-tasks-card">
        <div className="dashboard-card-header">
          <div>
            <p className="dashboard-card-label">Today&apos;s Tasks</p>
            <h3>Tasks for today</h3>
          </div>

          <button type="button" className="secondary-button">
            View all
          </button>
        </div>

        <div className="today-task-list">
          {todayTasks.map((task) => (
            <article key={task.id} className="today-task-item">
              <div>
                <h4>{task.title}</h4>
                <p>{task.status}</p>
              </div>

              <span
                className={`priority-badge priority-${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}