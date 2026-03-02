// accept user input

// easy way=window prompt
// professional way =html textbox

let username;
username=window.prompt("what's your user name?")
console.log(username);

// professional way
let username;
document.getElementById("mySubmit").onclick=function() {
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`;
    console.log(username)
    
}



     


// type conversion
let age=window.prompt("entere the age");
age=Number(age);
age+=1

console.log(age)
console.log(typeof(age));

convert string into all types
let x="puneeth"
let y="puneeeth"
let z="puneeth"

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof(x));
console.log(y,typeof(y));
console.log(z,typeof(z));

constant = a varioable cannot be changed
const PI=3.142;
let radius;
let circumference;


radius=window.prompt("enter the radius:");
radius=Number(radius);

circumference=2*pi*radius;
console.log(circumference);

// circumference project
document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("result").textContent=circumference + "cm";
}
// rectangle
document.getElementById("calculateBtn").onclick=function(){
    let length=document.getElementById("lengthInput").value;
    let width=document.getElementById("widthInput").value;
    let area=length*width;
    document.getElementById("result").textContent="Area="+area
        
}


//counter
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increseBtn=document.getElementById("increseBtn");
const countLabel=document.getElementById("countLabel");
let count=0;

increseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}

resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}


// Math operators
let x=10;
let y=3;
let z;
z=Math.round(y);
z=Math.floor(x);
z=Math.ceil(x)
z=Math.trunc(x)
z=Math.pow(x,y)
z=Math.sqrt(x)
z=Math.log(x)
console.log(z);

// random number generator

const min=50;
const max=100;
let randNum=Math.floor(Math.random()*min-max) +max;
console.log(randNum)


// random number generator
const myButton=document.getElementById("myButton");
const Label1=document.getElementById("Label1");
const Label2=document.getElementById("Label2");
const Label3=document.getElementById("Label3");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick=function(){
    randomNum1=Math.floor(Math.random() *max)+min;
    randomNum2=Math.floor(Math.random() *max)+min;
    randomNum3=Math.floor(Math.random() *max)+min;    
    Label1.textContent=randomNum1;
    Label2.textContent=randomNum2;
    Label3.textContent=randomNum3;
}





