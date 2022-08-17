let models = document.querySelector(".models");
let text = document.querySelector(".text");
let imgCont = document.querySelectorAll(".smImg-cont");
let logo = document.querySelector(".logo");
const boxs = document.querySelectorAll(".box");
const buttons = document.querySelectorAll(".button");
const modelh2 = document.querySelectorAll(".info h2");
const icon = document.querySelector(".icon-2");
function activeModel() {
  text.classList.toggle("active");
  models.classList.toggle("active");
  icon.classList.toggle("active");
}
text.addEventListener("click", activeModel);
function activeCar() {
  imgCont.forEach((img) => img.classList.remove("active"));
  this.classList.add("active");
  logo.style.setProperty("color", "#000");
  logo.style.setProperty("--beforewidth", "0%");
  setTimeout((e) => {
    logo.style.setProperty("--trans", "0.5s");
    logo.style.setProperty("--beforewidth", "100%");
  }, 100);
  logo.style.setProperty("--trans", "0s");
  logo.style.setProperty("--beforeclr", this.style.getPropertyValue("--clr"));

  boxs.forEach((box, index) => {
    box.style.setProperty("opacity", "0");
    if (index == this.style.getPropertyValue("--num")) {
      box.style.setProperty("opacity", "1");
      box.style.setProperty("visibility", "visible");
    }
  });
  buttons.forEach((button) => {
    button.style.backgroundColor = this.style.getPropertyValue("--clr");
  });
  modelh2.forEach((h2, index) => {
    if (this.style.getPropertyValue("--num") == index) {
      h2.style.setProperty("animation", "widthh 2s linear 1 forwards");
    } else {
      h2.style.setProperty("animation", "none");
    }
  });
}
imgCont.forEach((img) => img.addEventListener("click", activeCar));
