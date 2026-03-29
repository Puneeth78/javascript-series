// const student={
//     name:"puneeth",
//     age:21,
//     marks:90,
//     printMarks:function(){
// //         console.log("marks=",this.marks);
// //     },
// // }

// // prototypes 
// // const employee={
// //    calTax(){
// //     console.log("cal tax is 10%")
// //    },
// // };

// // const puneeth={
// //     salary:500,
// // };

// // puneeth.__proto__=employee;


// class toyotaCar{
//     constructor(brand){
//         this.brand=brand
//     }  
//     start(){   // object
//         console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }

//     // create the new properties using class
 
// }

// let fortuner = new toyotaCar("fortuner");
// // fortuner.setBrand("fortuner");

// class Person {
//     constructor(name, age) {
//         this.name = name;  // property
//         this.age = age;    // property
//     }

//     // method
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Create object using class
// const p1 = new Person("Anil", 25);
// p1.greet();  // Output: Hello, my name is Anil and I am 25 years old.


// //constructors
// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color
// }

// const car1=new Car("ford","mustang",2022,"red")
// console.log(car1.model)


// // inheritance
// class parent{
//     hello(){
//         console.log("hello")
//     }
// }


// class animal{
//     alive=true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }


// }

// class tiger extends animal{
//     name="tiger";
//     run(){
//         console.log(`the tiger ${this.name} is running`)
//     }
// }

// class lion extends animal{
//     name="lion";
//     fight(){
//         console.log(`this method is ${this.name} is fighting`)
//     }
// }

// const tigers=new tiger();
// const lions=new lion();

// console.log(tigers.alive);
// tigers.sleep();
// tigers.eat();
// tigers.run();


//super keyword 
// class animal{
//     speak(){
//         console.log("animal makes a sound")
//     }
// }

// class dog extends animal{
//     speak(){
//         super.speak();
//         console.log("dog barks")
//     }
// }

// const d=new dog();
// d.speak();



// class puneeth{
//     study(){
//         console.log("puneeth do study everyday");
//     }
    
// }

// class dhanush extends puneeth{
//     study(){
//         super.study();
//         console.log("dhanush is also good in study ");
//     }
// }

// const dhanu=new dhanush();
// dhanu.study();



// class animals{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }


//     move(){
//         console.log(`this ${this.name} move this spped${this.speed}`)
//     }
// }

// class huli extends animals{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed=speed;
//     }

//     run(){
//         console.log("runs 50 kmph");
//         super.move(this.speed);
//     }
// }

// const h=new huli("huliraya",21,562);
// console.log(h.name);
// console.log(h.speed);
// console.log(h.run());



// // Class in JavaScript
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

//  const std1=new Student("puneeth",21);
//  console.log(std1.name);
//  console.log(std1.greet());


//  inheritance
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sound(){
        console.log(`this animal ${this.name} makes sound`);

    }
}

class tiger extends Animal{
    constructor(name,age,breed){
        super(name);
        this.breed=breed;
        this.age=age;
    }

    species(){
        console.log(`this animal belongs to  ${this.breed} breed`)
    }
}

const d1=new tiger("huli",21,"bengal")
d1.sound();
d1.species();


let person = {
  name: "Punith",
  age: 21,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();