// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetails = document.getElementById("ramen-detail")
const name1 = document.querySelector('.name')
const restaurant = document.querySelector(".restaurant")
const imag = document.querySelector(".detail-image")
const rating = document.querySelector('#rating-display')
const comments = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const submit = document.querySelector('#submit')


fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramenData => {
    ramenData.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        ramenMenu.appendChild(img);
        img.addEventListener("click", render);

        function render(ramenData) {
            name1.textContent = ramen.name
            restaurant.textContent = ramen.restaurant
            imag.src = ramen.image
            rating.textContent = ramen.rating
            comments.textContent = ramen.comment
        }
        
    });
})


