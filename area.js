
async function getMealsByArea() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const result = await response.json();
        const areas = result.meals.map(area => area.strArea);
        return areas;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function getArea() {
    try {
        document.getElementById('contactUs').classList.add('d-none');
        
        document.getElementById('ingredMeals').classList.add('d-none');
        document.getElementById('Ingredients').classList.add('d-none');
        document.getElementById('araeMeals').classList.add('d-none');
        document.getElementById('area').classList.remove('d-none');
        document.getElementById('categDetail').classList.add('d-none');
        document.getElementById('mealCategory').classList.add('d-none');
        
        const areas = await getMealsByArea();
        displayArea(areas);
        document.getElementById('home').classList.add('d-none');
        document.getElementById('searchContainer').classList.add('d-none');
        document.getElementById('detailById').classList.add('d-none');
    } catch (error) {
        console.error('Error fetching areas:', error);
    }
}

function displayArea(areas) {
    let cartoona = '';
    for (let i = 0; i < areas.length; i++) {
        cartoona +=   `
        <div class="col-md-3 w-25">
            <div class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${areas[i]}</h3>
            </div>
        </div>
        `;
    }
    document.getElementById('rowArea').innerHTML = cartoona;
}

// ?-----------------------------------------------------------------
async function getAreaMeals(area) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const result = await response.json();
        console.log(result);
        displayAreaMeals(result.meals);
        return result.meals;
    } catch (error) {
        console.error('Error fetching meals by area:', error);
        return null;
    }
}

function displayAreaMeals(meal) {
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
     
    document.getElementById('areaData').innerHTML = cartoona;
  
    
   }
   $('#rowArea').on('click', '.col-md-3', function() {
    
        document.getElementById('area').classList.add('d-none');
        document.getElementById('home').classList.add('d-none');
        document.getElementById('categDetail').classList.add('d-none');
    //     // document.getElementById('searchContainer').classList.add('d-none');
        document.getElementById('araeMeals').classList.remove('d-none')
    //     // Get the content of the h3 tag inside the clicked .col-md-3 element
        let h3Content = $(this).find('h3').text();
        
        
        console.log(h3Content);
        getAreaMeals(h3Content);
    //  

   
    });

 










