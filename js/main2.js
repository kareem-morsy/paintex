$(document).ready(function () {

    $("#type2").hide();

    $("#order1").click(function () {

        $("#type1").show();
        $("#type2").hide();
        $("#order1").css("background-color", "#5F27CD");
        $("#order1").css("color", "#ffffff");
        $("#order2").css("background-color", "#ffffff");
        $("#order2").css("color", "#918d8d");


    });

    $("#order2").click(function () {

        $("#type1").hide();
        $("#type2").show();
        $("#order2").css("background-color", "#5F27CD");
        $("#order2").css("color", "#ffffff");
        $("#order1").css("background-color", "#ffffff");
        $("#order1").css("color", "#918d8d");

    });


    $("#filter-span2").hide();

    var btnn = $('#buttonn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btnn.addClass('show');
        } else {
            btnn.removeClass('show');
        }
    });


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });


    var swiper = new Swiper('#qeno', {
        autoplay: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 3,
        grabCursor: true,
        loop: true,


    }).on('slideChange', function (swiper) {
        
      });

    var swiper = new Swiper('#qeno2', {
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 3,
            centeredSlides: true,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // var scrollButton = $("#button1");
    // $(window).scroll(function(){
    //     if((window).scrollTop >= 500){
    //         scrollButton.show();
    //     }
    //     else{
    //         scrollButton.hide();
    //     }
    // });

    // scrollButton.click(function(){
    //     $("html,body").animate({screenTop:0},800);
    // })

});