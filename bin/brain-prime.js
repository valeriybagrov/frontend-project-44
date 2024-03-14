#!/usr/bin/env node

import greeting from '../src/cli.js';
import { makeQuestion, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

const getInt = () => {
  const question = getRandomInt(1, 50);
  let correctAnswer = 'no';

  if (question === 2) {
    correctAnswer = 'yes';
    return { question, correctAnswer };
  }

  if (question % 2 !== 0) {
    let upperLimit = Math.ceil(Math.sqrt(question));
    upperLimit = upperLimit % 2 === 0 ? upperLimit - 1 : upperLimit;

    for (let divider = upperLimit; divider > 1; divider -= 2) {
      if (question % divider === 0) {
        return { question, correctAnswer };
      }
    }
    correctAnswer = 'yes';
  }

  return { question, correctAnswer };
};

const callBackQuestion = () => makeQuestion(userName, getInt());

askThreeQuestions(
  callBackQuestion,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  userName,
);
