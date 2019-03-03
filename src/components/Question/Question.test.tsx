import Question from './Question';
import { QuestionMode, QuestionType } from './QuestionType';
import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { AnswerType } from './AnswerType';

let container: HTMLDivElement;
let onAnswerChecked = false;
const onAnswer = (v:string) => {
  expect(v).toBe('answer#2');
  onAnswerChecked = true;
};

beforeEach(() => {
  onAnswerChecked = false;
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

it('should render text input with default value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.TEXT };
  const answer: AnswerType = { text: 'answer#1' };

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('input');
  expect(input).toBeDefined();
  expect(input.getAttribute('type')).toBe('text');
  expect(input.value).toBe(answer.text);

  act(() => {
    input.value = 'answer#2';
    input.dispatchEvent(new FocusEvent('blur'));
  });

  expect(onAnswerChecked).toBe(true);
});

it('should render textarea with default value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.TEXTAREA };
  const answer: AnswerType = { text: 'answer#1' };

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('textarea');
  expect(input).toBeDefined();
  expect(input.value).toBe(answer.text);

  act(() => {
    input.value = 'answer#2';
    input.dispatchEvent(new FocusEvent('blur'));
  });

  expect(onAnswerChecked).toBe(true);
});

it('should render dropdown with checked value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.SINGLE_DROP_DOWN, options: ['answer#2', 'answer#1'] };
  const answer: AnswerType = { text: 'answer#1' };

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('select');
  expect(input).toBeDefined();

  const select: HTMLSelectElement | null = container.querySelector('select');
  expect(select).toBeDefined();
  expect(select.value).toBe(answer.text);

  // click on answer#2
  const answer2Option: HTMLOptionElement = container.querySelector('select option[value="answer#2"]');
  act(() => {
    answer2Option.selected = true;
    Simulate.change(select || new Element());
  });

  expect(onAnswerChecked).toBe(true);
});

it('should render radio with checked value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.SINGLE_RADIO, options: ['answer#2', 'answer#1'] };
  const answer: AnswerType = { text: 'answer#1' };
  const onAnswer = (v:string) => {};

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const option: HTMLInputElement | null = container.querySelector('input:checked');
  expect(option).toBeDefined();
  expect(option.getAttribute('type')).toBe('radio');
  expect(option.value).toBe(answer.text);
});
