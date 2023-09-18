const openModalBtn =document.querySelector('.btn');
const closeModalBtn= document.querySelector('.xbar');
const modal= document.querySelector('.second');

openModalBtn.addEventListener('click',()=>{
    modal.classList.toggle('modal');
})
closeModalBtn.addEventListener('click',()=>{
    modal.classList.toggle('modal');
})