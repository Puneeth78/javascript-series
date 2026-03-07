// if statement =if condition is true ceute some code 
// if not true ,do something else using is-else statement 

let age8=25;
if(age8>=30){
    console.log("eligable for vote ");  
}else{
    console.log("not eligable for vote");  
}

let time1=5;
if (time1<4){
    console.log("good morning");   
}else if(time1>4){
    console.log("early morning");
}else{
    console.log("good afternoon");
    
}

// for bollean variable
let isStudent1=true;
if(isStudent1){
    console.log("you are student");
    
}else{
    console.log("you are not a student");
    
}

// nested if 
let age1=25;
let license=true;
if(age1>=16){
    console.log("you are enough to drive");

    if(license){
        console.log("you have your liceance");
        
    }else{
        console.log("you dont have your liceance yet");
        
    }
    
}
else{
    console.log("you must be 16+ to drive a vechile");
    
}


const text=document.getElementById("text");
const mySubmit= document.getElementById("mySubmit");
const resultElement1=document.getElementById("resultElement");

let age2=18;
mySubmit.onclick=function() {
    age2=text.value;
    age2=Number(age2);
    if (age2>=18){

    resultElement1.textContent=`you are old enough to enter this site`
    }
    else if(age2>=25){
    resultElement1.textContent=`mow you drive the car perfectly`
    }

    else{
        resultElement1.textContent=`you must be 18+ to enter this site`

    }
    
}


// student marks 

const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let marks = 85;
mySubmit.onclick=function(){
    marks=myText.value;
    marks=Number(marks);

    if (marks >= 90) {
        resultElement.textContent=`Grade A+`;
    }
    else if (marks >= 75) {
        resultElement.textContent=`Grade A`;
    }
    else if (marks >= 50) {
        resultElement.textContent=`Grade B`;
    }
    else {
        resultElement.textContent=`Fail`;
    }
}

// .checked=property that determines the checked state of an html 
// checkbox or radio button element

const myCheckBox=document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const PayPalBtn=document.getElementById("PayPalBtn");
const mySubmitBtn=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent=`you are subscribed!`;

    }else{
        subResult.textContent=`you are not  subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent=`you are paying the visa`;
    } else if(masterCardBtn.checked){
        paymentResult.textContent=`you are paying with masterCard`;
    }else if(PayPalBtn.checked){
        paymentResult.textContent=`you are paying with PayPal`;
    }
    else{
        paymentResult.textContent=`you must select a payment type`
    }

}


// shortend if-else
// it is ashort-cut to write if else statement it helps to assign a variable based on the condition
// syntax=condition? code if true : code if false

let age=5;
let result=age>=18? "eligable for vote":"not eligable for vote"
console.log(result);

let time=9;
let message=time<=9?"good morning":"good afternoon"
console.log(message)


let isStudent=true;
let answer=isStudent?"you are a student":"you not a student"
console.log(answer)

let purchaseAmount=125;
let discount=purchaseAmount>=100?"we will provide 10% discount ": "discount is not available"
console.log(discount)


// switch statement=eggicient replacement of many if else statement
// A switch statement in JavaScript is used to execute one block of code from multiple choices based on the value of a variable.
let day="pizza";

switch(day){
    case 1:
        console.log("it is monday");
        break;
    case 2:
        console.log("it is tuseday");
        break;
    case 3:
        console.log("it is wensday");
        break;
    case 4:
        console.log("it is thursday");
        break;
    case 5:
        console.log("it is friday");
        break;
    case 6:
        console.log("it is saturday");
        break;
    case 7:
        console.log("it is sunday");
        break;
    default:
        console.log(`${day} it is not a day`)

}


// example for switch statement
let testScore=56;
let letterGrade;
switch(true){
    case testScore>=90:
        letterGrade="A";
        break;
    case testScore >=80:
        letterGrade="B";
        break;
    default:
        console.log("not a goodscore")
}
console.log(letterGrade);



