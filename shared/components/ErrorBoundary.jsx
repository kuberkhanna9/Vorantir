import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Graceful warning logged cleanly to the production console
    console.warn("[Vorantir Monitor] Intercepted runtime exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Return a premium, silent fallback that matches the luxury brand vibe 
      return this.props.fallback || (
        <div style={{ padding: "60px 40px", textAlign: "center", opacity: 0.7, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "11px", color: "inherit" }}>
            System telemetry active. Content temporarily offline.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
