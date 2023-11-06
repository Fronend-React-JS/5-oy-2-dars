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

function crateUserObject () {
    let user = {};
    user.name = name.value;
    user.surname = surname.value;
    user.age = age.value;
    user.username = username.value;
    user.password = password.value;
    user.lang = [];

    lang.forEach(el => {
        if(el.checked) {
            user.lang.push(el.value);
        }
    });

    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    if (data.langth) {
        data.forEach(el => {
            if (el.username == user.username) {
                alert("bunday foydalanuvchi");
                username.value = '';
                username.focus();
                username.style.outlineColor = 'red';
                return;
            }


        })
    } else {
        data.push(user);
    }
}

btn.addEventListener('click', function ()  {
    validate();
    crateUserObject();
});