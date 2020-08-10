// Namespace
// Design pattern to avoid name collisions in JS global scope
// Example

// Global var
const restApp = {};

restApp.menu = [
    {
        food: 'pizza',
        price: 20,
    },
    {
        food: 'pasta',
        price: 15,
    },
    {
        food: 'burguer',
        price: 25,
    }
];

restApp.functions = {
    order: id => {
        console.log(`Your dish: ${restApp.menu[id].food} is being prepared`);
    },

    addToMenu: (food, price) => {
        const newDish = {
            food,
            price
        };
        restApp.menu.push(newDish);
    },

    showMenu: () => {
        restApp.menu.forEach(elem => console.log(elem));
    }
};

// Main
restApp.functions.showMenu();
restApp.functions.addToMenu('hot dog', 10);
// An advantage of Namespace is that Destructuring can be applied
const { menu } = restApp;
console.log(menu);