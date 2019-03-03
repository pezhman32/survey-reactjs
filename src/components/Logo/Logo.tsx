import React from 'react';
import './Logo.css';

interface LogoProps {
  style?: object;
}

export default class Logo extends React.Component<LogoProps> {

  render(): React.ReactNode {
    return (
      <span className="Logo" style={this.props.style}>
        Awesöme Survey
      </span>
    );
  }
}
