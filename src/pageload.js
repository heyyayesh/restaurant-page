import {loadAboutPage, removeAboutPage} from "./aboutpage";
import {loadHomePage, removeHomePage} from "./homepage";
import {loadMenuPage, removeMenuPage} from "./menupage";

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const home = document.createElement('span');
    const menu = document.createElement('span');
    const about = document.createElement('span');
    
    home.textContent = 'Home';
    home.classList.add('tab', 'active');
    
    menu.textContent = 'Menu';
    menu.classList.add('tab');
    
    about.textContent = 'About';
    about.classList.add('tab');
    
    home.addEventListener('click', (e) => {
        activateTab(e, menu, about);
        removeMenuPage();
        removeAboutPage();
        loadHomePage();
    });

    menu.addEventListener('click', (e) => {
        activateTab(e, home, about);
        removeHomePage();
        removeAboutPage();
        loadMenuPage();
    });

    about.addEventListener('click', (e) => {
        activateTab(e, home, menu);
        removeHomePage();
        removeMenuPage();
        loadAboutPage();
    });

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(about);

    const content = document.getElementById('content');
    content.appendChild(header);
}

function activateTab(e, otherTab, anotherTab){
    if(e.target.classList.contains('active')) return;
    e.target.classList.add('active');
    otherTab.classList.remove('active');
    anotherTab.classList.remove('active');
}



function init(){
    createHeader();
    loadHomePage();
}

export default init;
