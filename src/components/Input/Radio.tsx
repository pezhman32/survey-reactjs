import React from 'react';

interface RadioProps {
  options: string[];
  onChange: (v: string) => void;
  defaultValue?: string;
}

export default class Radio extends React.Component<RadioProps> {

  constructor(props: Readonly<RadioProps>) {
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

  private renderRadio(defaultValue: string, index: number): React.ReactNode {
    const value = this.props.defaultValue || '';

    return (
      <div key={`label-${index}`} className="Radio">
        <label>
          <input type="radio" name="radio" value={defaultValue} onChange={this.handleChange} checked={defaultValue === value} />
          {defaultValue}
        </label>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.value);
  }
}
