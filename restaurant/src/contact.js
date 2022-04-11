import Contact from './contact.jpeg';

function loadContact() {
    const centerImg = document.querySelector('#naruto');
    centerImg.src = Contact;
}

export { loadContact };