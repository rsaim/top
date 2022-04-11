import Menu from './menu.jpeg';

function loadMenu() {
    const mainImg = document.querySelector('#main-img');
    mainImg.src = Menu;
}

export { loadMenu };