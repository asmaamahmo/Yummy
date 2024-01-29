

async function getMealsByingred() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const result = await response.json();
        const ingreds = result.meals.map(ingred => ingred.strIngredient);
        return ingreds;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


async function getIngerd() {
    try {
        document.getElementById('mealCategory').classList.add('d-none')
        document.getElementById('contactUs').classList.add('d-none')
        document.getElementById('area').classList.add('d-none')
        document.getElementById('Ingredients').classList.remove('d-none')
        const ingred = await getMealsByingred();
        displayingreds(ingred);
        document.getElementById('home').classList.add('d-none');
        document.getElementById('searchContainer').classList.add('d-none');
    } catch (error) {
        console.error('Error fetching areas:', error);
    }
}

function displayingreds(ingreds) {
    let cartoona = '';
    for (let i = 0; i < Math.min(ingreds.length, 20); i++) {
        cartoona +=   `
        <div class="col-md-3">
            <div class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${ingreds[i]}</h3>
                <p>${ingreds[i].meals}</p>
            </div>
        </div>
        `;
    }
    document.getElementById('rowIngred').innerHTML = cartoona;
}


// function displayingreds(ingred) {
//     let cartoona = '';
//     for (let i = 0; i < Math.min(ingred.length, 20); i++) {
//         // Check if ingred[i] and ingred[i].strDescription are defined
//         const ingredient = ingred[i];
//         const description = ingredient && ingredient.strDescription ? ingredient.strDescription : '';
        
//         cartoona +=   `
//             <div class="col-md-3">
//                 <div class="rounded-2 text-center cursor-pointer">
//                     <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//                     <h3>${ingredient.strIngredient}</h3>
//                     <p>${description.split(' ').slice(0, 2).join(' ')}</p>
//                 </div>
//             </div>
//         `;
//     }
//     document.getElementById('rowIngred').innerHTML = cartoona;
// }
async function getIngredMeals(ingred) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
        const result = await response.json();
        console.log(result);
        displayIngredMeals(result.meals);
        return result.meals;
    } catch (error) {
        console.error('Error fetching meals by area:', error);
        return null;
    }
}
function displayIngredMeals(meal) {
    let cartoona = ``
     for (let i = 0; i < Math.min(meal.length, 20); i++) {
      cartoona +=   `
      <div class="col-md-3" data-idMeal="${meal[i].idMeal}">
      <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
          <img class="w-100" src="${meal[i].strMealThumb}" alt="" srcset="">
          <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
              <h3>${meal[i].strMeal.split(' ').slice(0,3).join(' ')}</h3>
          </div>
      </div>
    </div>
      `
      
     }
     
    document.getElementById('ingredData').innerHTML = cartoona;
  
    
   }

$('#rowIngred').on('click', '.col-md-3', function() {
    
    document.getElementById('area').classList.add('d-none');
    document.getElementById('home').classList.add('d-none');
    document.getElementById('Ingredients').classList.add('d-none');
//     // document.getElementById('searchContainer').classList.add('d-none');
    document.getElementById('ingredMeals').classList.remove('d-none')
//     // Get the content of the h3 tag inside the clicked .col-md-3 element
    let h3Content = $(this).find('h3').text();
    
    
    console.log(h3Content);
    getIngredMeals(h3Content);

    
//  
});

