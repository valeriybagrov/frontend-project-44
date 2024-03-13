#!/usr/bin/env node

import greeting from '../src/cli.js';
import { makeQuestion, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

const generateProgression = () => {
  const diff = getRandomInt(1, 10);
  const lengthOfArr = getRandomInt(5, 10);
  const startInt = getRandomInt(1, 50);
  const progression = [startInt];

  for (let i = 0; i < lengthOfArr; i += 1) {
    progression.push(progression[i] + diff);
  }

  const randomIndex = getRandomInt(0, lengthOfArr - 1);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const progressionToStr = progression.map(String);
  const question = progressionToStr.join(' ');

  return { question, correctAnswer };
};

const callBackQuestion = () => makeQuestion(userName, generateProgression());

askThreeQuestions(
  callBackQuestion,
  'What number is missing in the progression?',
  userName,
);
