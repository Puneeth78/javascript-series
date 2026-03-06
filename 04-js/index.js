// variable scope =where a variable scope is recognisable and accessable (local and global)


// local=any variable declared outside the function

function2();
function function1(){
    let x=1;
    console.log(x);
}
function1();
 
function function2(){
    let y=1;  //local variable
    console.log()
    
}

// global variable=any variable decleare outside the function the function
let x1=1;  //global variable
function function12(){
    console.log(x1);
}
function12();




