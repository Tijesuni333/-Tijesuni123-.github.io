const menu = [
    {
        
        img:"img/item-1.jpeg",
        foodTitle: 'Buttermilk Pancakes',
        price:'$15.99',
        category: "breakfast",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
       
        img:"img/item-2.jpeg",
        foodTitle: 'Godzilla Milkshake',
        price:'$16.99',
        category: "lunch",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      
        img:"img/item-9.jpeg",
        foodTitle: 'Bacon Overflow',
        price:'$25.99',
        category: "shakes",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
       
        img:"img/item-4.jpeg",
        foodTitle: 'Oreo Dream',
        price:'$35.99',
        category: "breakfast",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        
        img:"img/item-5.jpeg",
        foodTitle: 'Buttermilk Pancakes',
        price:'$15.99',
        category: "lunch",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        
        img:"img/item-1.jpeg",
        foodTitle: 'Quarantine Buddy',
        price:'$10.99',
        category: "shakes",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        
        img:"img/item-6.jpeg",
        foodTitle: 'Country Delight',
        price:'$8.99',
        category: "breakfast",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        
        img:"img/item-7.jpeg",
        foodTitle: ' Diner Double',
        price:'$19.33',
        category: "lunch",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
       
        img:"img/item-8.jpeg",
        foodTitle: 'Bison Steak',
        price:'$13.99',
        category: "shakes",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        
        img:"img/item-10.jpeg",
        foodTitle: 'American Classic',
        price:'$1.99',
        category: "dinner",
        description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    
]

const menuItems = document.querySelector('.menulist');
const btns= document.querySelectorAll('.filterbtn');

// load all items
window.addEventListener('DOMContentLoaded',()=>{
   menuDisplayItems(menu);
});

// //navigate page 
btns.forEach(function (button) {
    button.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuitem){
            if (menuitem.category === category){
                return menuitem;
            }
        });
        if(category === "all"){
            menuDisplayItems(menu);
        }else{
            menuDisplayItems(menuCategory);
        }
    })
})


function menuDisplayItems(menuItem){
    let menuDisplay = menuItem.map((item)=>{
        
        return ` <div class="fooddescription">
        <img src=${item.img} alt=${item.foodTitle}>
        <div class="foodt">
            <h3> ${item.foodTitle}</h3>
            <span>${item.price}</span>
        </div>
        <hr>
        <p>${item.description}</p>  
        </div>`
    })
    menuDisplay= menuDisplay.join("");
    menuItems.innerHTML=menuDisplay;
};
