import React from 'react';
import { QuestionType } from '../components/Question/QuestionType';
import { AppState } from '../store';
import { connect } from 'react-redux';
import ResultRow from '../components/Result/ResultRow';

interface ResultProps {
  answeredQuestions: QuestionType[];
}

class Result extends React.Component<ResultProps> {

  constructor(props: Readonly<ResultProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    const questions = this.props.answeredQuestions;

    return (
      <div>
        {questions.map((q, index) => <ResultRow key={index} question={q} />)}
      </div>
    );
  }
}

export default connect(
  (state: AppState) => ({
    answeredQuestions: state.survey.answeredQuestions,
  }),
  // mapDispatchToProps,
  {
  },
)(Result);
