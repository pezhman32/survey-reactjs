import React from 'react';
import { RouteComponentProps } from 'react-router';
import Question from '../components/Question/Question';
import { QUESTION_LIST } from '../constants/QuestionList';
import { QuestionType } from '../components/Question/QuestionType';

export default class Survey extends React.Component<RouteComponentProps<any>> {

  constructor(props: Readonly<RouteComponentProps<any>>) {
    super(props);
    this.handleResultClick = this.handleResultClick.bind(this);
  }

  public render(): React.ReactNode {
    const hasPrev = this.getCurrentIndex() !== 1;
    const hasNext = this.getCurrentIndex() !== QUESTION_LIST.length;

    return (
      <div>
        Question list...
        <Question question={this.getSelectedQuestion()} />

        {hasPrev ? <button onClick={this.handleNavigation.bind(this, -1)}>Prev.</button> : ''}
        {hasNext ? <button onClick={this.handleNavigation.bind(this, 1)}>Next</button> : ''}
        {!hasNext ? <button onClick={this.handleResultClick}>See overview</button> : ''}
      </div>
    );
  }

  private getCurrentIndex(): number {
    return Number.parseInt(this.props.match.params['index']);
  }

  private getSelectedQuestion(): QuestionType {
    const index: number = this.getCurrentIndex() - 1;
    // TODO check if index is valid...

    return QUESTION_LIST[index];
  }

  private handleNavigation(to: 1 | -1): void {
    const index = this.getCurrentIndex() + to;
    this.props.history.push(`/survey/questions/${index}`);
  }

  private handleResultClick(): void {
    // TODO navigate to results page
  }
}
