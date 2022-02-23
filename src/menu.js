import { content } from './index'

function renderMenu() {
  const menuItems = [
    {
      name: 'Omlette',
      desc: 'Lorem ipsum.',
      price: '$10'
    },
    {
      name: 'Pancakes',
      desc: 'Lorem ipsum.',
      price: '$8'
    },
    {
      name: 'Crepes',
      desc: 'Lorem ipsum.',
      price: '$12'
    },
  ]



  const main = document.createElement('main');
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('content');
  p.innerHTML = `Menu`;
  div.appendChild(p);

  menuItems.forEach(item => {
    const mitem = document.createElement('p');
    mitem.innerHTML = `${item.name} | ${item.desc} | ${item.price}`;
    mitem.classList.add('sub-item');
    div.appendChild(mitem);
  })

  main.appendChild(div);

  content.appendChild(main); 
}

export { renderMenu };