// variable scope =where a variable scope is recognisable and accessable (local and global)


// local=any variable declared inside the function

// function2();
// function function1(){
//     let x=1;
//     console.log(x);
// }
// function1();
 
// function function2(){
//     let y=1;  //local variable
//     console.log()
    
// }

// // global variable=any variable decleare outside the function the function
// let x1=1;  //global variable
// function function12(){
//     console.log(x1);
// }
// function12();


// array=it ia a variable like structure that hold the more then one value
// let fruit=["apple","orange","banana"];
// fruit[0]="pinapple"  //update the element
// fruit.push("pomogranate");    //add the element at last
// fruit.pop();    //remove the last element
// fruit.unshift("mango");   //add begining to the array
// fruit.shift();        //remove the begining element
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);


// let numOfFruits=fruit.length;
// console.log(numOfFruits)
// let index=fruit.indexOf("apple");
// console.log(index);

// fruit.sort();
// console.log(fruit)
// for(let i=fruit.length;i>=0;i--){
//     console.log(fruit[i]);
// }

// spread operator =allows iterable such as array and strings to be expanded int0 seperate elements

let number1=[1,2,3,4];
let number2=[5,6,7];
let number3=[...number1,...number2];
console.log(number3);

let maximum=Math.max(...number3);
console.log(maximum);

let minimum=Math.min(...number3);
console.log(minimum);

let username="puneeth";
let letters=[...username].join("|");
console.log(letters);


// Spread Operator with Objects
let person={
    name:"puneeth",
    age:21,
};

let student={
    ...person,
    course : "ise"

};
console.log(student);

// Spread Operator in Function Arguments
function sum(a,b,c){
    return a+b+c;

}
let nums=[5, 6,7];
console.log(sum(...nums));

// rest parameters=they bundel of seperate element into Aarray
function openFridge(...foods){
    console.log(foods);

}

const food1="pizza";
const food2="dosa";
const food3="idly";
const food4="palav";

openFridge(food1,food2,food3,food4);


// Sum of Numbers


// function sum(...nums){
//     let total=0;

//     for(let num of nums){
//         total+=num;
//     }
//     return total;
// }   

// console.log(sum(10,20,30,10,40));


// function combined(...number){
//     console.log(number);
// }
// const num1=1;
// const num2=2;
// const num3=3;
// const num4=4;

// combined(num1,num2,num3,num4);


function getAverege(...numbers){
    let result=0;
    for (i of numbers){
        result+=i;

    }
    return result/numbers.length;

}

const total=getAverege(80,56,85,96,63,56,96,85);
console.log(total);



// combine the strings using rest parameters
function combineStrings(...strings){
    return strings.join(" ");
}
const fullname=combineStrings("|puneeth","davanageer")
console.log(fullname);
