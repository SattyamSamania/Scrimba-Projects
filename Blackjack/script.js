
let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let cards = [firstCard, secondCard]


function getRandomNumber() {
  return Math.random(Math.floor() * 13) + 1;
}


function newCard() {
  let card = 5;
  sum += card;


  renderGame();

}
function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message;

}

