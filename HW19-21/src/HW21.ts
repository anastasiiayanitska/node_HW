
abstract class AbstractAnimal {
    constructor(public name: string) {}
    abstract makeSound(): void;
}

class Cat extends AbstractAnimal {
    makeSound() {
        console.log("Meow");
    }
}
class Dog extends AbstractAnimal {
    makeSound() {
        console.log("Gaw");
    }
}

const animals: AbstractAnimal[] = [new Dog("Rex", "Canine", "Labrador"), new Cat("Whiskers")];
animals.forEach(animal => animal.makeSound());



abstract class Shape {
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    constructor(public color: string) {
        super();
    }
}

class ColoredCircle extends ColoredShape {
    constructor(color: string, public radius: number) {
        super(color);
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class ColoredRectangle extends ColoredShape {
    constructor(color: string, public width: number, public height: number) {
        super(color);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const shapes: ColoredShape[] = [new ColoredCircle("red", 10), new ColoredRectangle("blue", 5, 8)];
shapes.forEach(shape => console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`));



abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn() { console.log("Washing machine is now ON"); }
    turnOff() { console.log("Washing machine is now OFF"); }
}

class Refrigerator extends Appliance {
    turnOn() { console.log("Refrigerator is now ON"); }
    turnOff() { console.log("Refrigerator is now OFF"); }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach(appliance => { appliance.turnOn(); appliance.turnOff(); });



abstract class Account {
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
    constructor(public balance: number, private interestRate: number) {
        super();
    }
    deposit(amount: number) { this.balance += amount; }
    withdraw(amount: number) { if (amount <= this.balance) this.balance -= amount; }
    addInterest() { this.balance += this.balance * this.interestRate; }
}

class CheckingAccount extends Account {
    constructor(public balance: number, private fee: number) {
        super();
    }
    deposit(amount: number) { this.balance += amount; }
    withdraw(amount: number) { if (amount + this.fee <= this.balance) this.balance -= (amount + this.fee); }
}



abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play() { console.log("Playing audio"); }
}

class Video extends Media {
    play() { console.log("Playing video"); }
}

const mediaList: Media[] = [new Audio(), new Video()];
mediaList.forEach(media => media.play());
