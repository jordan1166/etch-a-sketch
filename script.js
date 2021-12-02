let flexContainer = document.getElementById("flex-container");
let gridContainer = document.getElementById("grid-container");

let clearButton = document.createElement("button");
clearButton.classList.add("clear-button");
clearButton.textContent = "Clear";

flexContainer.appendChild(clearButton);

for (let i = 0; i < 256; i++) {
  let box = document.createElement("div");
  box.classList.add("grid-box");
  gridContainer.appendChild(box);
  box.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
  });
}

clearButton.addEventListener("click", () => {
  let box = document.getElementsByClassName("grid-box");
  Array.from(box).forEach((gridBox) => {
    gridBox.style.backgroundColor = "";
  });
});
