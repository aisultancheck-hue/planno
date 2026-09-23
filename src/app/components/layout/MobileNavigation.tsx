import { NavLink } from 'react-router-dom'

const mobileNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Kanban', to: '/kanban' },
  { label: 'Calendar', to: '/calendar' },
]

export function MobileNavigation() {
  return (
    <nav
      className="mobile-navigation"
      aria-label="Mobile navigation"
    >
      {mobileNavigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? 'mobile-navigation-item mobile-navigation-item-active'
              : 'mobile-navigation-item'
          }
        >
          {item.label}
        </NavLink>
      ))}

      <button
        type="button"
        className="mobile-navigation-item"
      >
        More
      </button>
    </nav>
  )
}