$(document).ready(function () {
    $("hasChild").hover(function () {

    }, function () {

    });
    $('.slick_img').slick({
        dots: true,
        autoplay:true,
        autoplaySpeed:1000,
        accessibility:false,
        arrows:false,
        appendDots: $('.dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});