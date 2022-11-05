$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 350) {
            $("nav").show(1000);
        } else {
            $("nav").hide(1000);
        }
    });
    
}); 