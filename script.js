let gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 256; i++) {
  let box = document.createElement("div");
  box.classList.add("grid-box");
  gridContainer.appendChild(box);
  box.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
  });
}
