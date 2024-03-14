import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

const getRandomOperator = () => {
  const operSign = ['+', '-', '*'];
  return operSign[getRandomInt(0, 2)];
};

const getExpression = () => {
  const sign = getRandomOperator();
  const question = `${getRandomInt(1, 35)} ${sign} ${getRandomInt(1, 35)}`;
  const correctAnswer = String(eval(question));

  return { question, correctAnswer };
};

export default () => engine(
  'What is the result of the expression?',
  getExpression,
);
