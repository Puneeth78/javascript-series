// // callback=function that passes the argument to the another function

// hello(goodbye);
// function hello(callback){
//     console.log("hello!" + name);
//     callback();
// }


// function goodbye(){
//     console.log("goodbye")
// }


// function greet(name, callback){
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye(){
//     console.log("Goodbye!");
// }

// greet("Punith", sayBye);

// sum(displayPage,3,4);
// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }

// // function displayConsole(result){
// //     console.log(result);
// // }
// function displayPage(result){
//     document.getElementById("myh1").textContent=result;


// }


// // foreach=the method is used to iterate over a the elements of an arrey and applay a specified function callback to the each element

// let numbers=[1,2,3,5,6]
// // numbers.forEach(display);
// // numbers.forEach(triple)
// // numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element,index,array){
//     array[index]=2*element;
// }

// function triple(element,index,array){
//     array[index]=3*element;
// }

// function square(element,index,array){
//     array[index]=Math.pow(element,2);
// }


// function display(elements){
//     console.log(elements);
// }

// array.forEach(function(element, index, array){
//     // code to execute
// });

// let fruits=["apple","banana","orange"]
// fruits.forEach(upperCase);
// fruits.forEach(display);


// function upperCase(element,index,array){
//     array[index]=element.toUpperCase();
// }


// function display(element){
//     console.log(element);
// }

// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(num){
//     console.log(num);
// });


// // map=accepts the call back and apply the function  each element to an array and return the new array
// const numbers = [1, 2, 3, 4];
// const squares=numbers.map(square)
// console.log(squares);

// function square(element){
//     return Math.pow(element,2)
// }
// const students = ["Rahul", "Anita", "Ravi", "Sneha"];

// const student=students.map(upperCase);
// console.log(student);
// function upperCase(element){
//     return element.toUpperCase();
// }



// filter= creates a new array by filtring out the elements
