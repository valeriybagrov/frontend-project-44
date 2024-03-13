#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { checkAnswer, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

const findGcd = (...arrgs) => {
  const array = [...arrgs];
  while (array[0] !== array[1]) {
    array.sort((a, b) => a - b);
    array[1] -= array[0];
  }
  return array[0];
};

const makeQuestion = () => {
  const firstInt = getRandomInt(1, 50);
  const secondInt = getRandomInt(1, 50);
  console.log(`Question: ${firstInt} ${secondInt}`);

  const answer = readlineSync.question('Your answer: ');
  const corectAnswer = String(findGcd(firstInt, secondInt));
  return checkAnswer(corectAnswer, answer, userName);
};

askThreeQuestions(makeQuestion, 'Find the greatest common divisor of given numbers.', userName);
