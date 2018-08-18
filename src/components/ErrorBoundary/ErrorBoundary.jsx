import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ width: '30%' }} >
          <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" alt="an error" />
          <p>Sorry Something went wrong!!!</p>
          <p>Error catched by error boundary of react 16</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
