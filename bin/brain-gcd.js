#!/usr/bin/env node

import greeting from '../src/cli.js';
import { makeQuestion, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

const findGcd = (...arrgs) => {
  const array = [...arrgs];
  while (array[0] !== array[1]) {
    array.sort((a, b) => a - b);
    array[1] -= array[0];
  }
  return array[0];
};

const generatePareOfNumber = () => {
  const firstInt = getRandomInt(1, 50);
  const secondInt = getRandomInt(1, 50);
  const question = `${firstInt} ${secondInt}`;
  const correctAnswer = String(findGcd(firstInt, secondInt));
  return { question, correctAnswer };
};

const callBackQuestion = () => makeQuestion(userName, generatePareOfNumber());

askThreeQuestions(
  callBackQuestion,
  'Find the greatest common divisor of given numbers.',
  userName,
);
