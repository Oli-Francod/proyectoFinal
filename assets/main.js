let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY >0)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-bx');
    navbar.classList.toggle('active')
}

menu.onscroll =() => {
    menu.classList.remove('bx-bx');
    navbar.classList.remove('active')
}