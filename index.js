const form = document.querySelector('form');
const inputDivs = document.querySelectorAll('.inputs');
const emailInput = document.querySelector('#email');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault(); //this prevents form submission before validation

    inputDivs.forEach(inputDiv => { //loop through all the input divs
        const input = inputDiv.querySelector('input');
        const errorMessage = inputDiv.querySelector('.error-message');
        const errorIcon = inputDiv.querySelector('.error-icon');
        const emailValue = emailInput.value.trim();
        const inputValue = input.value.trim();

        let isValid = true; //check if the input is valid

        switch (input.id) {
            case 'name':
            case 'lastname':
            case 'password':
                isValid = inputValue !== ''; // is inputValue (NOT) empty? If inputValue is not empty, isValid is true
                break;
            case 'email':
                isValid = emailPattern.test(emailValue); // does email value match the email pattern?
                break;
        }
        if (isValid) { //if isValid is true, apply the following styles
            errorMessage.style.display = 'none';
            errorIcon.style.display = 'none';
            input.classList.remove('input-error');
        }
        else { //if isValid is false, apply the following styles
            errorMessage.style.display = 'block';
            errorIcon.style.display = 'block';
            input.classList.add('input-error');
        }
    });
});
// old code and errors
/**  if (inputValue === '' || !emailPattern.test(emailValue)) {
           errorMessage.style.display = 'block';
           errorIcon.style.display = 'block';
           input.classList.add("input-error");
       } else {
           errorMessage.style.display = 'none';
           errorIcon.style.display = 'none';
           input.classList.remove("input-error");
       }*/

