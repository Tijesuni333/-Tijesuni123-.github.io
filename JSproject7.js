const dropdisplay= document.querySelectorAll(".que");

dropdisplay.forEach((question)=>{
    const plusicon =question.querySelector('.plusicon');
    const answer= question.querySelector('.down');
    const minusicon =question.querySelector('.minusicon');

   
    

    plusicon.addEventListener('click',()=>{
        dropdisplay.forEach((item)=>{
           if(item.style.display=="contents"){
            item.style.display="none"
           }
        //    else{
        //     item.style.display="none"
        //    }
        })

        answer.classList.toggle('displayanser');
        plusicon.classList.toggle('displayplusicon');
        minusicon.classList.toggle('displayminusicon');
    })
    minusicon.addEventListener('click',()=>{
        answer.classList.toggle('displayanser');
        plusicon.classList.toggle('displayplusicon');
        minusicon.classList.toggle('displayminusicon');
     
    })
})


