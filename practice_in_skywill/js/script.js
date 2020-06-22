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


//スライドショー
let mySwiper = new Swiper( '.swiper-container', {

    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 6000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});


//ドロップダウンメニュー END

// //スライドショー フェードインアウト
// img_src = new Array(
//     "img/img0.jpg",
//     "img/img1.jpg",
//     "img/img2.jpg",
//     "img/img3.jpg",
//     "img/img4.jpg",
// );
// myNowCnt = -1;
// myFlg = 0;

// function myChange() {
//     myNowCnt = (myNowCnt < img_src.length-1) ? myNowCnt+1 : 0;
//     myFlg = (myFlg == 0) ? 1 : 0;
//     if(myFlg == 0) {
//         document.getElementById("slide_Img_b").src = img_src[myNowCnt];
//         document.getElementById("slide_Img_a").className = "slide_Img_CSS_a";
//         document.getElementById("slide_Img_b").className = "slide_Img_CSS_b";
//     } else {
//         document.getElementById("slide_Img_b").src = img_src[myNowCnt];
//         document.getElementById("slide_Img_a").className = "slide_Img_CSS_b";
//         document.getElementById("slide_Img_b").className = "slide_Img_CSS_a";
//     }
//     setTimeout("myChange()", 4000);
// }
// myChange();
// //スライドショー END



// //スライドショー フェードなし
// const img_src = ["img/img1.jpg","img/img2.jpg","img/img4.jpg"];
// let num = -1;

// function slideSS_Timer() {
//     if (num === 2) {
//         num = 0;
//     } else {
//         num ++;
//     }
//     document.getElementById("slide_Img_a").src = img_src[num];
// }
// setInterval(slideSS_Timer, 1000);
// //スライドショー END