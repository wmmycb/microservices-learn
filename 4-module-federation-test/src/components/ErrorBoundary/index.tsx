import React from "react";

class ErrorBoundary extends React.Component<any, any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // 捕获到子组件错误
  static getDerivedStateFromError(error: any) {
    console.log("====================================");
    console.log("error");
    console.log("====================================");
    return { error, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
