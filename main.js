const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu2');

iconoMenu.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

iconoMenu.addEventListener('click', e =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})
