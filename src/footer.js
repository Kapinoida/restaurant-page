import { content, createHtmlElement } from './index'

function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = 'Copyright 2022';

  content.appendChild(footer);
}

export { renderFooter };