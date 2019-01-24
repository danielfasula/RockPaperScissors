let choices = ["paper", "rock", "scissors"]

function play(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)]
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("You Tie")
    } else if (computerChoice == "paper") {
      console.log("You Lose")
    } else if (computerChoice == "scissors") {
      console.log("You Win!")
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "paper") {
      console.log("You Tie")
    } else if (computerChoice == "scissors") {
      console.log("You Lose")
    } else if (computerChoice == "rock") {
      console.log("You Win!")
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
      console.log("You Tie")
    } else if (computerChoice == "rock") {
      console.log("You Lose")
    } else if (computerChoice == "paper") {
      console.log("You Win!")
    }
  }
}