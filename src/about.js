import { content } from './index'

function renderAbout() {
  const main = document.createElement('main');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const desc = document.createElement('p');
  const button = document.createElement('button');

  div.classList.add('content');
  p.innerHTML = `About`;
  desc.innerHTML = `Located in the best place with the best food anywhere`;
  desc.classList.add('sub-item');
  button.innerHTML = `MENU`;
  div.appendChild(p);
  div.appendChild(desc);
  div.appendChild(button);
  main.appendChild(div);

  content.appendChild(main); 
}

export { renderAbout };