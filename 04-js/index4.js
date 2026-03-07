// variable scope =where a variable scope is recognisable and accessable (local and global)


// local=any variable declared outside the function

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
let fruit=["apple","orange","banana"];
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



let fruit1=["apple","orange","banana"];
for(let i=fruit1.length; i>=0; i++){
    console.log(fruit1[i]);
}