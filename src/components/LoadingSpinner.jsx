const LoadingSpinner = ({ size = "large", message = "Loading..." }) => {
  const sizeClasses = {
    small: "h-6 w-6",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div
        className={`animate-spin rounded-full border-b-2 border-[var(--light-text)] dark:border-[var(--dark-text)] ${sizeClasses[size]}`}
      ></div>
      <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default LoadingSpinner;
