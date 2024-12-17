let clicks = 0;
const clickBtn = document.getElementById("click-btn");
const restartBtn = document.getElementById("restart-btn");
const clicksDisplay = document.getElementById("clicks");
const scoreDisplay = document.getElementById("score");
const gameDuration = 10000;

clickBtn.addEventListener("click", () => {
  clicks++;
  clicksDisplay.textContent = `Скільки разів ви натиснули за цю гру: ${clicks}`;
  scoreDisplay.textContent = `Ваші бали: ${clicks}`;
});
restartBtn.addEventListener("click", startGame);
function startGame() {
  clicks = 0;
  scoreDisplay.textContent = `Ваші бали: ${clicks}`;
  clicksDisplay.textContent = `Скільки разів ви натиснули за цю гру: 0`;

  restartBtn.style.display = "none";
  clickBtn.style.display = "block";
  const intervalId = setInterval(() => {
    clearInterval(intervalId);
    clickBtn.style.display = "none";
    restartBtn.style.display = "block";
  }, gameDuration);
}
startGame();
