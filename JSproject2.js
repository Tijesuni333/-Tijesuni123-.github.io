
let counter =0;
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

const globalEvent =(event)=>{
    const style = event.currentTarget.classList;
    if(style.contains('increase')){
        counter++;
    }else if(style.contains('decrease')){
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
}

buttons.forEach((btn)=>{
    btn.addEventListener('click',globalEvent);
})