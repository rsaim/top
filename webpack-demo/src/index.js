import _ from 'lodash';
import myName from './myName';
import './style.css';
import YourAmazingIcon from './you-are-amazing.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = myName('Saim');
    // Add css
    element.classList.add('hello');
    // Add image
    const myIcon = new Image();
    myIcon.src = YourAmazingIcon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());