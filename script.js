let pizzas = [
    {
        "food": "Chilli Pizza",
        "image": "image/imgP1.jpg",
        "description": "Scharfe Salami, Käse, Hot-Chilli-Tomatensauce, Zwiebeln, Knoblauch und Chillis ",
        "price": "20.50",
    },
    {
        "food": "Pizza Hawaii",
        "image": "image/imgP2.jpg",
        "description": "Schinken-Speck kombinierte Carbonara nach Mamas-Art ",
        "price": "18.50",
    },
    {
        "food": "Pizza Calzone",
        "image": "image/imgP3.jpg",
        "description": "Schinken-Speck kombinierte Carbonara nach Mamas-Art ",
        "price": "18.50",
    },

];
let warmFoods = [
    {
        "food": "Carbonara",
        "image": "image/imgWK1.jpg",
        "description": "Schinken-Speck kombinierte Carbonara nach Mamas-Art ",
        "price": "20.50",
    },
    {
        "food": "Kartoffelpüre",
        "image": "image/imgWK2.jpg",
        "description": "Kartoffelpüree mit Jäger-Bratensauce, Scheinebraten und Aprikosen",
        "price": "19.50",
    },
    {
        "food": "Spargel-Suppe",
        "image": "image/imgWK3.jpg",
        "description": "Regionale Spargelcreme Suppe nach Opas Art",
        "price": "16.50",
    },

];
let coldFoods = [
    {
        "food": "Power-Teller",
        "image": "image/imgKK1.jpg",
        "description": "Fitness-Teller mit Rindsfilet streifen und Ceasar-Salat-Souce",
        "price": "21.50",
    },
    {
        "food": "Walliser-Platte",
        "image": "image/imgKK2.jpg",
        "description": "Alles was das Walliser Herz begehrt",
        "price": "25",
    },
    {
        "food": "Ceasar-Salat",
        "image": "image/imgKK3.jpg",
        "description": "Ceasar-Salat nach Mamas-Art ",
        "price": "18.50",
    },

];


let orderedItem = [];
let orderedPrice = [];
let orderImage = [];
let orderedQuantity = [];
let intermediatePrice = [];
let fuxInsideImages = ['image/fuxInside1.jpeg', 'image/fuxInside2.jpeg', 'image/fuxInside3.jpeg', 'image/fuxInside4.jpeg', 'image/fuxInside5.jpeg'];

window.onscroll = function () {
    document.getElementById('basketContainer');
    if (window.scrollY > 900) {
        basketContainer.style = 'top: 0';
    } else {
        basketContainer.style = 'top: 1150px'
    }
}
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    let interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1; 
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function fadeOut(element) {
    let opacity = 1;
    let interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function imgSlider(){
    let slider = document.getElementById('imgSlider');
    fadeOut(slider);
    setTimeout(function() {
        slider.innerHTML = `
            <img src="${fuxInsideImages[0]}" class="insideImg">
            <img src="${fuxInsideImages[1]}" class="insideImgMid">
            <img src="${fuxInsideImages[2]}" class="insideImg">`;
        fadeIn(slider);
    }, 500);
    setTimeout(imgSlider2, 5000);
}

function imgSlider2(){
    let slider = document.getElementById('imgSlider');
    fadeOut(slider);
    setTimeout(function() {
        slider.innerHTML = `
            <img src="${fuxInsideImages[1]}" class="insideImg">
            <img src="${fuxInsideImages[2]}" class="insideImgMid">
            <img src="${fuxInsideImages[3]}" class="insideImg">`;
        fadeIn(slider);
    }, 500);
    setTimeout(imgSlider3, 5000);
}

function imgSlider3(){
    let slider = document.getElementById('imgSlider');
    fadeOut(slider);
    setTimeout(function() {
        slider.innerHTML = `
            <img src="${fuxInsideImages[2]}" class="insideImg">
            <img src="${fuxInsideImages[3]}" class="insideImgMid">
            <img src="${fuxInsideImages[4]}" class="insideImg">`;
        fadeIn(slider);
    }, 500);
    setTimeout(imgSlider4, 5000);
}

function imgSlider4(){
    let slider = document.getElementById('imgSlider');
    fadeOut(slider);
    setTimeout(function() {
        slider.innerHTML = `
            <img src="${fuxInsideImages[3]}" class="insideImg">
            <img src="${fuxInsideImages[4]}" class="insideImgMid">
            <img src="${fuxInsideImages[0]}" class="insideImg">`;
        fadeIn(slider);
    }, 500);
    setTimeout(imgSlider5, 5000);
}

function imgSlider5(){
    let slider = document.getElementById('imgSlider');
    fadeOut(slider);
    setTimeout(function() {
        slider.innerHTML = `
            <img src="${fuxInsideImages[4]}" class="insideImg">
            <img src="${fuxInsideImages[0]}" class="insideImgMid">
            <img src="${fuxInsideImages[1]}" class="insideImg">`;
        fadeIn(slider);
    }, 500);
    setTimeout(imgSlider, 5000);
}

function showPizzas() {
    let menuContainer = document.getElementById('pizzaContainer');
    menuContainer.innerHTML = '<h1>Pizza</h1>';

    for (let i = 0; i < pizzas.length; i++) {
        const element = pizzas[i];

        menuContainer.innerHTML += `
                  
        <div class="menu">
            <img class="foodImg" src="${element.image}">
            <div class="foodText">
                <div class="foodName">${element.food}</div>
                <div class="foodDescription">${element.description}</div>
                <div>${element.price}</div>
            </div>
            <div> 
                <img class="basketIcon" src="image/basket.png" onclick="addToPizzaBasket(${i})">
            </div>
        </div>  
        `;
    }
}

function addToPizzaBasket(index) {

    let selectedItem = pizzas[index];
    let itemIndex = orderedItem.findIndex(item => item === selectedItem.food);

    if (itemIndex === -1) {
        orderedItem.push(selectedItem.food);
        orderedPrice.push(parseFloat(selectedItem.price));
        orderImage.push(selectedItem.image);
        orderedQuantity.push(1);

    } else {
        orderedQuantity[itemIndex] += 1;
    }

    showItems();
}

function showWarmFoods() {
    let menuContainer = document.getElementById('warmFoodsContainer');
    menuContainer.innerHTML = '<h1>Etwas Warmes</h1>';

    for (let i = 0; i < warmFoods.length; i++) {
        const element = warmFoods[i];

        menuContainer.innerHTML += `
        <div class="menu">
            <img class="foodImg" src="${element.image}">
            <div class="foodText">
                <div class="foodName">${element.food}</div>
                <div class="foodDescription">${element.description}</div>
                <div>${element.price}</div>
            </div>
            <div> 
                <img class="basketIcon" src="image/basket.png" onclick="addToBasketWarmFoods(${i})">
            </div>
        </div>  
        `;
    }
}

function addToBasketWarmFoods(index) {
    let selectedItem = warmFoods[index];
    let itemIndex = orderedItem.findIndex(item => item === selectedItem.food);

    if (itemIndex === -1) {
        orderedItem.push(selectedItem.food);
        orderedPrice.push(parseFloat(selectedItem.price));
        orderImage.push(selectedItem.image);
        orderedQuantity.push(1);
    } else {
        orderedQuantity[itemIndex] += 1;
    }

    showItems();
}

function showColdFoods() {
    let menuContainer = document.getElementById('coldFoodsContainer');
    menuContainer.innerHTML = '<h1>Etwas Leichtes</h1>';

    for (let i = 0; i < coldFoods.length; i++) {
        const element = coldFoods[i];

        menuContainer.innerHTML += `
        <div class="menu">
            <img class="foodImg" src="${element.image}">
            <div class="foodText">
                <div class="foodName">${element.food}</div>
                <div class="foodDescription">${element.description}</div>
                <div>${element.price}</div>
            </div>
            <div> 
                <img class="basketIcon" src="image/basket.png" onclick="addToBasketColdFoods(${i})">
            </div>
        </div>  
        `;
    }
}

function addToBasketColdFoods(index) {
    let selectedItem = coldFoods[index];
    let itemIndex = orderedItem.findIndex(item => item === selectedItem.food);

    if (itemIndex === -1) {
        orderedItem.push(selectedItem.food);
        orderedPrice.push(parseFloat(selectedItem.price));
        orderImage.push(selectedItem.image);
        orderedQuantity.push(1);
    } else {
        orderedQuantity[itemIndex] += 1;
    }

    showItems();
}

function showItems() {
    let basket = document.getElementById('basket');
    basket.innerHTML = '';

    for (let i = 0; i < orderedItem.length; i++) {
        intermediatePrice[i] = orderedPrice[i] * orderedQuantity[i];

        basket.innerHTML += `            
    <div class="basketItem">
        <button class="deletOrder" onclick="deleteItem(${i})">-</button>
        <button class="addOrder" onclick="addToBasket(${i})">+</button>
        <img class="basketFoodImg" src="${orderImage[i]}">
        <div class="basketFoodText">
            <div class="basketFoodName">${orderedItem[i]}</div>
            <div class="foodDescription">Preis: ${orderedPrice[i].toFixed(2)}</div>
        </div>
       <div class="quantityAndPrice"> 
            <div class="quantity">X${orderedQuantity[i]}</div>
            <div class="intermediatePrice">${intermediatePrice[i].toFixed(2)}</div>
        </div>
    </div>`
        orderMassRegulator(i);
    }
    showPriceOfOrder();
    orderButton();


}

function orderMassRegulator(i) {

    let sum = orderedItem.length;

        if (sum > 6) {
            alert('Wir haben nur eine kleine Küche. Zu viele verschiedene Gerichte würden unsere Kapazität sprengen.');
            orderedItem.pop();
            orderImage.pop();
            orderedPrice.pop();
            orderedQuantity.pop();
            intermediatePrice.pop();
        }
}

function deleteItem(i) {

    if (orderedQuantity[i] === 1) {
        orderedItem.splice(i, 1);
        orderImage.splice(i, 1);
        orderedPrice.splice(i, 1);
        orderedQuantity.splice(i, 1);
        intermediatePrice.splice(i, 1);
    } else {
        orderedQuantity[i] -= 1;
    }

    showItems();
}

function showPriceOfOrder() {

    let sum = 0;

    for (let i = 0; i < orderedPrice.length; i++) {
        sum += intermediatePrice[i];
    }

    let showPrice = document.getElementById('showPrice');
    showPrice.innerHTML = `${sum.toFixed(2)} CHF.-`
}

function addToBasket(index) {
    orderedQuantity[index] += 1;
    showItems();
}

function orderButton() {

    let sum = 0;
    let order = document.getElementById('order');

    for (let i = 0; i < orderedQuantity.length; i++) {
        sum += orderedQuantity[i];
    }

    if (sum > 0) {
        order.innerHTML = `<button class="orderButton" onclick="orderFood()">Bestellen</button>`;
    } else {
        order.innerHTML = '<p class="basketSpan">Dein Warenkorb scheint noch leer zu sein</p>';
        document.getElementById('showPrice').innerHTML = '';
    }
}

function orderFood() {

    let body = document.getElementById('body');
    body.innerHTML = `
    <div class="orderedContainer">
    <div class="ordered">
        Danke Für Ihre Bestellung!<br>Dies war nur eine Testbestellung.
        <button class="backToHomepageButton" onclick="reloadPage()">Zurück zur Homepage</button>
    </div>
    </div>
    `;

    orderedItem = [];
    orderedPrice = [];
    orderImage = [];
    orderedQuantity = [];
    intermediatePrice = [];
    showItems();
}

function reloadPage() {
    location.reload();
}


