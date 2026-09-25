type EmptyStateProps = {
  title: string
  description?: string
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="state-card">
      <h3>{title}</h3>

      {description ? (
        <p>{description}</p>
      ) : null}
    </div>
  )
}