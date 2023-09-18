//make the footer date dynamic
const year =document.querySelector('.year');
year.innerHTML= new Date().getFullYear();

//navbar toogle
const navtoogle =document.querySelector('.icons-bar');
const navlinks = document.querySelector('.navlinks');
const linksContainer = document.querySelector('.links');

// navtoogle.addEventListener('click',()=>{
//     navlinks.classList.toggle('showlinks');
// })

//navbar dynamic toogle
navtoogle.addEventListener('click',()=>{
    const navlinkscontainerheight = navlinks.getBoundingClientRect().height;
    let linksContainerheight = linksContainer.getBoundingClientRect().height;
    linksContainerheight = linksContainerheight + 10;

    if(navlinkscontainerheight=== 0){
        navlinks.style.height =`${linksContainerheight}px`
    }else{
        navlinks.style.height= 0;
    }
})


