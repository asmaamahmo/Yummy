


async function showContacts() {
    try {
        document.getElementById('contactUs').classList.remove('d-none');
    document.getElementById('searchContainer').classList.add('d-none');

        document.getElementById('ingredMeals').classList.add('d-none');
        document.getElementById('home').classList.add('d-none');
        document.getElementById('Ingredients').classList.add('d-none');
        document.getElementById('araeMeals').classList.add('d-none');
        document.getElementById('detailById').classList.add('d-none');
        document.getElementById('categDetail').classList.add('d-none');
        document.getElementById('mealCategory').classList.add('d-none');
    } catch (error) {
        console.error('Error fetching areas:', error);
    }
}



