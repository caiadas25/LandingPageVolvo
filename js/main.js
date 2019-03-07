$(document).ready(function(){

    $('.img_1').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:8000,
        speed: 1000,
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
    $('.video').slick({
      dots: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed:8000,
      speed: 500,
      centerMode: false,
      variableWidth: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
          }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    //Go to Top Button
    var btn = $('.button-top');
        var galleryHeight = $(".gallery").height();

        if ($(window).scrollTop() > 230) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }

        $(window).scroll(function() {
            galleryHeight = $(".gallery").height();
            if ($(window).scrollTop() > 230) {
              btn.addClass('show');
            } else {
              btn.removeClass('show');
            }
          });
        
          btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
    });
    //Go to Top Button

        /*Click to move in page*/
    $("#campanha").click(function() {
        $('html, body').animate({
          scrollTop: $('.split').offset().top
        }, 1000);
      });
    $("#xc40").click(function() {
    $('html, body').animate({
        scrollTop: $('.split_2').offset().top
    }, 1000);
    });  
    $("#contactos").click(function() {
        $('html, body').animate({
          scrollTop: $('.contactos').offset().top
        }, 1000);
      });
      $("#campanha-1").click(function() {
        $('html, body').animate({
          scrollTop: $('.split').offset().top
        }, 1000);
      });  

      //toggle menu

      $(".menu-toggle").click(function(){
        $(this).parents(".nav").toggleClass("open");
      });


    /*Acordeão*/

    function openAnswer(){
      elem = $(this);
      elem.toggleClass("open");
      elem.siblings(".answer").toggleClass("answer_hide");
    }
        
    $(".question").on("click",openAnswer);

}) //end document ready











