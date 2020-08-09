// Mediator
// An intermediary that communicates different types of objects
// Example: Auction 

class Buyer {
    constructor(name) {
        this.name = name;
        this.saleRoom = null;
    }

    offer(message) {
        console.log(`${this.name}: ${message}`);
    }
}

class Seller {
    constructor(name) {
        this.name = name;
        this.saleRoom = null;
    }

    publicOffer(item, price) {
        console.log(`I have ${item}, auction starts with ${price}`);
    }

    soldItemTo(buyer) {
        console.log(`Sold to ${buyer.name}`);
    }
}

class Auction {
    constructor() {
        this.buyers = {};
    }

    toRegister(user) {
        this.buyers[user.name] = user;
        user.saleRoom = this;
    }
}

// Main
const john = new Buyer('John');
const pol = new Buyer('Pol');
const carl = new Buyer('Carl');

const sam = new Seller('Sam');

const auction = new Auction();
auction.toRegister(john);
auction.toRegister(pol);
auction.toRegister(carl);

sam.publicOffer('Mustang 1966', 3000);
john.offer(4000);
pol.offer(4500);
carl.offer(7000);
sam.soldItemTo(carl);