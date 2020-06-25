//ローディングアニメーション
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
};

//ドロップダウンメニュー
$(function() {
    $("ul.nav li").hover(
    function() {
        $("ul.navi_Sns:not(:animated)", this).stop().slideDown();
    },
    function() {
        $("ul.navi_Sns", this).stop().slideUp();
    }
    );
});

let mySwiper = new Swiper( '.swiper-container', {

    slidesPerView: 'auto',
    freeMode: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});