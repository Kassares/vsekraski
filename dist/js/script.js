


$(document).ready(function(){
  $('.main-special-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false

  });

  $('.posts-slider').slick({
    dots: false,
    slidesToShow: 4,
    arrows: true,
prevArrow: '<div class="previous-post"><img src="./img/arrow-left.png", alt=""<div>',
    nextArrow: '<div class="next-post"><img src="./img/arrow-left.png", alt=""<div>',
    responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });
  $('.brands-slider').slick({
    dots: false,
    slidesToShow: 6,
    arrows: true,
    variableWidth: true,
    prevArrow: '<div class="prev-brands"><img src="./img/brands-prev.png", alt=""<div>',
    nextArrow: '<div class="next-brands"><img src="./img/brands-prev.png", alt=""<div>',
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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
    }]
  });
 $('.prev-brands').hover(function() {
       $('.prev-brands img').attr("src","./img/brands-prev-hover.png");
  }, function() {
    $('.prev-brands img').attr("src","./img/brands-prev.png");
   });
  $('.next-brands').hover(function() {
       $('.next-brands img').attr("src","./img/brands-prev-hover.png");
  }, function() {
    $('.next-brands img').attr("src","./img/brands-prev.png");
   });
  $('.previous-post').hover(function() {
       $('.previous-post img').attr("src","./img/arrow-left-hover.png");
  }, function() {
    $('.previous-post img').attr("src","./img/arrow-left.png");
   });
  $('.next-post').hover(function() {
       $('.next-post img').attr("src","./img/arrow-left-hover.png");
  }, function() {
    $('.next-post img').attr("src","./img/arrow-left.png");
   });
  $('.previous-recomended').hover(function() {
       $('.previous-recomended img').attr("src","./img/arrow-left-hover.png");
  }, function() {
    $('.previous-recomended img').attr("src","./img/arrow-left-hover.png");
   });
  $('.next-recomended ').hover(function() {
       $('.next-recomended  img').attr("src","./img/arrow-left-hover.png");
  }, function() {
    $('.next-recomended  img').attr("src","./img/arrow-left.png");
   });
  $( ".next-brands" ).insertBefore( ".slider-wrapper .slick-list" );
  $('.recomended-slider').slick({
    dots: true,
    slidesToShow: 2,
    arrows: true,
     prevArrow: '<div class="previous-recomended"><img src="./img/arrow-left.png", alt=""<div>',
    nextArrow: '<div class="next-recomended"><img src="./img/arrow-left.png", alt=""<div>',
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
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
    }]
  });
  $('.shop-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false
  });
  $('.picker-slider').slick({
    dots: false,
    slidesToShow: 27,
    arrows: true,
    infinite: false,
    slidesToScroll: 5,
     prevArrow: '<div class="previous-picker"><img src="./img/arrow-left.png", alt=""<div>',
    nextArrow: '<div class="next-picker"><img src="./img/arrow-left.png", alt=""<div>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 22,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 10
      }
    }]
  });
   // picker fix
    $(".picker-item").hover(function () {
      dich = $(this).offset();  
      $(".picker-item-hidden").css("position", "fixed").offset(function(i,val) {
    return {top: dich.top + 33, left: dich.left - 15};
   });
    });

});
$(document).ready(function(){





/* слайдер цен */

$("#slider").slider({
  min: 0,
  max: 6000,
  values: [0,5000],
  range: true,
  stop: function(event, ui) {
    $("input#minCost").val( $("#slider").slider("values",0));
    $("input#maxCost").val($("#slider").slider("values",1));
    
    },
    slide: function(event, ui){
    $("input#minCost").val($("#slider").slider("values",0));
    $("input#maxCost").val($("#slider").slider("values",1));
    }
});

$("input#minCost").val(0);
$("input#maxCost").val(5000);

$("input#minCost").change(function(){

  var value1=$("input#minCost").val().substring(1);
  var value2=$("input#maxCost").val().substring(1);

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $("input#minCost").val(value1);
  }
  $("#slider").slider("values",0,value1); 
});

  
$("input#maxCost").change(function(){
    
  var value1=$("input#minCost").val();
  var value2=$("input#maxCost").val();
  
  if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $("input#maxCost").val(value2);
  }
  $("#slider").slider("values",1,value2);
});
$(".categories ul li").hover(function() {
  $(".sub-categories-menu").css('display', 'block');
  $(".categories-has-child:before").css('display', 'block');
}, function() {
    $(".sub-categories-menu .container").mouseleave(function(event) {
     $(".sub-categories-menu").css('display', 'none');
    });
    
});
          // Читать далее
    $('.read-more').click(function() {
      $('.tab-pane-wrapper').css('height', 'auto');
    });



          // Модальное окно после отправки отзыва
    $('.button-post-testimonial').click(function() {
        $('.layer-testimonial-white').css('display', 'block');
    });
    $('.close-test').click(function() {
        $('.layer-testimonial-white').css('display', 'none');
    });
            // Модальное окно колеровки
    $('.buy-colored').click(function() {
        $('.layer-testimonial-white').css('display', 'block');
    });
    $('.close-test').click(function() {
        $('.layer-testimonial-white').css('display', 'none');
    });

    // Форма обратной связи, задать вопрос
    $('#form-ask').click(function() {
        $('.layer-ask-form').css('display', 'block');
    });
    $('.close-ask-form').click(function() {
        $('.layer-ask-form').css('display', 'none');
    });


    $('#send-ask-button').click(function() {
        $('.layer-ask-form').css('display', 'none');
        $('.layer-testimonial-white').css('display', 'block');
    });    


    // collapse in cart
    $('#cart-show-products').click(function() {
        $('#cart-show-products').css('display', 'none');
        $('#cart-collapse-products').css('display', 'block');
    });
    $('#cart-collapse-products').click(function() {
        $('#cart-collapse-products').css('display', 'none');
        $('#cart-show-products').css('display', 'block');
    });



    // show filters
  $('.mobile-filter').click(function(event) {
      $('.filter-wrapper').css('display', 'block');
  });
    //show more-filters
  $('.more-filters-button').click(function(event) {
      $(this).siblings('.filters-wrapper').css('height', 'auto');
      $(this).css('display', 'none');
  });
  // mobile-menu
  $('.burger-menu').click(function(event) {
      $('.topnav-mobile ul').css('display', 'block');
      $(this).css('display', "none");
  });
  $('.topnav-mobile ul').click(function(event) {
      $(this).css("display", "none");
       $('.burger-menu').css('display', 'block');
  });
  $('.nav-burger').click(function(event) {
      $('.nav-mobile ul').css('display', 'block');
  });
  $('.nav-mobile ul').click(function(event) {
      $(this).css("display", "none");
       $('.nav-burger').css('display', 'block');
  });

// show map
  $('.target-icon').click(function(event) {
    $(this).css({'opacity': '1', 'filter':'grayscale(0)'}).addClass('target-active');
    $('.shops-map').css('height', 'auto');
    $('#map').css('opacity', '1');
  });
  $('.target-icon.target-active').click(function(event) {
        $(this).css({'opacity': '0.7', 'filter':'grayscale(1)'}).removeClass('target-active');
    $('#map').css('', 'block');
  });
});