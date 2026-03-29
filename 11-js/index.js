// fetch=function used for making http request to fetch resource
// (json style data,images,files)
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>response.json())
// .then(data=>console.log(data.name))
// .catch(error=>console.log(error));


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new error("could not fetch resource")
//     }

//     return response.json();

// })
// .then(data=>console.log(data.height))
// .catch(error=>console.log(error));



async function fetchData() {
    try{

        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch the resource");
        }
        const data=await response.json();
        const pokemonSprite=data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
        imgElement.style="block";
    }
    catch(error){
        console.log(error);
    }
} 

