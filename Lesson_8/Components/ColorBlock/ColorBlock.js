import chroma from "chroma-js";

export default function ColorBlock(id) {
  this.Locked = false;
  this.Id = id;
  this.Color =  chroma.random();

  this.render = function () {
    const labelColor = this.Color.luminance() > 0.5 ? "black" : "white";
    const color = this.Color.toString().toUpperCase();
    return `
    <div class="color-block" style="background-color: ${color}">
    <h2 data-type="copy" style="color: ${labelColor};">${color}</h2>
  
    <button data-type="lock">
      <i class="fa-solid ${this.Locked ? "fa-lock" : "fa-lock-open"}" data-type="lock" data-id="${this.Id}"></i>
    </button>
  </div>
      `;
  };

  //   const div = document.createElement("div"); //<div></div>
  //   div.style.color = color;
  //   div.innerText = color;
  //   div.classList.add("color-block");
  //   return div;
}
