const menu = [
    {
        id: 1,
        image: "./images/item-1.jpeg",
        name: "Buttermilk Pancakes",
        prize: "$15.99",
        category: "breakfast",
        info: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        image: "./images/item-2.jpeg",
        name: "Diner Double",
        prize: "$13.99",
        category: "lunch",
        info: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id: 3,
        image: "./images/item-11.jpg",
        name: "Godzilla Milkshake",
        prize: "$6.99",
        category: "shakes",
        info: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 4,
        image: "./images/item-4.jpeg",
        name: "Country Delight",
        prize: "$20.99",
        category: "breakfast",
        info: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },
    {
        id: 5,
        image: "./images/item-5.jpeg",
        name: "Egg Attack",
        prize: "$22.99",
        category: "lunch",
        info: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        id: 6,
        image: "./images/item-6.jpeg",
        name: "Oreo Dream",
        prize: "$18.99",
        category: "shakes",
        info: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        id: 7,
        image: "./images/item-7.jpeg",
        name: "Bacon Overflow",
        prize: "$8.99",
        category: "breakfast",
        info: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        id: 8,
        image: "./images/item-8.jpeg",
        name: "American Classic",
        prize: "$12.99",
        category: "lunch",
        info: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id: 9,
        image: "./images/item-9.jpeg",
        name: "Quarantine Buddy",
        prize: "$16.99",
        category: "shakes",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        id: 10,
        image: "./images/item-10.jpeg",
        name: "Steak Dinner",
        prize: "$39.99",
        category: "dinner",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
];

let data = document.querySelector(".section-center");
let btns = document.querySelector(".btns");

function display(array) {
    let items = array.map((value) => {
        return `<div class="wrapper">
            <img class="img" src="${value.image}" alt="${value.id}" />
            <div class="text">
                <div class="container">
                    <p class="name">${value.name}</p>
                    <p class="prize">${value.prize}</p>
                </div>
                <p class="line"></p>
                <p class="info">${value.info}</p>
            </div>
        </div>`
    })
    items = items.join("");
    data.innerHTML = items;
}

window.addEventListener('DOMContentLoaded', display(menu));

function button_value(e) {
    const button_value = e.target.dataset.value;
    displayItems(button_value);
}

function displayItems(button_value) {
    if (button_value == "all")
        display(menu);
    else {
        const array = compare(button_value)
        display(array);
    }

}

function compare(button_value) {
    const array = menu.filter((value) => {
        return value.category == button_value;
    })
    return array;
}

btns.addEventListener('click', button_value);