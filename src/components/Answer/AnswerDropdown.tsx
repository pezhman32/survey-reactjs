import React  from 'react';

interface AnswerDropdownProps {
  options: string[];
  onChange: (v: string) => void;
}

export default class AnswerDropdown extends React.Component<AnswerDropdownProps> {

  constructor(props: Readonly<AnswerDropdownProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option key={0} value={''}>Please select...</option>
          {this.props.options.map((v, i) => <option key={i} value={v}>{v}</option>)}
        </select>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    this.props.onChange(e.target.value);
  }
}
