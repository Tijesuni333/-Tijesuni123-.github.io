let counter = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

const globalEvent =(events)=>{
    const val=events.currentTarget.classList;
    if(val.contains('increase')){
        counter++;
    }else if(val.contains('decrease')){
        counter--;
    }else{
        counter =0;
    }
    if(counter > 0){
        value.style.color='green';
    }
    if(counter < 0){
        value.style.color= 'red';
    }
    if(counter === 0){
        value.style.color='black'
    }
    value.textContent= counter;
};
btns.forEach((btn)=>{
    btn.addEventListener('click', globalEvent);
});



