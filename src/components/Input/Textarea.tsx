import React from 'react';
import './Input.css';

interface TextareaProps {
  onChange: (v: string) => void;
  defaultValue?: string;
}

export default class Textarea extends React.Component<TextareaProps> {

  constructor(props: Readonly<TextareaProps>) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render(): React.ReactNode {
    const value = this.props.defaultValue || '';

    return (
      <div>
        <textarea
          onBlur={this.handleBlur}
          defaultValue={value}
          className="Textarea" />
      </div>
    );
  }

  private handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void {
    this.props.onChange(e.target.value);
  }
}
