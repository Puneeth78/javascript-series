// json=(javascript object files ) daya-interchange formate 
// used for exchange the data  between a server and web application 
// json files have {key:value} or [value1,value2,value3]

// json.stringijfy()=convert the js object to the json string
// json.parse()=convert the json string the js object

// const names=["puneeth","dhanush","yash","rajkumar"];
// const person={"name":"puneeth","age":30,"isEmployee":true,"hobbies":["driving","gaming"]}



// const people=[{"name":"dhanush","age":25,"isEmployee":false},
//               {"name":"yash","age":21,"isEmployee":true},
//               {"name":"rajkumar","age":30,"isEmployee":false}]


// const jsonstring=JSON.stringify(people);
// console.log(jsonstring);




// const jsonNames=`["puneeth","dhanush","yash","rajkumar"]`;
// const jsonPerson=`{"name":"puneeth","age":30,"isEmployee":true,"hobbies":["driving","gaming"]}`;



// const jsonPeople=`[{"name":"dhanush","age":25,"isEmployee":false},
//               {"name":"yash","age":21,"isEmployee":true},
//               {"name":"rajkumar","age":30,"isEmployee":false}]`;

// const parsedData=JSON.parse(jsonNames);
// console.log(parsedData);


// fetch the json file
fetch("person.json")
.then(response=>response.json())
.then(value=>console.log(value))