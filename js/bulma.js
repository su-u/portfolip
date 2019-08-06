(function () {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#navbarMenuHeroB');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();