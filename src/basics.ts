// Declare main.ts as own module
export { }

const message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'test';

// Multiline string (here string)
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

// Null and undefined types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;


// Array

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let person1: [string, number] = ['Chris', 22];

let persons: Array<[string, number]> = [person1];
console.log(persons[0]);


// Enum
enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
console.log(`Color: ${c}`);

// Any type ==> usefull for javascript fallback
let randomValue : any = 10;
randomValue = true;
randomValue = "string";


// Unkown type
let myVariable : unknown = 10;

function hasName (obj:any) : obj is {name:string}{ // obj is returns an object containing a name attribute
    return !!obj && typeof obj == "object" && "name" in obj;
}

myVariable = "TEST";
if (hasName(myVariable)){
    console.log(myVariable.name);
}
(myVariable as string).toLocaleUpperCase();


// unintialized vars can take any type
let a;
a = 10;
a = "test";

// initialized vars can't take others types

let b = 10;

// Fires compiler error
// b = "test";

// Union type declaration, variable might contain either a number OR a boolean
let multiType : number | boolean;
multiType = 20;
multiType = true;


/// Functions

// Define param types
function add(num1 : number, num2 : number) 
: number{
    return num1 + num2;
}

console.log(add(1, 2));

// Optional parameters
function add2 (num1: number, num2? : number){
    if (num2){
        return num1 + num2;
    }
    return num1;
}

// Default parameters 
function add3 (num1: number, num2 : number = 10){
    if (num2){
        return num1 + num2;
    }
    return num1;
}



//////// Interfaces


// Inefficient way
function fullName (person: { firstName : string, lastName : string}){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName : 'bruce',
    lastName : 'wayne'
}



fullName(p);

// Lets use interfaces

interface Person{
    firstName : string,
    lastName : string
    // Optional property: lastName? : string
}

function fullName2(person : Person){

    console.log(`fullName2: ${person.firstName} ${person.lastName}`)
}

fullName2(p);


//// Classes

class Employee {
    private employeeName : string;

    constructor(name: string){
        this.employeeName = name;

    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let e  = new Employee("Greg");
e.greet();


class Manager extends Employee {
    constructor(managerName:string){
        super(managerName)
    }

    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m = new Manager("Manager");
m.greet();
m.delegateWork();


interface IEmployee {
    firstName : string;
}

class Employee2 extends Employee implements IEmployee {
    constructor(name :string){
        super(name)
    }

    firstName : string;
}

class Employee3{
    private employee : IEmployee;
    constructor(employee : IEmployee){
        this.employee = employee;
    }
}
