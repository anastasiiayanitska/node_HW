
class Animal {
    constructor(public name: string, public species: string) {}
    
    sound() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    constructor(name: string, species: string, public breed: string) {
        super(name, species);
    }
    
    sound() {
        console.log("The dog barks");
    }
}



class Library {
    static totalBooks: number = 0;
    
    static addBook() {
        Library.totalBooks++;
    }
}

Library.addBook();
Library.addBook();
console.log(Library.totalBooks);



class Vehicle {
    constructor(public make: string, public model: string) {}
}

class Motorcycle extends Vehicle {
    constructor(make: string, model: string, public type: string) {
        super(make, model);
    }
}

const bike = new Motorcycle("Yamaha", "YZF-R1", "Sport");
console.log(bike);