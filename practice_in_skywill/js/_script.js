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