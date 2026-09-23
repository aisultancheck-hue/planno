export function Topbar() {
  return (
    <header className="topbar">
      <div>
        <p className="topbar-label">Workspace</p>
        <h1 className="topbar-title">Dashboard</h1>
      </div>

      <div className="topbar-actions">
        <button type="button">Search</button>
        <button type="button">Profile</button>
      </div>
    </header>
  )
}