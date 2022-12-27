(function ($) {
  "use strict";

  //Run function when document ready
  $(document).ready(function () {
      init_menu_toggle();
  });

  //Run function when window on scroll
  
  $(window).on("scroll", function () {
      init_menu_scroll();
  });

  function init_menu_scroll() {
      var header = $(".header");
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
          header.addClass("header-fixed");
      } else {
          header.removeClass("header-fixed");
      }
  }

  function init_menu_toggle() {
      $(".menu-icon").click(function () {
          $(this).toggleClass("menu-icon-design");
          $(".main-menu").toggleClass("main-menu-open");
      });

        $(".main-menu ul li").click(function () {
            $(".main-menu").removeClass("main-menu-open");
            $(".menu-icon").removeClass("menu-icon-design");

        });
  }

    //   scroll menu




  // Back To Top

  $(".back-to-top").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
    }, 2000);
    return false;
  });


  $(window).parallaxmouse({
    invert: true,
    range: 400,
    elms: [
        {el: $('#warpbg'), rate: 0.1},
        {el: $('#star1'), rate: 0.2},
        {el: $('#star2'), rate: 0.2},
        {el: $('#star3'), rate: 0.2},
    ]
});

})(jQuery);



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.main-menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.main-menu li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
});



function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




















