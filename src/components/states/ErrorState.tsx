type ErrorStateProps = {
  title?: string
  message?: string
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again.',
}: ErrorStateProps) {
  return (
    <div
      className="state-card"
      role="alert"
    >
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  )
}