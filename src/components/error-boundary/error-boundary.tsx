import { Component, PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  errorView?: ReactNode;
  onCatch?: (error: any) => void;
}>;

/**
 * React Error Handler
 * https://ru.reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends Component<Props> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error) {
    const { onCatch = console.error } = this.props;
    onCatch(error);
    this.setState({ hasError: true });
  }

  render() {
    const { children, errorView } = this.props;
    const { hasError } = this.state;
    return hasError ? errorView || null : children;
  }
}
