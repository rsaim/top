import './style.css';
import Naruto from './Naruto.jpeg';

import { loadMenu } from './menu';
import { loadHome } from './home';
import { loadContact } from './contact';

function createHeader() {
    const header = document.createElement('div');
    header.setAttribute("class", "header");

    // Heading
    const h1 = document.createElement('h1');
    h1.innerText = "Ichiraku Ramen";
    header.append(h1);

    // Buttons
    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener("click", () => {
        console.log("homeButton clicked");
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.addEventListener("click", () => {
        console.log("menuButton clicked");
        loadMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    contactButton.addEventListener("click", () => {
        console.log("Contact button clicked");
        loadContact();
    });

    // Navbar
    const navBar = document.createElement("nav");
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    header.appendChild(navBar);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute("class", "main");

    // Add image
    const mainImg = new Image();
    mainImg.src = Naruto;
    mainImg.setAttribute("id", "main-img");
    main.appendChild(mainImg);

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute("class", "footer");

    const p = document.createElement("p");
    p.innerText = "Copyright © 2021 rsaim"
    footer.appendChild(p);

    return footer;
}

function renderHomePage() {
    const content = document.createElement('div');
    content.setAttribute("class", "content");
    content.classList.add("background");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.body.appendChild(content);
}

renderHomePage();