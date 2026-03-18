import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-10">
          <div className="flex flex-col items-center gap-6">
            <p className="text-caption tracking-[0.5em] uppercase text-orea-champagne font-medium">Error</p>
            <h1 className="font-serif text-h2 font-light text-orea-dark tracking-wide uppercase">
              Something Went Wrong
            </h1>
            <div className="w-12 h-px bg-orea-champagne/60" />
            <p className="text-body font-light text-orea-taupe tracking-wide max-w-sm leading-relaxed">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="text-micro font-bold uppercase tracking-widest text-orea-dark border-b border-orea-dark pb-1 hover:text-orea-gold-a hover:border-orea-gold-a transition-colors"
          >
            Return Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
