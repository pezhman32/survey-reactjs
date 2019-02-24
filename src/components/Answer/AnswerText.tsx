import React from 'react';

interface AnswerTextProps {
  onChange: (v: string) => void;
}

export default class AnswerText extends React.Component<AnswerTextProps> {

  constructor(props: Readonly<AnswerTextProps>) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <textarea onBlur={this.handleBlur}/>
      </div>
    );
  }

  private handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void {
    this.props.onChange(e.target.value);
  }
}
