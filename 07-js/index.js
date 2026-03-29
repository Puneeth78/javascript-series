// // let div=document.querySelector("div");
// // console.log(div);

// // let id =div.getAttribute("id");
// // console.log(id);

// // let div=document.querySelector("div");

// // div.style.backgroundColor="green";

// // let newHeading=document.querySelector("p");
// // newHeading.innerHTML="<i>hi,Iam new!</i>."

// // document.querySelector("body").prepend(newHeading);

// // let para=document.querySelector("p");
// // para.remove();

// //access the button event
// let btn1=document.querySelector("#btn1");
// // btn1.onclick=(evt)=>{
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX,evt.clientY);
// //     // console.log("btn1 clicked");
// //     // let a=25;
// //     // a++;
// //     // console.log(a);
// // }

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked ")
// })

// // let div=document.querySelector("div");
// // access box
// // let box1=document.querySelector("#box1");
// // box1.onclick=()=>{
// //     console.log("you are inside the box")
// //     let b=25;
// //     b--;
// //     console.log(b);
// // }


// setTimeout(function() {
//   console.log("Hello World");
// }, 1000);
// var x=10;
// var x=20; //redeclaration 
// x=30;
// console.log(x);

// let a=10;
// a=20;
// console.log(a);

// let student = {
//   name: "Punith",
//   grade: "A",
//   subjects: ["Math", "Science", "English"],

//   displayInfo: function() {
//     console.log("Name: " + this.name);
//     console.log("Grade: " + this.grade);
//     console.log("Subjects: " + this.subjects);
//   }
// };

// student.displayInfo();

// let Car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// console.log(Car.model);
// console.log(Car.year);

// let day = 2;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid day");
// }

// function changeText(){
//   document.getElementById("title").innerHTML = "Welcome";
// }

// let x = document.getElementsByClassName("demo");
// x[0].style.color = "red";

// let a = document.querySelector(".text");
// a.style.color = "green";

// function changeText(){
//   document.getElementById("title").innerHTML="welcome";
// }

// let p=document.getElementsByClassName("demo");
// p[0].style.color="blue"

// let x=document.querySelectorAll("p");
// x[1].style.color="blue";

// function sayHello() {
//     alert("Hello from inline event!");
// }


// const btn=document.getElementById("btn");

// btn.addEventListener('click',function(){
//     alert("button clicked");
// })

// const button = document.getElementById('myButton');
//     button.addEventListener('click', function() {
//         alert("Button clicked");
// });


// const inputField=document.getElementById("myInput");

// inputField.addEventListener('focus', function() {
//             inputField.style.backgroundColor = "#ffff99"; // light yellow
// });


const btn =document.getElementById("myButton");
btn.addEventListener("click",function(){
    console.log("button is clicked");
});
