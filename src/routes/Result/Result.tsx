import React from 'react';
import { QuestionType } from '../../components/Question/QuestionType';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import ResultRow from '../../components/Result/ResultRow';
import surveyAction from '../../store/survey/SurveyAction';

interface ResultProps {
  answeredQuestions: QuestionType[];
  reset: typeof surveyAction.reset;
}

class Result extends React.Component<ResultProps> {

  constructor(props: Readonly<ResultProps>) {
    super(props);
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
  }

  public render(): React.ReactNode {
    const questions = this.props.answeredQuestions;

    return (
      <div>
        <h1>Result Overview - {'{Awesome Survey}'}</h1>
        {questions.map((q, index) => <ResultRow key={index} number={index + 1} question={q} />)}

        <div className="ResultRow-goodbye">
          Hope you enjoyed this fake survey :)
          <br />
          <a href="#" onClick={this.handleHomePageClick}>Back to home page</a>
        </div>
      </div>
    );
  }

  private handleHomePageClick(): void {
    this.props.reset();
  }
}

export default connect(
  (state: AppState) => ({
    answeredQuestions: state.survey.answeredQuestions,
  }),
  // mapDispatchToProps,
  {
    reset: surveyAction.reset,
  },
)(Result);
