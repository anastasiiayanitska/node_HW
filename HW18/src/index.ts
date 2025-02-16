type Admin={
    name:string
    premissions:string[]
}
type User ={
    name:string
    email:string
}
type AdminUser = Admin & User;
const newUser:AdminUser={
    name: "Anastasiia",
    premissions: ["read", "write", "delete"],
    email:"emai@gmail.com"
}



type Car={
    make:string
    model:string
    engine:{
        type:string
        horsepower:number
    }
    year?:number

}
const myCar:Car={
    make:"Audi",
    model:"A4",
    engine:{
        type: "Diesel",
        horsepower: 250
    }
}
function printCar(car:Car):void{
    console.log(car)
    if(car.year){
        console.log(`Car year: ${car.year}`);
    }   
}
printCar(myCar)



interface Product{
    name:string
    price:number
}
interface CalculateDiscount {
    (product: Product, discount: number): number;
}
const calculateDiscount: CalculateDiscount = (product, discount) => {
    return product.price - (product.price * discount / 100);
};



interface Employee{
    name:string
    salary:number
}
const employees: Employee[]=[
    {name:"Anastasiia", salary:500000},
    {name:"Vadym", salary:2000}
]
function getSalaries(employeeList:Employee[]):number[]{
    return employeeList.map(e=>e.salary)
}
console.log(getSalaries(employees));


interface Person{
    firstName:string
    lastName:string
}
interface Student extends Person{
    grade:number
}
const student:Student ={
    firstName:"Anastasiia",
    lastName:"Yanitska",
    grade:100
}
function printStudent(student:Student):void{
    console.log(student);
    
}
printStudent(student)



interface ConcatStrings {
    (str1: string, str2: string): string;
}
const concatStrings: ConcatStrings = (str1, str2) => `${str1} ${str2}`;
console.log(concatStrings("Hello", "World"));
