import React from 'react';
import { AnswerType } from './AnswerType';

interface AnswerRadioProps {
  options: string[];
  onChange: (v: string) => void;
  answer?: AnswerType;
}

export default class AnswerRadio extends React.Component<AnswerRadioProps> {

  constructor(props: Readonly<AnswerRadioProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderRadio = this.renderRadio.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div>
        {this.props.options.map(this.renderRadio)}
      </div>
    );
  }

  private renderRadio(answer: string, index: number): React.ReactNode {
    const value = this.props.answer ? this.props.answer.text : '';

    return (
      <div className="Answer-radio">
        <label key={`label-${index}`}>
          <input type="radio" name="radio-answer" value={answer} onChange={this.handleChange} checked={answer === value} />
          {answer}
        </label>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.value);
  }
}
