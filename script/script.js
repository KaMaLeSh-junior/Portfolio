$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Designer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer"],
        typeSpeed:150,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     
});

function time(){
    const date = new Date();
    const SecondsHand=document.querySelector('.second');
    const MinuteHand=document.querySelector('.minute');
    const HourHand=document.querySelector('.hour');
    const second = date.getSeconds(); 
    const secondHand = second/60;
    const secondRotate = secondHand*360+270 ;

    const minute = date.getMinutes(); 
    const minuteHand = (secondHand+minute)/60;
    const minuteRotate = minuteHand*360+270;

    const hour = date.getHours(); 
    const hourHand = (minuteHand+hour)/12;
    const hourRotate = hourHand*360+270;

    SecondsHand.style.transform =`rotate(${secondRotate}deg)`;
    MinuteHand.style.transform =`rotate(${minuteRotate}deg)`;
    HourHand.style.transform =`rotate(${hourRotate}deg)`;

}
setInterval(time,1000)

