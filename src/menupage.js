const content = document.getElementById('content');

const menupage = document.createElement('div');
menupage.classList.add('menupage');

const dish0 = document.createElement('div');
dish0.classList.add('dish', 'even');
dish0.innerHTML = `<img class="dish-img " src="../src/dishes/dish1.jpg" alt="">
<span class="dish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`
menupage.appendChild(dish0);

const dish1 = document.createElement('div');
dish1.classList.add('dish', 'odd');
dish1.innerHTML = `<img class="dish-img" src="../src/dishes/dish2.jpg" alt="">
<span class="dish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`
menupage.appendChild(dish1);

const dish2 = document.createElement('div');
dish2.classList.add('dish', 'even');
dish2.innerHTML = `<img class="dish-img" src="../src/dishes/dish3.jpg" alt="">
<span class="dish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`
menupage.appendChild(dish2);

const dish3 = document.createElement('div');
dish3.classList.add('dish', 'odd');
dish3.innerHTML = `<img class="dish-img" src="../src/dishes/dish4.jpg" alt="">
<span class="dish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`
menupage.appendChild(dish3);

const dish4 = document.createElement('div');
dish4.classList.add('dish', 'even');
dish4.innerHTML = `<img class="dish-img" src="../src/dishes/dish5.jpg" alt="">
<span class="dish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`
menupage.appendChild(dish4);

function loadMenuPage(){
    content.appendChild(menupage);
}

function removeMenuPage(){
    if(content.contains(menupage))
    content.removeChild(menupage);
}

export {loadMenuPage, removeMenuPage};