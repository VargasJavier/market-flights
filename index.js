let buttons = document.getElementsByClassName("content__country");
let buttonsLine = document.getElementsByClassName("line__country");

console.log(buttonsLine);

Object.keys(buttons).forEach((button) => {
  buttons[button].addEventListener("click", () => {
    Object.keys(buttonsLine).forEach((button) => {
      buttonsLine[button].classList.remove("line__active");
    });
    buttonsLine[button].classList.add("line__active");
  });
});
