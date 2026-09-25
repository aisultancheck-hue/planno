import { NavLink } from 'react-router-dom'

const mainNavigation = [
  {
    label: 'Главная',
    to: '/',
  },
  {
    label: 'Kanban',
    to: '/kanban',
  },
  {
    label: 'Таблица',
    to: '/tasks',
  },
  {
    label: 'Календарь',
    to: '/calendar',
  },
  {
    label: 'Шаблоны',
    to: '/templates',
  },
  {
    label: 'Архив',
    to: '/archive',
  },
]

const accountNavigation = [
  {
    label: 'Настройки',
    to: '/settings',
  },
  {
    label: 'Профиль',
    to: '/profile',
  },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Planno
      </div>

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
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="sidebar-bottom"
        aria-label="Account navigation"
      >
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
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}