let updates = 0;
const maxMessages = 5;
const messageEl = document.getElementById("container-message");

const intervalId = setInterval(function () {
  updates++;
  const message = document.createElement("p");
  message.textContent = `Повідомлення ${updates}`;

  messageEl.appendChild(message);

  if (updates >= maxMessages) {
    clearInterval(intervalId);
  }
}, 1000);
