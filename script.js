$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addclass("sticky");

        }else{
            $('.navbar').removeclass("sticky");

        }
    });
    $('.menu.btn').click(function(){
        $('.navbar .menu').toggle("active");

    });
   
    $('.carousel').owlCarousel({

    });

    });
