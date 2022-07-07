//Animação dos inputs text
const inputs = document.querySelectorAll('.input');
const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
};
const handleFocusOut = ({target}) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));


//Verificação Button
const button = document.querySelector('.login-button')
const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled','')
    }
}

inputs.forEach((input) => input.addEventListener('input',handleChange));