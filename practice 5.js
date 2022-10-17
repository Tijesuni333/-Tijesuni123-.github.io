const hex =['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
const button = document.querySelector('.btn');

button.addEventListener('click',()=>{
    hexColor ='#';
    for(i=0;i<6;i++){
        hexColor+= hex[randomCombo()];
    }
    document.body.style.backgroundColor= hexColor;
});
randomCombo=()=>{
    return Math.floor(Math.random()*hex.length);
}