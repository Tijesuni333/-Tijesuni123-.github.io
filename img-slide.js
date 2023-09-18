const photos =[
    {
        img:"img/pexels-aleksey-kuprikov-3786091.jpg",
    },
    { 
        img:"img/pexels-jesse-zheng-1213294.jpg",
    },
    {
        img:"img/pexels-pavlo-luchkovski-337909.jpg",
    },
    {
        img:"img/pexels-pixabay-39855.jpg",
    },
    {
        img:"img/pexels-meru-bi-6033982.jpg",
    },
    {
        img:"img/pexels-mike-noga-3608542.jpg",
    }
]

const image =document.getElementById('pics');
let Start=0;

function slider(){
    const items = photos[Start];
    image.src = items.img;

    Start++;
   if(Start >= photos.length){
        Start=0;
    }
}
window.addEventListener('DOMContentLoaded', slider);
setInterval(slider,1000);