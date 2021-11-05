const colors = [
  "Orangered",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Cyan",
  "DodgerBlue",
  "Violet",
  "Navy",
  "Purple",
  "YellowGreen",
  "OrangeRed",
  "SlateBlue",
  "Salmon",
  "Crimson",
  "HotPink",
  "Magenta",
];
let index = 0;

const btn = document.querySelector(".btn-color");

btn.addEventListener("click", () => {
  if (index > colors.length - 1) index = 0;
  document.body.style.backgroundColor = colors[index++];
  btn.style.borderColor = "#fff";
  btn.style.color = "#fff";
});
