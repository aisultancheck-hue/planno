import { NavLink } from 'react-router-dom'

const mainNavigation = [
  { label: 'Главная', to: '/' },
  { label: 'Kanban', to: '/kanban' },
  { label: 'Таблица', to: '/tasks' },
  { label: 'Календарь', to: '/calendar' },
]

const secondaryNavigation = [
  { label: 'Шаблоны', to: '/templates' },
  { label: 'Архив', to: '/archive' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Planno</div>

      <nav aria-label="Main navigation">
        <ul className="sidebar-list">
          {mainNavigation.map((item) => (
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

      <nav aria-label="Secondary navigation">
        <ul className="sidebar-list">
          {secondaryNavigation.map((item) => (
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

      <nav
        aria-label="Account navigation"
        className="sidebar-bottom"
      >
        <ul className="sidebar-list">
          <li>
            <button type="button" className="sidebar-link">
              Настройки
            </button>
          </li>

          <li>
            <button type="button" className="sidebar-link">
              Профиль
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}