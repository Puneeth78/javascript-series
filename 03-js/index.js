let username1="puneeth";
console.log(username.charAt(5));
console.log(username.indexOf("e"));
console.log(username.lastIndexOf("e"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase("e"));
console.log(username.repeat(3));
console.log(username.startsWith("p"));
console.log(username.endsWith("p"));

let userName1="bro code";
let result=userName1.includes(" ");
if (result){
    console.log("you user name can include ' '" )
}else{
    console.log("userName1");
    
}

// telephone number
// replace method
let phoneNumber="123-456-7562";
phoneNumber=phoneNumber.replaceAll("-","*");
phoneNumber=phoneNumber.padStart("20","0");
console.log(phoneNumber);

// string slicing=creating a substring of a portion of a another string 
// string.slice(start,end)
const fullName="pun eeth"
let firstName=fullName.slice(4,8);
let firstName1=fullName.slice(-1);
console.log(firstName);
console.log(firstName1)

// email slicing example
const email="puneeth1@gmail.com"
let userName2=email.slice(email.indexOf("@")+1)
let userName3=email.slice(0,email.indexOf("@"))
console.log(userName2)
console.log(userName3)

// method chaining = (it is programing thenique )calling one method after another in 
// one continues line of code 

// ------NO METHOD CHAINING------
let userName5=window.prompt("enter your username")
userName5=userName5.trim();
let letter=userName5.charAt(0);
letter=letter.toUpperCase();

let extraCharacter=userName5.slice(1);
extraCharacter=extraCharacter.toLowerCase();
userName5=letter+extraCharacter;
console.log(userName5)

// ------METHOD CHAINING--------
userName=userName.trim().charAt(0).toUpperCase()+userName.trim().slice(1).toLowerCase();
console.log(userName)


// logical operator=used to combine or manupuklate the boolean (values)
// true or false

// ABS=&&
// OR=||
// NOT=!
const temp=100;
if (temp>=0 && temp<=30){
    console.log("the wheter is good")
}else if(temp>=100 || temp<=50){
    console.log("the wheather is freez")
}else{
    console.log("the wheather is sunny")
}


const isSunny=true;
if(!isSunny){
    console.log("sunny")
}
else{
    console.log("not sunny")
}

// = assignment operator
// == comparision operator(compare if value are equal)
// === strict equality operator (ocmpare if values & dataype are equal)
// !=  inequality operator 
// !== strict inequality operator

const PI=3.14;
if(PI!=="3.14"){
    console.log("that is PI")
}else{
    console.log("that is not pi")
}

// while loop
let username7="";
while(username7===""){
    username7=window.prompt("enter your name");
}
console.log(`hello ${username7}`)

let i1 = 5;

while (i >= 0) {
    console.log(i1);
    i1--;
}

// even number
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

// do while loop=same as while loop but it exceute atleast once
let userName;
do{
    userName=window.prompt("enter the user name: ")

}while(userName==="");
console.log(`hello ${userName}`);

let Num;
do{
    Num=window.prompt("enter the num greather than 10: ")
}while(Num<10);
console.log(`you entered : ${Num}`);


let loggedIn=false;
let username;
let password;
do{
    username=window.prompt("enter the username: ");
    password=window.prompt("enter the passwowrd :");
    if(username==="myusername" && password==="mypassword"){
        loggedIn=true;
        console.log("you are logged in!");
    }else{
        console.log("invalid credentials! please try again")
    }
}while(!loggedIn)


// for loop=repeat a block of code specific number of times
// limited amount of times 

for(let i=10; i>0; i--){
    if(i==5){
        continue;
    }else{
        console.log(i);
    }
   

}

// number guessing game

const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess a number b/w ${minNum} - ${maxNum}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++
        if(guess<answer){
            window.alert("to low try again");
        }
        else if(guess>answer){
            window.alert("to high try again");
        }
        else{
            window.alert(`corrects the answer was ${answer}. it tooks you ${attempts} attempts`);
            running=false;
        }
    }
    
}


// functions in javascript=is a section of reuseable code .
// declare code once ,i]use it whenever you want 
// call the function exceute that code 


function happyBirthday(username,age){  //parameter
    console.log(`happy birthday to you ${username}`)
    console.log(`you are ${age} years old`)
}
happyBirthday("puneetgh",25);     //argument

// function num is even or odd
function even_odd(num){
    if(num%2==0){
        console.log("num is even ")
    }
    else{
        console.log("num is odd")
    }
}
number=window.prompt("enter the number");
let num=Number(number);

even_odd(num);


// using short end if else

function isEven(number){
    return number %2==0? true:false
}
console.log(isEven(5))

function isValidEmail(email){
    if (email.includes("@")){
         return true;
    }
       
}
console.log(isValidEmail("puneeth@.com"))