
async function getCategDetail(category) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let result = await response.json();
        if (result.meals && result.meals.length > 0) {
            console.log(result.meals);
            displayCategory(result.meals);
        } else {
            console.log('No meals found.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

console.log(getCategDetail('Seafood'));
// console.log(category[]);

function displayCategory(meals) {
    let cartoona = ``
     for (let i = 0; i < Math.min(meals.length, 20); i++) {
      cartoona +=   `
      <div class="col-md-3" data-idMeal="${meals[i].idMeal}">
      <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
          <img class="w-100" src="${meals[i].strMealThumb}" alt="" srcset="">
          <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
              <h3>${meals[i].strMeal.split(' ').slice(0,5).join(' ')}</h3>
          </div>
      </div>
    </div>
      `
      
     }
     
    document.getElementById('category').innerHTML = cartoona;
  
    
   }



$('#catData').on('click', '.col-md-3', function() {
    
    document.getElementById('mealCategory').classList.add('d-none');
    // document.getElementById('contactUS').classList.add('d-none');
    // document.getElementById('home').classList.add('d-none');
    // document.getElementById('searchContainer').classList.add('d-none');
    document.getElementById('categDetail').classList.remove('d-none')
    // Get the content of the h3 tag inside the clicked .col-md-3 element
    let h3Content = $(this).find('.meal-layer h3').text();
    
    
    console.log(h3Content);
    getCategDetail(h3Content);

    
//  
});





