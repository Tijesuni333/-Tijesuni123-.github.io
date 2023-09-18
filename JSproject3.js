const reviews = [
    {
        name: 'Adam Connor',
        job:'ui/ux Designer',
        notes:'Films succeed in evoking responses and engaging audiences only with a combination of well-written narrative and effective storytelling technique. It’s the filmmaker’s job to put this together.',
        img:"img/adam-connor.jpg",
    },
    {
        name:'Arman Ghosh',
        job:'Data Analyst',
        notes:'Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.',
        img:"img/arman-ghosh.jpg"

    },
    {
        name:'Bermon Painter',
        job:'Full Stack',
        notes:'Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping',
        img:"img/bermon-painter.jpg"
    },
    {
        name:'Shay Howe',
        job:'Backend Developer',
        notes:'As a designer and front-end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties which he regularly writes and speaks about.',
        img:"img/shay-howe.jpg" 
    }
]



const name =document.querySelector('.name');
const job =document.querySelector('.title');
const notes =document.querySelector('.notes');
const image =document.getElementById('image');

const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
const randomBtn = document.querySelector('.randombtn');

let currentReview = 0;

const windowDisplay =()=>{
   const items = reviews[currentReview];
   image.src = items.img;
   job.textContent= items.job;
   notes.textContent=items.notes;
   name.textContent= items.name; 

}
window.addEventListener('DOMContentLoaded', windowDisplay);



nextBtn.addEventListener('click',()=>{
    currentReview++;
    if(currentReview >= reviews.length){
        currentReview=0;
    }
   windowDisplay();
})

prevBtn.addEventListener('click',()=>{
    currentReview--;
    if(currentReview < 0){
        currentReview= reviews.length - 1;
    }
   windowDisplay();
})

randomBtn.addEventListener('click',()=>{
    currentReview = Math.floor(Math.random() * reviews.length)
   windowDisplay();
})