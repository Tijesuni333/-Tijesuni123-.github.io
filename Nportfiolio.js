const bar = document.querySelector('.menubar');
const menu = document.querySelector('.mobilelinks');

bar.addEventListener('click', ()=>{
   menu.classList.toggle('appear');
})