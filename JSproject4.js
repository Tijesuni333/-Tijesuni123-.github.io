const bar = document.querySelector('.hidden');
const menu = document.querySelector('.nav');

bar.addEventListener('click', ()=>{
   menu.classList.toggle('appear');
})