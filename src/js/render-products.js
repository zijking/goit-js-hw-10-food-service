import tmpProduct from '../templates/product.hbs';
import products from '../menu.json';

const menuEl = document.querySelector('.js-menu');

const menuProducts = products.map(tmpProduct).join('');

menuEl.insertAdjacentHTML('beforeend', menuProducts);
