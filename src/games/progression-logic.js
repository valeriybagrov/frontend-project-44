import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

const generateProgression = () => {
  const diff = getRandomInt(1, 10);
  const lengthOfArr = getRandomInt(5, 10);
  const startInt = getRandomInt(1, 50);
  const progression = [startInt];

  for (let i = 0; i < lengthOfArr; i += 1) {
    progression.push(progression[i] + diff);
  }

  const randomIndex = getRandomInt(0, lengthOfArr - 1);
  // remember value
  const correctAnswer = String(progression[randomIndex]);
  // change substituting value
  progression[randomIndex] = '..';
  const progressionToStr = progression.map(String);
  const question = progressionToStr.join(' ');

  return { question, correctAnswer };
};

export default () => engine(
  'What number is missing in the progression?',
  generateProgression,
);
