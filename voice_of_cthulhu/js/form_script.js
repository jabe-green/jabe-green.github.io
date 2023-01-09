'use strict'
//form working
let input_name = document.querySelector('input.inviting__username');

let input_tel = document.querySelector('input.inviting__tel');

let name_invalid = document.querySelector('p.inviting__name-invalid');
let tel_invalid = document.querySelector('p.inviting__tel-invalid');

//accept-screen apperance
let form = document.querySelector('div.form-accepted');

let form_button = document.querySelector('button.form-accepted__ok');

let request_button = document.querySelector('button.inviting__request');

let isActive = false;
let isTransEnded = true;

request_button.addEventListener('click', () => {
    if(input_name.checkValidity() == false) {
        name_invalid.classList.remove('inviting_inactive');
        input_name.classList.add('inviting__input_invalid');
    } else {
        name_invalid.classList.add('inviting_inactive');
        input_name.classList.remove('inviting__input_invalid');
    }

    if(input_tel.checkValidity() == false) {
        tel_invalid.classList.remove('inviting_inactive');
        input_tel.classList.add('inviting__input_invalid');
    } else {
        tel_invalid.classList.add('inviting_inactive');
        input_tel.classList.remove('inviting__input_invalid');
    }
    
    if(input_name.checkValidity() == false || input_tel.checkValidity() == false) {
        return;
    } 

    if(isTransEnded == false) return;

    isTransEnded = false;
    isActive = true;

    form.classList.remove('form-accepted__inactive');
    setTimeout(() => { form.classList.remove('form-accepted__visibly-inactive'); }, 1);
});

form_button.addEventListener('click', () => {
    if(isTransEnded == false) return;

    isTransEnded = false;
    isActive = false;

    form.classList.add('form-accepted__visibly-inactive');
});

form.addEventListener('transitionend', () => {
    if(isActive == false) {
        form.classList.add('form-accepted__inactive');
    } else {
        form.classList.remove('form-accepted__inactive');
    }
    isTransEnded = true;
});
