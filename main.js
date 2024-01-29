



function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
   
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector('.fa-x').classList.remove('d-none');
    document.querySelector('.open').classList.add('d-none');
    $('.links ul li').each(function(index) {
        $(this).delay(index * 100).animate({top: '0' }, 500);
        
    });

  }
  
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector('.fa-x').classList.add('d-none');
    document.querySelector('.open').classList.remove('d-none');
    $('.links ul li').each(function(index) {
        $(this).delay(index * 100).animate({top: '300px' }, 500 )
        
    });
    
  }
//   async function searchByName(query) {
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         display(result.meals);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// async function searchByName(query) {
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         display(result.query);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

async function searchByName(query) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const result = await response.json();
        display(result.meals);
        return result.meals;  // Return the result for further use
    } catch (error) {
        console.error('Error:', error);
        return null;  // Return null or handle the error appropriately
    }
}
async function searchByirstLetter(queryL) {
    try {
        const response = await fetch(`https://www.themeaLdb.com/api/json/v1/1/search.php?f=${queryL}`);
        const result = await response.json();
        display(result.meals);
        return result.meals;  // Return the result for further use
    } catch (error) {
        console.error('Error:', error);
        return null;  // Return null or handle the error appropriately
    }
}
async function mealCategories() {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const result = await response.json();
        displayCategories(result.categories);
        return result.categories;  // Return the result for further use
    } catch (error) {
        console.error('Error:', error);
        return null;  // Return null or handle the error appropriately
    }
}

async function getResponse() {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`);
        let result = await response.json();
        if (result.meals && result.meals.length > 0) {
            console.log(result.meals);
            display(result.meals);
        } else {
            console.log('No meals found.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



// Example: fetching data for a specific query (e.g., 'chicken')
console.log(getResponse('chicken'));
 
function display(result) {
  let cartoona = ``
   for (let i = 0; i < result.length; i++) {
    cartoona +=   `
    <div class="col-md-3 " data-idMeal="${result[i].idMeal}">
    <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${result[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
            <h3>${result[i].strMeal.split(' ').slice(0,2).join(' ')}</h3>
        </div>
    </div>
  </div>
    `
    
   }
   
  document.getElementById('rowData').innerHTML = cartoona;

  
 }

 function displayCategories(categories) {
    
    let cartoona = ``
     for (let idCategory = 0; idCategory < categories.length; idCategory++) {
      cartoona +=   `
      <div class="col-md-3">
      <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
          <img class="w-100" src="${categories[idCategory].strCategoryThumb}" alt="" srcset="">
          <div class="meal-layer position-absolute text-center text-black p-2">
              <h3>${categories[idCategory].strCategory}</h3>
              <p>${categories[idCategory].strCategoryDescription.split(' ').slice(0,12).join(' ')}</p>
          </div>
      </div>
    </div>
      `
      
     }
     
     console.log('Displaying categories:', categories);
    document.getElementById('catData').innerHTML = cartoona;
  
    
   }
  
   async function getCategories() {
    try {
        document.getElementById('mealCategory').classList.remove('d-none');
        const categories = await mealCategories();
        displayCategories(categories);
        document.getElementById('home').classList.add('d-none');
        document.getElementById('searchContainer').classList.add('d-none');
    } catch (error) {
        console.error('Error fetching meal categories:', error);
    }
}
// function getCategories() {
   
//     mealCategories().then((categories) => {
//         document.getElementById('mealCategories').classList.remove('d-none');
//         displayCategories(categories);  // Pass the categories data to the display function
//         document.getElementById('home').classList.add('d-none');
//         document.getElementById('searchContainer').classList.add('d-none');
//     }).catch((error) => {
//         console.error('Error fetching meal categories:', error);
//     });
// }

 function showSearchInputs() {
    document.getElementById('searchContainer').classList.remove('d-none');
    document.getElementById('home').classList.add('d-none');
    document.getElementById('detailById').classList.add('d-none');
    document.getElementById('contactUs').classList.add('d-none')

   
 }


function displaySearch(result) {
    let cartoona = ``
   for (let i = 0; i < result.length; i++) {
    cartoona +=   `
    <div class="col-md-3">
    <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${result[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
            <h3>${result[i].strMeal}</h3>
        </div>
    </div>
  </div>
    `
}
document.getElementById('SearchData').innerHTML = cartoona;
}
document.getElementById('searchInput').addEventListener('input', async function () {
    const searchTerm = this.value.toLowerCase();

    const result = await searchByName(searchTerm);
    
    console.log(result);
    displaySearch(result);
});


function displaySearchFrist(result , queryL) {
    let cartoona = ``;
    

    if (result && result.length) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].strMeal.charAt(0).toLowerCase() === queryL) {
                cartoona += `
                <div class="col-md-3">
                    <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${result[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${result[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
                `;
            }
        }
    }

    if (!cartoona) {
        console.error('No valid data found for the given first letter:', firstLetter);
    }

    document.getElementById('SearchData').innerHTML = cartoona;
}
document.getElementById('firstLetterInput').addEventListener('input', async function () {
    const firstLetterInput = this.value.toLowerCase(); // use firstLetterInput to avoid naming conflicts

    const result = await searchByirstLetter(firstLetterInput);
    
    console.log(result);
    
    displaySearchFrist(result, firstLetterInput);
});

