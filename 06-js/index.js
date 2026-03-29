// let button=document.getElementById("myId");
// console.log(button);

// let headings=document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let paras=document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);


// let elements=document.querySelector("#myId");
// console.dir(elements);

// tag Name
// let firstEle=document.querySelector("p");
// console.dir(firstEle);

// inner text
// let div=document.querySelector("div");
// console.dir(div);

// let variable=document.getElementById("demo");
// variable.append("from apna collage students");
// console.log(variable);

// let h2=document.querySelector("h2");
// // h2.append("from apna collage students");
// console.log(h2.innerText);
// h2.innerText="abe";
// h2.innerText


let divs=document.querySelectorAll(".box");
// divs[0].innerText="puneeth"
// divs[1].innerText="puneeth"
// divs[2].innerText="puneeth"
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++
}

