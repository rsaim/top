import _ from 'lodash';
import myName from './myName';
import './style.css';
import YourAmazingIcon from './you-are-amazing.png';
import { printMe } from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = myName('Saim Raza');
    // Add css
    element.classList.add('hello');
    // Add image
    const myIcon = new Image();
    myIcon.src = YourAmazingIcon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());