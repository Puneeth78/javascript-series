// function hello(){
//     console.log("hello")
// }
// setTimeout(hello,3000);

// setTimeout(()=>{
//     console.log("hello")
// },4000);

// console.log("puneeth")

// callback function
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,(a,b)=>{
//      console.log(a+b);
// });

// callbackhell

// function getdata(dataId,getNextData){

//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
        

//     },2000);
    
// }
// // callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
 
//     });
// });

// promises
// let mypromise=new Promise((resolve,reject)=>{
//     let sucess=false;
//     if (sucess){
//         resolve("promise is resolve");
//     }
//     else{
//         reject("promise is reject");
//     }
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("sucess");
//         if (getNextData){
//             getNextData();
//         }
        

//     },5000);
        
//     }) ;

    
    
// }



// Create a Promise
// const task = new Promise((resolve, reject) => {
//     const success = true; // change to false to see reject

//     setTimeout(() => {
//         if (success) {
//             resolve("Task completed successfully!");
//         } else {
//             reject("Task failed!");
//         }
//     }, 2000); // simulate 2 seconds delay
// });

// // Using .then() and .catch()
// task
//     .then((result) => {
//         console.log("Result:", result); // runs if resolved
//     })
//     .catch((error) => {
//         console.log("Error:", error);  // runs if rejected
//     });

// console.log("Promise created, waiting for result...");



// let promise =new Promise((resolve,reject)=>{
//     console.log("i am a promise ");
//     reject("some error occured");
// });

//promise chain
// function asyncFun1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             const sucess=true;
//             if (sucess){
//                 resolve("completed task sucessfully")
//             }
//             else{
//                   reject("error not getting data")

//             }
          
//         },5000);

//     });
// }

// function asyncFun2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             const sucess=true;
//             if (sucess){
//                 resolve("completed task sucessfully")
//             }
//             else{
//                   reject("error not getting data")

//             }
          
//         },3000);

//     });
// }

// console.log("fetching data 1")
// let p1=asyncFun1();
// p1.then((res)=>{
//     console.log("result:",res);
// });
// p1.catch((error)=>{
//     console.log("error:",error)
// })


// console.log("fetching data 2")
// let p2=asyncFun2();
// p2.then((res)=>{
//     console.log("result:",res);
// });
// p2.catch((error)=>{
//     console.log("error:",error)
// })



// ex2 of promise chain
// function  getData(dataId){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1",dataId)
//             const sucess=true;
//             if(sucess){
//                 resolve("task completed sucessfully")
//             }
//             else{
//                 reject("not completed sucessfully")

//             }
//         },1000);
//     })
// }

// getData(1).then((res)=>{
//    return getData(2)
// })
// .then((res)=>{
//     console.log("result : ",res)
// })

// console.log("task completed sucessfully wait a second")

// or

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("task completed successfully");
//         }, 2000);
//     });
// }




// async-await
// async function hello(){
//     console.log("hello")


function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",id);
            resolve("done");
        }, 2000);
    });
}

async function getWheatherData() {
    await getData(1);
    await getData(2);
}

getWheatherData();
// async function getWheatherData() {
//     let p1 = getData(1);
//     let p2 = getData(2);

//     await p1;
//     await p2;
// }


// getWheatherData();




// async function fetchData() {
//     console.log("fetching data 1");
//     let res1=await getData(1);
//     console.log("result 1:",res1);

//     console.log("fetching data 1");
//     let res2=await getData(1);
//     console.log("result 1:",res2);
    
// }

// fetchData();

// console.log("task is completed sucessfullt wait for result")

// json files