// Observer
// Subscriptor - publisher

class Subject {
    constructor() {
        this.observers = []; //Observers listening to the subject
    }

    // Subscribe the reporting class
    subscribe(c) {
        this.observers.push(c);
    }

    // Unsubscribe the reporting class
    unsubscribe(c) {
        this.observers = this.observers.filter(observer => observer instanceof c !== true);
    }

    // Call all subscriber
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        });
    }
}

class Observer {
    constructor() {
        this.notify = function (message) {
            // Every observer must implement this function
        };
    }
}

// Main example

class Employee {
    constructor(name) {
        this.name = name;

        // Implement `notify` so the subject can pass us messages
        this.notify = function (meetingTime) {
            console.log(this.name + ': There is a meeting at ' + meetingTime);
        };
    }
}

var bob = new Employee('Bob');
var jane = new Employee('Jane');
var meetingAlerts = new Subject();
meetingAlerts.registerObserver(bob);
meetingAlerts.registerObserver(jane);
meetingAlerts.notifyObservers('4pm');