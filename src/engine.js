import readlineSync from 'readline-sync';

export default (messange, func) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(messange);

  // make 3 question and check answer
  for (let _ = 0; _ < 3; _ += 1) {
    const { question, correctAnswer } = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      // user lose
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
      return false;
    }
  }
  // user win
  console.log(`Congratulations, ${userName}!`);
  return true;
};
