$(function () {

  window.onscroll = function showHeader () {

    var header = document.querySelector ('.header__top');

    if(window.pageYOffset > 20) {
        header.classList.add('header__bg');
    }

    else {
        header.classList.remove('header__bg');
    }
}

$('.reviews__slider').slick({
  prevArrow: '<button type="button" class="reviews__slick reviews__slick--prev"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384767 17.0149L16.3981 31.6079C16.9235 32.1307 17.7757 32.1307 18.3012 31.6079C18.8267 31.0851 18.8267 30.2369 18.3012 29.7141L3.25346 16L18.2999 2.2859C18.8254 1.76309 18.8254 0.914839 18.2999 0.392073C17.7744 -0.130695 16.9222 -0.130695 16.3968 0.392072L0.383432 14.9851C0.103363 15.2638 -0.0167127 15.6332 0.00199458 15.9986C-0.0154195 16.3654 0.104617 16.7348 0.384767 17.0149Z" fill="#1F6FEB"/></svg></button>',
  nextArrow: '<button type="button" class="reviews__slick reviews__slick--next"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z" fill="#1F6FEB"/></svg></button>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1600,
    settings: {
       arrows: false,
       dots: true
    }
  },]
});

$(".menu a, .header__link, .logo, .summary__btn-link").on("click", function (event) {
event.preventDefault();
var id  = $(this).attr('href'),
  top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1500);
});



$('.menu__btn, .menu__link').on('click' , function() {
    $('.menu__list, .menu__line').toggleClass('menu--active');
    $('body').toggleClass('look');
});



$('.summary__btn').on('click', function () {
  $('.summary__btn, .summary__wrapper, .summary__description-inner').toggleClass('summary--active');
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


var mixer = mixitup('.portfolio__content');

});
