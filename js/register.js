const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');
const lang = document.querySelectorAll('input.languages');

function validate() {
    if (!name.value) {
        name.style.outlineColor = 'red';
        name.focus();
        return;
    }

    if (!username.value) {
        name.style.outlineColor = 'red';
        name.focus();
        return;
    }

    if (!password.value) {
        password.style.outlineColor = 'red';
        password.focus();
        return;
    }

    if (!repassword.value) {
        repassword.style.outlineColor = 'red';
        repassword.focus();
        return;
    }

    if (password.value != repassword.value) {
        alert("Parollar bir xil kiritilmadi")
        password.value = '';
        repassword.value = '';

    }
}

btn.addEventListener('click', function ()  {
    validate();

});