$('.owl-carousel').owlCarousel(
{
    center:true,
    lazyLoad:true,
    items : 1,
   itemsDesktop : false,
   itemsDesktopSmall : false,
   itemsTablet: false,
   itemsMobile : false,
    margin: 10,
    smartSpeed: 500,
    loop : true,
    startPosition: 2,
  }
);

var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
})
