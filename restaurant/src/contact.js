import Contact from './contact.jpeg';

function loadContact() {
    const centerImg = document.querySelector('#main-img');
    centerImg.src = Contact;
}

export { loadContact };