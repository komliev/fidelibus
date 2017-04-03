$(document).ready(function() {
    
    $(window).on('resize', function() {
        calculateAngle();
        btnArrowPosition();
    });    
    
    //Events on window scroll  
    $(window).on("scroll", function() {            
        
    });
    
    /* --- HEADER --- */
    
    //Mobile Menu Toggler
    if ($('.menu-icon').length) 
        $('.menu-icon').click(function() {
            
            $('.sidebar').toggleClass('slid');
            $(this).children('i.fa').toggleClass('fa-bars');
            $(this).children('i.fa').toggleClass('fa-times');
            $(this).toggleClass('fixed');
            
            return false;
        });
    
    /* --- CONTENT --- */
        
    
    //Owl Init
    $(".owl-carousel-nav").owlCarousel({
        center: true,
        loop: true,
        //navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        navText: ["<div class='angle-left'></div>","<div class='angle-right'></div>"],
        navSpeed: 1000,
        items: 1,
        responsive:{
            0:{                
                dots: true,
                nav: false
            },
            767:{
                dots: false,
                nav : true
            }
        }
    });
    
    //BtnArrow
    if ($('.btn-arrow').length) {
        $('.btn-arrow').each(function(i, d){
            $(d).on('click', function (){
                event.preventDefault();
                var offset = 0;                
                var s = $(d).attr('href');
                $('body,html').animate({scrollTop: $(s).offset().top - offset}, 800);
            });
        });
    }
    
    if ($('.angle-crossed').length) {
        $('.angle-crossed').each(function(i, d){
            w = $(window).innerWidth();
            h = w*0.07;
            $(d).css({clipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)',
                webkitClipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)',
                mozClipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)'});
        });
    }    
        
});

function calculateAngle() {
    if ($('.angle-crossed').length) {
        $('.angle-crossed').each(function(i, d){
            w = $(window).innerWidth();
            h = w*0.07083;
            $(d).css({clipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)',
                webkitClipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)',
                mozClipPath : 'polygon(0 ' + h + 'px, 100% 0, 100% 100%, 0 100%)'});
        });
    }
}

function btnArrowPosition() {
    if ($('#index .index-intro a.btn.btn-arrow').length) {
        $('#index .index-intro a.btn.btn-arrow').css({marginBottom : '3.5%'});
    }
}