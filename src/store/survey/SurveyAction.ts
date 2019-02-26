import { QuestionType } from '../../components/Question/QuestionType';
import { SurveyActionType } from './types';
import { store } from '../index';

class SurveyAction {

  public nextQuestion(action: SurveyActionType): void {
    console.log('>>> SurveyAction.nextQuestion', action);
    store.dispatch(action);
    console.log('>>> SurveyAction.nextQuestion - after dispatch');
  }

  public prevQuestion(): void {
  }
}

const surveyAction = new SurveyAction();
export default surveyAction;
