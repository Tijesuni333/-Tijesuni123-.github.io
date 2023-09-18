const barIcon = document.querySelector('.baricon');
const sideBar= document.querySelector('.side');
const xbarIcon= document.querySelector('.xbar');

barIcon.addEventListener('click',()=>{
    sideBar.classList.toggle('appear');
    barIcon.classList.add('show');
})
xbarIcon.addEventListener('click',()=>{
    sideBar.classList.remove('appear');
    barIcon.classList.remove('show');
})


