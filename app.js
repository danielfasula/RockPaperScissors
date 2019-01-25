let choices = ["paper", "rock", "scissors"]

function play(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)]
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      window.alert("You Tie")
    } else if (computerChoice == "paper") {
      window.alert("You Lose")
    } else if (computerChoice == "scissors") {
      window.alert("You Win!")
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "paper") {
      window.alert("You Tie")
    } else if (computerChoice == "scissors") {
      window.alert("You Lose")
    } else if (computerChoice == "rock") {
      window.alert("You Win!")
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
      window.alert("You Tie")
    } else if (computerChoice == "rock") {
      window.alert("You Lose")
    } else if (computerChoice == "paper") {
      window.alert("You Win!")
    }
  }
}