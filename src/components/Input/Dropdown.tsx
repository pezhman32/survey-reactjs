import React from 'react';
import './Input.css';

interface DropdownProps {
  options: string[];
  onChange: (v: string) => void;
  defaultValue?: string;
}

export default class Dropdown extends React.Component<DropdownProps> {

  constructor(props: Readonly<DropdownProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): React.ReactNode {
    const options = this.props.options;
    const value = this.props.defaultValue || '';

    return (
      <div>
        <select
          onChange={this.handleChange}
          defaultValue={value}
          className="Dropdown">

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
