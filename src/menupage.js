import img0 from './dishes/dish1.jpg';
import img1 from './dishes/dish2.jpg';
import img2 from './dishes/dish3.jpg';
import img3 from './dishes/dish4.jpg';
import img4 from './dishes/dish5.jpg';

const content = document.getElementById('content');

const menupage = document.createElement('div');
menupage.classList.add('menupage');

const dish0 = document.createElement('div');
dish0.classList.add('dish', 'even');
dish0.appendChild(imgCreater(img0));
dish0.appendChild(paraCreater());
menupage.appendChild(dish0);

const dish1 = document.createElement('div');
dish1.classList.add('dish', 'odd');
dish1.appendChild(imgCreater(img1));
dish1.appendChild(paraCreater());
menupage.appendChild(dish1);

const dish2 = document.createElement('div');
dish2.classList.add('dish', 'even');
dish2.appendChild(imgCreater(img2));
dish2.appendChild(paraCreater());
menupage.appendChild(dish2);

const dish3 = document.createElement('div');
dish3.classList.add('dish', 'odd');
dish3.appendChild(imgCreater(img3));
dish3.appendChild(paraCreater());
menupage.appendChild(dish3);

const dish4 = document.createElement('div');
dish4.classList.add('dish', 'even');
dish4.appendChild(imgCreater(img4));
dish4.appendChild(paraCreater());
menupage.appendChild(dish4);

function loadMenuPage(){
    content.appendChild(menupage);
}

function removeMenuPage(){
    if(content.contains(menupage))
    content.removeChild(menupage);
}

function imgCreater(img){
    const dishImg = document.createElement('img');
    dishImg.classList.add('dish-img');
    dishImg.src = img;
    return dishImg;
}

function paraCreater(){
    const text = document.createElement('span');
    text.classList.add('dish-desc');
    text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.`;
    return text;
}

export {loadMenuPage, removeMenuPage};