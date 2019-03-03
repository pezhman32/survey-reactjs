import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
  max: number;
}

export default class ProgressBar extends React.Component<ProgressBarProps> {

  public render() {
    const progress = this.props.progress * 100 / this.props.max;

    return (
      <div>
        <div className="ProgressBar-container">
          <div
            className="ProgressBar-progress"
            style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }
}
