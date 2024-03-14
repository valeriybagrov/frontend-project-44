import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

const getRandomOperator = () => {
  const operSign = ['+', '-', '*'];
  return operSign[getRandomInt(0, 2)];
};

const calculate = (first, second, operand) => {
  switch (operand) {
    case '+': return String(first + second);
    case '-': return String(first - second);
    case '*': return String(first * second);
    default: return false;
  }
};

const getExpression = () => {
  const sign = getRandomOperator();
  const firstInt = getRandomInt(1, 35);
  const secondInt = getRandomInt(1, 35);
  const question = `${firstInt} ${sign} ${secondInt}`;
  const correctAnswer = calculate(firstInt, secondInt, sign);

  return { question, correctAnswer };
};

export default () => engine(
  'What is the result of the expression?',
  getExpression,
);
