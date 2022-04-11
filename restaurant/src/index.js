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
    // Navbar
    const navBar = document.createElement("nav");
    
    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    navBar.appendChild(homeButton);
    homeButton.addEventListener("click", () => {
        console.log("homeButton clicked");
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    navBar.appendChild(menuButton);
    menuButton.addEventListener("click", () => {
        console.log("menuButton clicked");
        loadMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    navBar.appendChild(contactButton);
    contactButton.addEventListener("click", () => {
        console.log("Contact button clicked");
        loadContact();
    });

    header.appendChild(navBar);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute("class", "main");
    
    // Add image
    const narutoImg = new Image();
    narutoImg.src = Naruto;
    narutoImg.setAttribute("id", "naruto");
    main.appendChild(narutoImg);
    
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