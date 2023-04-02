// NPM - Node Package Manager

import ColorBlock from "./Components/ColorBlock/ColorBlock";

const appElement = document.querySelector("#app");

const state = {
  blocks: [],
};

const generateBlocks = () => {
  let colorBlocksHTML = "";
  for (let i = 0; i < 4; i++) {
    const blockFromState = state.blocks[i];
    if (blockFromState && blockFromState.Locked) {
      colorBlocksHTML += blockFromState.render();
    } else {
      const colorBlockComponent = new ColorBlock(i);
      state.blocks[i] = colorBlockComponent;
      colorBlocksHTML += colorBlockComponent.render();
    }
  }

  appElement.innerHTML = colorBlocksHTML;
};

generateBlocks();

document.body.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;

  generateBlocks();
});

document.body.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const action = clickedElement.dataset.type;
  if (!action) return;
  switch (action) {
    case "copy":
      navigator.clipboard.writeText(clickedElement.innerText);
      alert("Copied");
      break;
    case "lock":
      clickedElement.classList.toggle("fa-lock");
      clickedElement.classList.toggle("fa-lock-open");
      const blockIndex = Number(clickedElement.dataset.id);
      state.blocks[blockIndex].Locked = !state.blocks[blockIndex].Locked;
      break;
  }
});

function User(login, password) {
  this.Login = login;
  this.Password = password;
}

const user = new User("user2023", "qwerty123");

console.log(user);
