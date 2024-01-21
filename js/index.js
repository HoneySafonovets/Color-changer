import { container, title, color, changeBtn, colorChange, btnChangeColor, tagColor } from './vars.js'
import { changeColor } from './functions.js'
export { tagColor }

// Add className for vars
document.body.className = 'body';
container.className = 'container';
changeBtn.className = 'main__subtitle';
changeBtn.innerHTML = 'Change color';
title.className = 'main__title';
title.innerHTML = `Background color:`;
tagColor.innerHTML = `${color}`;
tagColor.className = 'subtitle-item';

// In body
document.body.prepend(container);
container.appendChild(title);
container.appendChild(changeBtn);
title.appendChild(tagColor);
changeBtn.onclick = changeColor;
document.body.style.cssText = `
  background-color: ${color};
`;