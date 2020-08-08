// Singleton
// A single object with a single instance, where i have everything
// Example

// Object literal
const students = {
    studentList: [],
    
    get: function(id) {
        return this.studentList.find(elem => elem.id === id);
    },

    add: function(student) {
        this.studentList.push(student);
    },

    getList: function() {
        return this.studentList;
    }
}

// Main
const studentA = {
    id: 1,
    name: 'John',
    age: 20
}

const studentB = {
    id: 2,
    name: 'Pol',
    age: 22
}

students.add(studentA);
students.add(studentB);
console.log(students.getList());
console.log(students.get(2));