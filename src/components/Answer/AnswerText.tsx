import React from 'react';
import { AnswerType } from './AnswerType';
import './Answer.css';

interface AnswerTextProps {
  onChange: (v: string) => void;
  answer?: AnswerType;
}

export default class AnswerText extends React.Component<AnswerTextProps> {

  constructor(props: Readonly<AnswerTextProps>) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render(): React.ReactNode {
    const value = this.props.answer ? this.props.answer.text : '';

    return (
      <div>
        <textarea onBlur={this.handleBlur} defaultValue={value} className="Answer-textarea"/>
      </div>
    );
  }

  private handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void {
    this.props.onChange(e.target.value);
  }
}
