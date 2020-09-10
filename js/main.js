$(function(){
   

$('.projects__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<img class="slider-arrows_left" src="img/arrow-left.svg"></img>',
    nextArrow: '<img class="slider-arrows_right" src="img/arrow-right.svg"></img>',
    responsive: [
        {    
            breakpoint: 426,
            settings: 'unslick'
            
        },
        {    
            breakpoint: 760,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            
        },

    ]
});

$('.news-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<img class="slider-arrows_left" src="img/arrow-left.svg"></img>',
    nextArrow: '<img class="slider-arrows_right" src="img/arrow-right.svg"></img>',
   
});

  $('.menu-btn').on('click', function(){
      $('.menu-list').toggleClass('active');
  });
  
$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

    });
});