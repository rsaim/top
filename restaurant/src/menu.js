import Menu from './menu.jpeg';

function loadMenu() {
    const menu = document.querySelector('#naruto');
    menu.src = Menu;
}

export { loadMenu };