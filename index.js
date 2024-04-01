import hiraganaCollection from "./helpers/hiragana_collection.js";

const length = hiraganaCollection.length;
const text = hiraganaCollection[0][0];

const textContainer = document.getElementById("textContainer");
const answerContainer = document.getElementById("answerContainer");
textContainer.textContent = text;

let randomNumber;

function generateRandomHiragana() {
  randomNumber = Math.floor(Math.random() * length);
  console.log(randomNumber);
  textContainer.textContent = hiraganaCollection[randomNumber][1];
}
const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", generateRandomHiragana);

function getAnswer() {
  answerContainer.textContent = hiraganaCollection[randomNumber][0];
}
const answerButton = document.getElementById("answerButton");
answerButton.addEventListener("click", getAnswer);
