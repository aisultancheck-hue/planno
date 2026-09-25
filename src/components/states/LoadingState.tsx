type LoadingStateProps = {
  message?: string
}

export function LoadingState({
  message = 'Loading...',
}: LoadingStateProps) {
  return (
    <div
      className="state-card"
      role="status"
      aria-live="polite"
    >
      <div
        className="state-spinner"
        aria-hidden="true"
      />

      <p>{message}</p>
    </div>
  )
}