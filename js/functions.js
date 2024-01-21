export { changeColor }
import { tagColor } from "./index.js";

function changeColor() {
  setTimeout(() => {
    let letters = '0123456789ABCDEF';
    let colorChangeFunction = '#';
    for (var i = 0; i < 6; i++) {
      colorChangeFunction += letters[Math.floor(Math.random() * 16)];
    }
    tagColor.innerHTML = `${colorChangeFunction}`
    return document.body.style.cssText = `
      background-color: ${colorChangeFunction};
    `;
  }, 300)
}