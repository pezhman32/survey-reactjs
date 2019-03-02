import React  from 'react';
import { AnswerType } from './AnswerType';
import './Answer.css';

interface AnswerDropdownProps {
  options: string[];
  onChange: (v: string) => void;
  answer?: AnswerType;
}

export default class AnswerDropdown extends React.Component<AnswerDropdownProps> {

  constructor(props: Readonly<AnswerDropdownProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): React.ReactNode {
    const options = this.props.options;
    const value = this.props.answer ? this.props.answer.text : '';

    return (
      <div>
        <select onChange={this.handleChange} defaultValue={value} className="Answer-dropdown">
          <option key={0} value={''}>Please select...</option>
          {options.map((v, i) => <option key={i} value={v}>{v}</option>)}
        </select>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    this.props.onChange(e.target.value);
  }
}
