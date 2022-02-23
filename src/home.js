import { content } from './index'

function renderHome() {
  const main = document.createElement('main');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const button = document.createElement('button');

  div.classList.add('content');
  p.innerHTML = `Life's too short for boring food.`;
  button.innerHTML = `MENU`;
  div.appendChild(p);
  div.appendChild(button);
  main.appendChild(div);

  content.appendChild(main); 
}

export { renderHome };