import { QuestionType } from '../../components/Question/QuestionType';
import { Action } from 'redux';

export interface SurveyStateType {
  finished: boolean;
  currentIndex: number;
  answeredQuestions: QuestionType[];
}

export enum SurveyActionEnumType {
  SAVE_ANSWER,
  NEXT,
  PREVIOUS,
  FINISH,
  RESET,
}

export interface SurveyActionType extends Action {
  currentQuestion?: QuestionType;
  toIndex: number;
  type: SurveyActionEnumType;
}
