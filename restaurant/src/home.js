import Naruto from './Naruto.jpeg';

function loadHome() {
    const mainImg = document.querySelector('#main-img');
    mainImg.src = Naruto;
}

export { loadHome };