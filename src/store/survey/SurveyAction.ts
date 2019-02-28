import { SurveyActionType } from './types';
import { history } from '../../Routes';

class SurveyAction {

  public nextQuestion(action: SurveyActionType): SurveyActionType {
    history.push(`/survey/questions/${action.toIndex}`);
    return action;
  }

  public prevQuestion(): void {
  }
}

const surveyAction = new SurveyAction();
export default surveyAction;
