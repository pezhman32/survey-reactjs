import { QuestionMode, QuestionType } from '../components/Question/QuestionType';

export const QUESTION_LIST: QuestionType[] = [
  { title: 'What is your name?', mode: QuestionMode.TEXT },
  { title: 'What is your gender?', mode: QuestionMode.SINGLE_DROP_DOWN, options: ['Male', 'Female', 'Other'] },
  { title: 'Is this survey well implemented?', mode: QuestionMode.SINGLE_RADIO, options: ['Yes', 'Sure', 'This Is Awesome'] },
  { title: 'Which one do you prefer?', mode: QuestionMode.SINGLE_RADIO, options: ['Mac', 'Windows', 'Linux'] },
];
