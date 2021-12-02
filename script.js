let flexContainer = document.getElementById("flex-container");
let gridContainer = document.getElementById("grid-container");

let clearButton = document.createElement("button");
clearButton.classList.add("clear-button");
clearButton.textContent = "Clear";

flexContainer.appendChild(clearButton);

createGrid();

clearButton.addEventListener("click", () => {
  let box = document.getElementsByClassName("grid-box");
  Array.from(box).forEach((gridBox) => {
    gridBox.style.backgroundColor = "";
  });
  let newGrid = Number(
    prompt(
      "How many squares per side? Example: If you choose 16, a 16 by 16 square grid will be created."
    )
  );
  removeElementsByClass("row");
  createGrid(newGrid);
});

function createGrid(number = 16) {
  if (number === 0) number = 16;
  for (let i = 0; i < number; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = `row-${i + 1}`;
    gridContainer.appendChild(row);
    for (let j = 0; j < number; j++) {
      let box = document.createElement("div");
      box.classList.add("grid-box");
      box.id = `box-${j + 1}`;
      row.appendChild(box);
      box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue";
      });
    }
  }
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
