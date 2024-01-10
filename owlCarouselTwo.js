// owlCarosel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:false,
        nav:true,
        navText: ['<div class="navLeft"><span><i class="fa-solid fa-chevron-left fa-fw"></i></span></div>','<div class="navRight"><span><i class="fa-solid fa-chevron-right fa-fw"></i></span></div>'],
        smartSpeed:500,
        autoplayHoverPause:true,
    
       /* responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            425:{
                items:1,
            },
            768:{
                items:1.5,
            },
            1024:{
                items:1,
            },
            1200:{
                items:2.5,
            }
        }*/
    })
})