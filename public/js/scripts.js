const btn_start = document.querySelector('#start');
const btn_login = document.querySelector('#login');


if (btn_start) {
    btn_start.addEventListener('click', () => {
        window.location.href = '/login';
    });
}

if (btn_login) {
    btn_login.addEventListener('click', () => {
        window.location.href = '/loginform';
    });
}

const pass = document.querySelectorAll('.pass');
const showPass = document.querySelectorAll('.showPass');
const hidePass = document.querySelectorAll('.hidePass');

if (showPass || hidePass) {
    for (let i = 0; i < showPass.length; i++) {
        showPass[i].addEventListener('click', () => {
            if (pass[i].type === 'password') {
                pass[i].type = 'text';
                showPass[i].style.display = 'none';
                hidePass[i].style.display = 'block';
            } else {
                pass[i].type = 'password';
                showPass[i].style.display = 'block';
                hidePass[i].style.display = 'none';
            }
        });
    }

    for (let i = 0; i < hidePass.length; i++) {
        hidePass[i].addEventListener('click', () => {
            if (pass[i].type === 'text') {
                pass[i].type = 'password';
                showPass[i].style.display = 'block';
                hidePass[i].style.display = 'none';
            } else {
                pass[i].type = 'text';
                showPass[i].style.display = 'none';
                hidePass[i].style.display = 'block';
            }
        });
    }
}