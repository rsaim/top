import Naruto from './Naruto.jpeg';

function loadHome() {
    const centerImg = document.querySelector('#naruto');
    centerImg.src = Naruto;
}

export { loadHome };