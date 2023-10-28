const startMenu = document.getElementById("start");
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  startMenu.style.transform = "translateY(-100%)";
});

let inputName;

const submitBtn = document.getElementById("name");
const initialMenu = document.getElementById("initial");
const playerName = document.getElementById("playerName");

submitBtn.addEventListener("click", (e) => {
  let input = document.querySelector("input");
  inputName = input.value;
  if (inputName.length !== 0) {
    playerName.innerHTML = inputName;
    initialMenu.style.opacity = "0";
    initialMenu.style.zIndex = "-1";
  } else {
    alert("name shouldn't be empty !");
  }
});

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button.choice");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "you won !";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you won !";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost";
  } else {
    result = "you won !";
  }
  let screen = document.getElementById("screen");
  resultDisplay.innerHTML = result;
  if (result === "you won !") {
    screen.style.backgroundColor = "#14E400";
  } else if (result === "you lost") {
    screen.style.backgroundColor = "#EE4848";
  } else {
    screen.style.backgroundColor = "#A4A4A4";
  }
}
