import React from 'react';

interface AnswerRadioProps {
  options: string[];
  onChange: (v: string) => void;
}

export default class AnswerRadio extends React.Component<AnswerRadioProps> {

  constructor(props: Readonly<AnswerRadioProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div>
        {this.props.options.map(this.renderRadio.bind(this))}
      </div>
    );
  }

  private renderRadio(answer: string, index: number): React.ReactNode {
    return (
      <label key={`label-${index}`}>
        {answer}
        <input type="radio" name="radio-answer" value={answer} onChange={this.handleChange}/>
      </label>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.value);
  }
}
