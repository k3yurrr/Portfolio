import { Component } from "react";
import { trackEvent } from "../utils/analytics";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Track error in analytics
    trackEvent("error_boundary", "error", error.message);

    // Log to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--light-background)] dark:bg-[var(--dark-background)] text-[var(--light-text)] dark:text-[var(--dark-text)] p-4">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We encountered an unexpected error. Don't worry, it's not your
              fault!
            </p>
            <div className="space-x-4">
              <button
                onClick={this.handleReload}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-lg transition-colors"
              >
                Go Back
              </button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left text-sm">
                <summary className="cursor-pointer text-red-600 dark:text-red-400">
                  Show Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-red-50 dark:bg-red-900/20 rounded overflow-auto text-xs">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
