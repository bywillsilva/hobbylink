const btn_start = document.querySelector('#start');
const btn_login = document.querySelector('#login');


if (btn_start) {
    btn_start.addEventListener('click', () => {
        window.location.href = '/login';
    });
}

if (btn_login) {
    btn_login.addEventListener('click', () => {
        window.location.href = '/home';
    });
}
