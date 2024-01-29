
// $('#category').on('click', '.col-md-3', function() {
//     // Log the clicked element to inspect its structure
//     console.log(this);
//     console.log(meals[0].strMealThumb);
//     // Assuming you have some way to get the meal ID from the clicked element
//     const mealId = $(this).data('idMeal'); // Adjust this line based on your HTML structure

//     document.getElementById('home').classList.add('d-none');
//     document.getElementById('categDetail').classList.add('d-none')
//     document.getElementById('detailById').classList.remove('d-none');
    
//     getCategDetailId(mealId);
// });

// // Function to fetch category details by ID
// async function getCategDetailId(categoryId) {
//     try {
//         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryId}`);
//         let result = await response.json();
//         if (result.meals && result.meals.length > 0) {
//             console.log(result.meals);
//             displayCategoryById(result.meals);
//         } else {
//             console.log('No meals found.');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Example usage (where categoryId is the actual ID of a meal)
// getCategDetailId(categoryId);


// function displayCategoryById(meals) {
//     let cartoona = `    
//     <div class="col-md-4">
//        <img class="w-100 rounded-3" src="${meals.strMealThumb}" alt="">
//        <h2>${meals.strMeal}</h2>
//     </div>
//     <div class="col-md-8">
//        <h2>Instructions</h2>
//        <p>${meals.strInstructions}</p>
//        <h3><span class="fw-bolder">Area : </span>${meals.strArea}</h3>
//        <h3><span class="fw-bolder">Category : </span>${meals.strCategory}</h3>
//        <h3>Recipes :</h3>
//        <ul class="list-unstyled d-flex g-3 flex-wrap">
//           <li class="alert alert-info m-2 p-1">${meals.strMeasure1} ${meals.strIngredient1}</li>
//           <li class="alert alert-info m-2 p-1">5 tablespoons Soy Sauce</li>
//           <li class="alert alert-info m-2 p-1">1 Lemon</li>
//           <li class="alert alert-info m-2 p-1">3 cloves Garlic</li>
//           <li class="alert alert-info m-2 p-1">3 parts Onion</li>
//           <li class="alert alert-info m-2 p-1">4 tbs Olive Oil</li>
//           <li class="alert alert-info m-2 p-1">1 cup Water</li>
//           <li class="alert alert-info m-2 p-1">1 pinch Salt</li>
//     </ul>

//     <h3>Tags :</h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">

//     </ul>

//     <a target="_blank" href="https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/"
//         class="btn btn-success">Source</a>
//     <a target="_blank" href="https://www.youtube.com/watch?v=xOQON5_S7as" class="btn btn-danger">Youtube</a>
// </div>
//     `
   
     
//     document.getElementById('detailId').innerHTML = cartoona;
  
    
//    }
   

// $('#category', '#rowData').on('click', '.col-md-3', function() {
//     // Log the clicked element to inspect its structure
//     console.log(this);

//     // Assuming you have some way to get the meal ID from the clicked element
//     const mealId = $(this).data('idmeal'); // Adjust this line based on your HTML structure

//     document.getElementById('home').classList.add('d-none');
//     document.getElementById('categDetail').classList.add('d-none');
//     document.getElementById('detailById').classList.remove('d-none');

//     getCategDetailId(mealId);
// });

$('#category, #rowData ,#areaData , #ingredData').on('click', '.col-md-3', function() {
   
    console.log(this);

    
    const mealId = $(this).data('idmeal'); 
    document.getElementById('araeMeals').classList.add('d-none')
    document.getElementById('ingredMeals').classList.add('d-none')
    document.getElementById('home').classList.add('d-none');
    document.getElementById('categDetail').classList.add('d-none');
    document.getElementById('detailById').classList.remove('d-none');

    getCategDetailId(mealId);


})

// $('#rowData').on('click', '.col-md-3', function(){
//     const mealId = $(this).data('idmeal'); 
//     document.getElementById('home').classList.add('d-none');
//     document.getElementById('categDetail').classList.add('d-none');
//     document.getElementById('detailById').classList.remove('d-none');

//     getCategDetailId(mealId);
// });
async function getCategDetailId(mealId) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        let result = await response.json();
        console.log(result);

        if (result.meals && result.meals.length > 0) {
            console.log(result.meals);
            displayCategoryById(result.meals[0]); 
        } else {
            console.log('No meals found.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// getCategDetailId(categoryId);

function displayCategoryById(meal) {
    let cartoona = `    
    <div class="col-md-4">
       <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
       <h2>${meal.strMeal}</h2>
    </div>
    <div class="col-md-8">
       <h2>Instructions</h2>
       <p>${meal.strInstructions}</p>
       <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
       <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
       <h3>Recipes :</h3>
       <ul class="list-unstyled d-flex g-3 flex-wrap">
       <li class="alert alert-info m-2 p-1">${meal.strMeasure1} ${meal.strIngredient1}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure2} ${meal.strIngredient}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure3} ${meal.strIngredient3}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure4} ${meal.strIngredient4}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure5} ${meal.strIngredient5}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure6} ${meal.strIngredient6}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure7} ${meal.strIngredient7}</li>
       <li class="alert alert-info m-2 p-1">${meal.strMeasure8} ${meal.strIngredient8}</li>
 </ul>

 <h3>Tags :</h3>

<ul class="list-unstyled d-flex g-3 flex-wrap">
                    
        <li class="alert alert-danger m-2 p-1">SideDish</li>
        <li class="alert alert-danger m-2 p-1">Speciality</li>
                </ul>


 <a target="_blank" href="https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/"
     class="btn btn-success">Source</a>
 <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
</div>
    </div>
    `

    document.getElementById('detailId').innerHTML = cartoona;
}
