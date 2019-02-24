import { QuestionMode, QuestionType } from '../components/Question/QuestionType';

export const QUESTION_LIST: QuestionType[] = [
  { title: 'How old are you?', mode: QuestionMode.TEXT },
  { title: 'What is your gender?', mode: QuestionMode.SINGLE_DROP_DOWN, options: ['Male', 'Female', 'Other'] },
  { title: 'Which one do you prefer?', mode: QuestionMode.SINGLE_RADIO, options: ['Mac', 'Windows', 'Linux'] },
];
