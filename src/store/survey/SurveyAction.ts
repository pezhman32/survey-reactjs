import { QuestionType } from '../../components/Question/QuestionType';
import { SurveyActionType } from './types';

class SurveyAction {

  public nextQuestion(action: SurveyActionType): void {
    console.log('>>> SurveyAction.nextQuestion', action);
  }

  public prevQuestion(): void {
  }
}

const surveyAction = new SurveyAction();
export default surveyAction;
