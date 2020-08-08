// Module 
// A way to create public and private variables
// Example
const buyTicket = (function() {
    // Private
    let event = 'Covid 2021';
    const getTicket = () => {
        const element = document.createElement('p');

        element.textContent = `Buying ticket for ${event}`;
        document.querySelector('#app').appendChild(element);
    };

    // Public
    return {
        showTicket: function() {
            getTicket();
        }
    }
})();

buyTicket.showTicket(); // "Buying ticket for Covid 2021"
// The following throw Undefined (event not public)
console.log(event); 
console.log(buyTicket.event); 