import { NavLink } from 'react-router-dom'

const mainNavigation = [
  { label: 'Overview', shortLabel: 'O', to: '/' },
  { label: 'Kanban', shortLabel: 'K', to: '/kanban' },
  { label: 'Tasks', shortLabel: 'T', to: '/tasks' },
  { label: 'Calendar', shortLabel: 'C', to: '/calendar' },
  { label: 'Templates', shortLabel: 'M', to: '/templates' },
  { label: 'Archive', shortLabel: 'A', to: '/archive' },
]

const accountNavigation = [
  { label: 'Settings', shortLabel: 'S', to: '/settings' },
  { label: 'Profile', shortLabel: 'P', to: '/profile' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">P</div>

        <div>
          <p className="sidebar-brand-name">Planno</p>
          <p className="sidebar-brand-caption">Personal workspace</p>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-section-title">Workspace</p>

        <nav aria-label="Main navigation">
          <ul className="sidebar-list">
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'sidebar-link sidebar-link-active'
                      : 'sidebar-link'
                  }
                >
                  <span className="sidebar-link-icon">
                    {item.shortLabel}
                  </span>

                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <p className="sidebar-section-title">Account</p>

        <nav aria-label="Account navigation">
          <ul className="sidebar-list">
            {accountNavigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'sidebar-link sidebar-link-active'
                      : 'sidebar-link'
                  }
                >
                  <span className="sidebar-link-icon">
                    {item.shortLabel}
                  </span>

                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-user">
          <div className="sidebar-avatar">ZH</div>

          <div className="sidebar-user-text">
            <strong>Zhazira</strong>
            <span>Student</span>
          </div>
        </div>
      </div>
    </aside>
  )
}