const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

let numberGame = true
let secretNumber = 5


async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let randomNumber = await ask("What is the secret number?");

  let max = 100
  let min = 1
  let attempt = min+Math.floor(Math.random() * max - min);
  let yesNo = await ask("is your number" + attempt)

  while (numberGame) {
    
  if (attempt < randomNumber) {
   console.log("Guess higher ;)");
   min = attempt
   attempt= min+Math.floor(Math.random() * max - min);

   yesNo = await ask ("Is your number" + attempt)

  } else if (attempt > randomNumber) {
    console.log("Guess lower ;)");

    max = attempt
    attempt = min+Math.floor(Math.random() * max - min);
    yesNo = await ask ("Is your number" + attempt)
  } else if (attempt === randomNumber) {
    numberGame = false;
    console.log("You got it!");
  }
  }
  
  console.log('You entered: ' + randomNumber);

  process.exit();
}

