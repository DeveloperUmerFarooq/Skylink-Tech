$(document).ready(function () {
    var owl=$('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      center:true,
      autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        },
      }
    });
    var tech=$('.tech-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        center:true,
        autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          },
        }
      });
    $('.prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
    $('.next').click(function() {
      owl.trigger('next.owl.carousel');
    });
  });
  