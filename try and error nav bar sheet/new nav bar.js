let menu = document.querySelector('#menu-ixon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onclick = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
