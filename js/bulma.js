(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#navbarMenuHero');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

$(function(){
    $('a[href^=#]').click(function(){
        const speed = 400;
        const href= $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
$(".inline").modaal();