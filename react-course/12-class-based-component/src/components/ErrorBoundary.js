import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasErrorOrAnyNameThatYouWant: false };
  }

  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasErrorOrAnyNameThatYouWant: true });
  }

  render() {
    if (this.state.hasErrorOrAnyNameThatYouWant) {
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary