import './style.css';
// import RamenIchirakuCover from './Ramen-IchirakuCover.jpeg';
import Naruto from './Naruto.jpeg';

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

    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    navBar.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    navBar.appendChild(contactButton);

    header.appendChild(navBar);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute("class", "main");
    
    // Add image
    // const narutoImg = new Image();
    // narutoImg.src = Naruto;
    // narutoImg.setAttribute("id", "naruto");
    // main.appendChild(narutoImg);
    
    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.setAttribute("class", "footer");
    return footer;
}

function renderHomePage() {
    const content = document.createElement('div');
    content.setAttribute("class", "content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.body.appendChild(content);

}

renderHomePage();