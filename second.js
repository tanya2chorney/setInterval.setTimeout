let currentLight = 0;
const light = document.querySelectorAll(".light");

function resize() {
  light.forEach((light, index) => {
    if (index === currentLight) {
      light.style.width = "40px";
      light.style.height = "40px";
    } else {
      light.style.width = "30px";
      light.style.height = "30px";
    }
  });
  currentLight = (currentLight + 1) % light.length;
}
setInterval(resize, 3000);
