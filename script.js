let colorName = document.querySelector(".color-name");
const btn = document.querySelector(".btn");
const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let hexColor = "";

btn.addEventListener("click", () => {
  hexColor = "";

  for (let i = 0; i < 6; i++) {
    let rnd = Math.round(Math.random() * (hexArr.length - 1));
    hexColor = hexColor + hexArr[rnd];
  }

  colorName.innerText = "#" + hexColor;

  document.body.style.backgroundColor = "#" + hexColor;
});
