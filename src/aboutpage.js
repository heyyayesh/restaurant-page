const content = document.getElementById('content');

const aboutpage = document.createElement('div');
aboutpage.classList.add('aboutpage');

aboutpage.innerHTML = `<div class="about-text">
<span><h2>Restaurant</h2></span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore neque voluptas qui, blanditiis omnis fuga non dolor nulla nam magnam veritatis nisi voluptate quos nihil molestiae atque ad eius facere accusantium pariatur excepturi? Dolor sed est nobis facilis inventore aliquid adipisci unde ducimus? Odio autem repellat labore quidem, laudantium, aut, praesentium veniam iste libero voluptatum ea! Earum nesciunt temporibus repellendus impedit natus voluptatem illo, totam hic quod tempore, inventore unde doloribus rerum sequi quis veniam nisi odio error saepe iure molestiae dicta quas nihil? Quibusdam, error laudantium itaque id asperiores porro eius, et dolor, earum provident nisi! Velit, optio amet.</p>
</div>
<div class="contact">
<span>Email : restaurant@email.com</span>
<span>Phones : +91-8768564321, +91-9834703894</span>
</div>`;

function loadAboutPage(){
    content.appendChild(aboutpage);
}

function removeAboutPage(){
    if(content.contains(aboutpage))
    content.removeChild(aboutpage);
}

export {loadAboutPage, removeAboutPage};