let numbergame = true;

while (numbergame) {
  let secretNumber = Math.floor(Math.random() * 10 + 1);
  let guess = 0;
  let correct = false;

  while (!correct) {
    guess = window.prompt("What is the number?");

    if (guess < number) {
      alert("Guess higher ;)");
    } else if (guess > number) {
      alert("Guess lower ;)");
    } else if (guess == number) {
      correct = true;
      alert("You got it!");
    }
  }

  if (window.prompt("Do you want another game?", "yes") != "yes") {
    play = false;
  }
}