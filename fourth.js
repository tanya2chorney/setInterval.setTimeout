document
  .getElementById("time-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const secondsInput = document.getElementById("seconds");
    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
      alert("Будь ласка, введіть коректну кількість секунд.");
      return;
    }

    const timerDisplay = document.getElementById("timer");
    const messageDisplay = document.getElementById("message");

    timerDisplay.textContent = `Час до повідомлення: ${seconds} секунд`;
    messageDisplay.textContent = "";

    let remainingTime = seconds;

    const intervalId = setInterval(() => {
      remainingTime--;
      timerDisplay.textContent = `Час до повідомлення: ${remainingTime} секунд`;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        messageDisplay.textContent = "Час вийшов!!!";
        timerDisplay.textContent = "";
      }
    }, 1000);
  });
