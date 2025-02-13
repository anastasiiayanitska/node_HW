function greetUser(name:string):string{
    return `Hello: ${name}`
}
console.log(greetUser("Anastasiia"));

interface Person{
    name:string
    age:number
    city:string
}

function printPerson(newPerson: Person){
    console.log(`Name: ${newPerson.name}, Age: ${newPerson.age}, City: ${newPerson.city}`);
    
}
const newPerson:Person ={
    name:"Anastasiia",
    age:29,
    city:"Warburg"
}
printPerson(newPerson)

function squareNumber(num:number):number{
    return num*num
}
console.log(squareNumber(2));

function isEven(num:number):boolean{
    return num%2===0
}

console.log(isEven(3));

interface Student{
    name:string
    grade:number
}
function printStudentInfo(newStudent:Student){
    console.log(`Student: ${newStudent.name}, grade: ${newStudent.grade}`);
    
}
const newStudent:Student={
    name:"Anastasiia",
    grade:5
}
printStudentInfo(newStudent)

function logMessage(message:string):void{
    console.log(message);
    
}
logMessage("Hallo")
