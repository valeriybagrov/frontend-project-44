#!/usr/bin/env node

import greeting from '../src/cli.js';
import { makeQuestion, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

function getInt() {
  const question = getRandomInt(1, 50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
}

const callBackQuestion = () => makeQuestion(userName, getInt());

askThreeQuestions(
  callBackQuestion,
  'Answer "yes" if the number is even, otherwise answer "no".',
  userName,
);
