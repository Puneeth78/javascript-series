const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.SearchBtn');
const recipeContainer=document.querySelector('.recipe-container');
const recipeDetailsContent=document.querySelector('.recipe-details-content');
const recipeCloseBtn=document.querySelector('.recipe-close-btn');

// function to gt recipies
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML="<h2>Fetching recipes...</h2>";
    const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipeContainer.innerHTML="";

     if (!response.meals) {
        recipeContainer.innerHTML = "<h2>No recipes found 😢</h2>";
        return;
    }

    response.meals.forEach(meal=>{
        const recipeDiv=document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory}</span> category</p>
        
        
        `
        const button=document.createElement('button');
        button.textContent="View Recipe";
        recipeDiv.appendChild(button);

        // Adding addEventListener to recipe button
        button.addEventListener('click',()=>{
            openRecipePopup(meal);
        });



        recipeContainer.appendChild(recipeDiv);
    });
    // console.log(response.meals[0]);

}



const fetchIngredients = (meal) => {
    let ingredients = "";

    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients += `<li>${ingredient} - ${measure}</li>`;
        }
    }

    return ingredients;
};




const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3 >Ingredients:</h3>
        <ul class="IngredientsList">${fetchIngredients(meal)}</ul>  

        <div>
           <h3>Instructions:</h3>
           <p class="recipeInstructions">${meal.strInstructions}</p>
        </div>
    `;


    
    // recipeDetailsContent.parentElement.style.display = "block";

    document.querySelector('.recipe-details').style.display = "block";
};

recipeCloseBtn.addEventListener("click", () => {
    document.querySelector('.recipe-details').style.display = "none";
});

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();   //help from autorefelect
    const searchInput=searchBox.value.trim();
    fetchRecipes(searchInput);
})