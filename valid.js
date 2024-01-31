

// function validateName() {
//     var nameInput = document.getElementById('nameInput').value.trim();
//     var nameRegex = /^[A-Za-z]+$/; 

//     if (nameInput === '') {
//         document.getElementById('nameAlert').innerText = 'Please enter your name.';
//     } else if (!nameRegex.test(nameInput)) {
//         document.getElementById('nameAlert').innerText = 'Invalid name. Only alphabets are allowed.';
//     } else {
//         document.getElementById('nameAlert').innerText = '';
//         alert('Name entered successfully: ' + nameInput);
//     }
// }

// function validateName() {
//     var nameInput = document.getElementById('nameInput').value.trim();
//     var nameRegex = /^[A-Za-z]+$/; 
//     if (nameInput === '') {
               
//            } else if (!nameRegex.test(nameInput)) {
//             //    document.getElementById('nameAlert').innerText = 'Invalid name. Only alphabets are allowed.';
//         $('#nameInput').on({
//             function() {
//                 document.getElementById('nameAlert').classList.remove('d-none')

//             }
//         });
//     }
// }

//    function inputsValidation() {
//         let nameInput,emailInput,phoneInput,ageInput,passwordInput,repasswordInput = $('#nameInput,emailInput,phoneInput,ageInput,passwordInput,repasswordInput').val().trim();
//         let nameRegex = /^[A-Za-z]+$/;
//         let phoneRegex = /^[0-9]{11}$/;
//         let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         let ageRegex = /^[1-9]\d?$/;
//         let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//         let repassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        


//         if (nameInput === '') {
//             // Handle empty input if needed
//         } else if (!nameRegex.test(nameInput)) {
//             $('#nameAlert').removeClass('d-none');
//         } else {
//             $('#nameAlert').addClass('d-none');
            
//         }
//         if (phoneInput === '') {
//             // Handle empty input if needed
//         } else if (!phoneRegex.test(phoneInput)) {
//             $('#phoneAlert').removeClass('d-none');
//         } else {
//             $('#phoneAlert').addClass('d-none');
            
//         }
//         if (emailInput === '') {
//             // Handle empty input if needed
//         } else if (!emailRegex.test(emailInput)) {
//             $('#repassAlert').removeClass('d-none');
//         } else {
//             $('#repassAlert').addClass('d-none');
            
//         }
//         if (ageInput === '') {
//             // Handle empty input if needed
//         } else if (!ageRegex.test(ageInput)) {
//             $('#ageAlert').removeClass('d-none');
//         } else {
//             $('#ageAlert').addClass('d-none');
            
//         }
//         if (passwordInput === '') {
//             // Handle empty input if needed
//         } else if (!passRegex.test(passwordInput)) {
//             $('#passAlert').removeClass('d-none');
//         } else {
//             $('#passAlert').addClass('d-none');
            
//         }
//         if (repasswordInput === '') {
//             // Handle empty input if needed
//         } else if (!repassRegex.test(repasswordInput)) {
//             $('#repassAlert').removeClass('d-none');
//         } else {
//             $('#repassAlert').addClass('d-none');
            
//         }
        


//     }

function inputsValidation() {
    let nameInput = $('#nameInput').val().trim();
    let emailInput = $('#emailInput').val().trim();
    let phoneInput = $('#phoneInput').val().trim();
    let ageInput = $('#ageInput').val().trim();
    let passwordInput = $('#passwordInput').val().trim();
    let confirmPasswordInput = $('#repasswordInput').val().trim();

    let nameRegex = /^[A-Za-z]+$/;
    let phoneRegex = /^[0-9]{11}$/;
    let emailRegex = /[a-z0-9]+@gmail.com/;
    let ageRegex = /^[1-9]\d?$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // let repassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (nameInput === '') {
        //
    } else if (!nameRegex.test(nameInput)) {
        $('#nameAlert').removeClass('d-none');
    } else {
        $('#nameAlert').addClass('d-none');
    }

    if (phoneInput === '') {
        //
    } else if (!phoneRegex.test(phoneInput)) {
        $('#phoneAlert').removeClass('d-none');
    } else {
        $('#phoneAlert').addClass('d-none');
    }

    if (emailInput === '') {
        //
    } else if (!emailRegex.test(emailInput)) {
        $('#emailAlert').removeClass('d-none');
    } else {
        $('#emailAlert').addClass('d-none');
    }

    if (ageInput === '') {
        //
    } else if (!ageRegex.test(ageInput)) {
        $('#ageAlert').removeClass('d-none');
    } else {
        $('#ageAlert').addClass('d-none');
    }

    if (passwordInput === '' || confirmPasswordInput === '') {
       
    } else if (!passwordRegex.test(passwordInput) || passwordInput !== confirmPasswordInput) {
        $('#passwordAlert').removeClass('d-none');
        $('#repasswordAlert').removeClass('d-none');
    } else {
        $('#passwordAlert').addClass('d-none');
        $('#repasswordAlert').addClass('d-none');
    }

    if (
        $('#nameAlert').hasClass('d-none') &&
        $('#phoneAlert').hasClass('d-none') &&
        $('#emailAlert').hasClass('d-none') &&
        $('#ageAlert').hasClass('d-none') &&
        $('#passwordAlert').hasClass('d-none') &&
        $('#repasswordAlert').hasClass('d-none')
    ) {
        $('#submitBtn').prop('disabled', true);
    } else {
        $('#submitBtn').prop('disabled', false);
    }
}

$(document).ready(function() {
    
    $('#nameInput, #emailInput, #phoneInput, #ageInput, #passwordInput, #confirmPasswordInput').on('input', function() {
        inputsValidation();
    });
});





   
