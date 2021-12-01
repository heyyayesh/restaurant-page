const content = document.getElementById('content');

const homepage = document.createElement('div');
homepage.classList.add('homepage');

const homepageInsideDiv = document.createElement('div');

const homeText = document.createElement('span');
homeText.id = 'home-text';
homeText.textContent = `Discover delicious cuisines from India's best kept secret.`;

homepageInsideDiv.appendChild(homeText);

homepage.appendChild(homepageInsideDiv);

function loadHomePage(){
    content.appendChild(homepage);
}

function removeHomePage(){
    if(content.contains(homepage))
    content.removeChild(homepage);
}

export  {loadHomePage, removeHomePage};