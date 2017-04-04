$(document).ready(function() {
    
    $(window).on('resize', function() {
        
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
        
    
    //ScrollTo
    if ($('.scroll-to').length) {
        $('.scroll-to').each(function(){
            $(this).on('click', function (){
                event.preventDefault();
                var offset = 120;
                var s = $(this).attr('href');
                $('body,html').animate({scrollTop: $(s).offset().top - offset}, 800);
            });
        });
    }    
        
});
