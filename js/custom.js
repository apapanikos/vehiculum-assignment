// AUTHOR:ALEX PAPANIKOS
// FOR VEHICULUM
// 2018


// DROPDOWN TOGGLE

$(function() {
  
    // Dropdown toggle
    $('.dropdown-toggle').click(function(){
      $(this).next('.dropdown').toggle(200); //or slideToggle(400)
    });
    
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
        $('.dropdown').hide();
      }
    });
    
    });


// MOBILE RESPONSIVE MENU

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// CAROUSEL RULES

$(document).ready(function(){
  $('.my-carousel').slick({
    dots: false,
    infinite: false,
    prevArrow: '<i class="slide-arrow fa fa-angle-left"></i>',
    nextArrow: '<i class="slide-arrow fa fa-angle-right"></i>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});




