
var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementById("closeModal");


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault(); 
    alert("Admin logged in (simulasi)."); 
    modal.style.display = "none"; 
}


const menuData = {
    coffee: {
        title: "Coffee",
        description: "A variety of freshly brewed coffee made with the finest beans.",
        items: [
            { name: "Espresso", price: 30 },
            { name: "Cappuccino", price: 40 },
            { name: "Latte", price: 45 },
            { name: "Americano", price: 35 }
        ]
    },
    noncoffee: {
        title: "Non-Coffee",
        description: "Refreshing beverages such as teas, juices, and smoothies.",
        items: [
            { name: "Iced Tea", price: 25 },
            { name: "Lemonade", price: 30 },
            { name: "Smoothie (Mango)", price: 50 },
            { name: "Fresh Orange Juice", price: 40 }
        ]
    },
    foodsnack: {
        title: "Food & Snack",
        description: "Tasty snacks and light bites perfect for any time of day.",
        items: [
            { name: "Croissant", price: 20 },
            { name: "Bagel with Cream Cheese", price: 30 },
            { name: "Cookies", price: 15 },
            { name: "Chips", price: 10 }
        ]
    },
    breakfast: {
        title: "Breakfast",
        description: "Hearty breakfast options including pancakes, eggs, and more.",
        items: [
            { name: "Pancakes with Syrup", price: 60 },
            { name: "Eggs Benedict", price: 70 },
            { name: "Omelette", price: 55 },
            { name: "Avocado Toast", price: 50 }
        ]
    },
    signature: {
        title: "Signature",
        description: "Our house specialties that you won’t find anywhere else.",
        items: [
            { name: "Signature Coffee Blend", price: 60 },
            { name: "Truffle Fries", price: 80 },
            { name: "Specialty Smoothie", price: 65 },
            { name: "House Salad", price: 45 }
        ]
    }
};


function showPopup(item, event) {
    event.stopPropagation(); 
    
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    const menuItemsList = document.getElementById('popup-menu-items');
    

    title.textContent = menuData[item].title;
    description.textContent = menuData[item].description;


    menuItemsList.innerHTML = '';


    menuData[item].items.forEach(function(menuItem) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${menuItem.name}</span> - <span class="price">$${menuItem.price}</span>`;
        menuItemsList.appendChild(listItem);
    });

    popup.style.display = "flex"; 
}



function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = "none"; 
}

var tagihanPopup = document.getElementById("tagihanPopup");
var tagihanBtn = document.getElementById("tagihanBtn");


tagihanBtn.onclick = function(event) {
    event.preventDefault(); 
    tagihanPopup.style.display = "flex"; 
}


function closeTagihanPopup() {
    tagihanPopup.style.display = "none"; 
}


window.onclick = function(event) {
    if (event.target == tagihanPopup) {
        tagihanPopup.style.display = "none";
    }
}


function scrollToAbout() {

    const aboutSection = document.getElementById("about");
    

    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'     
    });
}
