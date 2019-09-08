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

function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;

    var blackBg = document.getElementById('js-black-bg');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');

    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.toggle('is-show');
        });
    }
}
popupImage();

$('.inline').modaal();