const button = document.querySelector('.button');
const btnslide = document.querySelector('.switch')
const video = document.querySelector('.vid');

button.addEventListener('click', ()=>{
    if(!btnslide.classList.contains('slide')){
        btnslide.classList.add('slide');
        video.pause();
    }else{
        btnslide.classList.remove('slide');
        video.play();
    }
})

//preload
const mainload =document.querySelector('.main');

window.addEventListener('load',()=>{
    mainload.classList.add('visible');
})
