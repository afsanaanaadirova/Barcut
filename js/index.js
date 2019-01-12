$(document).ready(function(){
    $("header .flex .burger").click(function(){
        $("#respon_menu").toggleClass("active")
        $(this).toggleClass("burgeractive");
    });
    $("#respon_menu .sub_li a").click(function(){
        $(this).parent().find(".sub_ul").slideToggle();
        $(this).siblings("i").toggleClass("iconsactive");
    });

       //------- Tabs Js --------//  

       $('#horizontalTab').jqTabs({
           direction: 'horizontal',
           duration: 200
       })
       
})
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider() {
        if ($('.testi-slider').length) {
            $('.testi-slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                thumbs: true,
                thumbsPrerendered: true
            })
        }
    }
    testimonials_slider();

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        $("header").addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

