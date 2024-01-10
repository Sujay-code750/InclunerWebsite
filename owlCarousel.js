// owlCarosel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        loop:false,
        nav:true,
        navText: ['<div class="navLeft"><span><i class="fa-solid fa-chevron-left fa-fw"></i></span></div>','<div class="navRight"><span><i class="fa-solid fa-chevron-right fa-fw"></i></span></div>'],
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:500,
        autoplayHoverPause:true,
        dots:true,
        dotsEach:1,
    
       responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            425:{
                items:1,
            },
            768:{
                items:1,
            },
            1024:{
                items:2,
            },
            1200:{
                items:2,
            }
        }
    })
})