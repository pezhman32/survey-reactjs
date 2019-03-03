import React from 'react';
import './Input.css';

interface TextProps {
  onChange: (v: string) => void;
  defaultValue?: string;
}

export default class Text extends React.Component<TextProps> {

  constructor(props: Readonly<TextProps>) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render(): React.ReactNode {
    const value = this.props.defaultValue || '';

    return (
      <div>
        <input
          type="text"
          onBlur={this.handleBlur}
          defaultValue={value}
          className="Text" />
      </div>
    );
  }

  private handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.value);
  }
}
