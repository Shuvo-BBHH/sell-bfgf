(function ($) {
  "use strict";

  /*****************************
   * Commons Variables
   *****************************/
  var $window = $(window),
    $body = $("body");

  /****************************
   * Sticky Menu
   *****************************/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 0) {
      $(".user-event-area").removeClass("sticky");
    } else {
      $(".user-event-area").addClass("sticky");
    }
  });

  /*****************************
   * Off Canvas Function
   *****************************/
  (function () {
    var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
    $offCanvasToggle.on("click", function (e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr("href");
      $body.addClass("offcanvas-open");
      $($target).addClass("offcanvas-open");
      $offCanvasOverlay.fadeIn();
      if ($this.parent().hasClass("mobile-menu-toggle")) {
        $this.addClass("close");
      }
    });
    $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
      e.preventDefault();
      $body.removeClass("offcanvas-open");
      $offCanvas.removeClass("offcanvas-open");
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find("a").removeClass("close");
    });
  })();

  /**************************
   * Offcanvas: Menu Content
   **************************/
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".mobile-sub-menu");

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu
      .parent()
      .prepend('<div class="offcanvas-menu-expand"></div>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, .offcanvas-menu-expand", function (e) {
      var $this = $(this);
      if (
        $this.attr("href") === "#" ||
        $this.hasClass("offcanvas-menu-expand")
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu();

  // Button material Effect

  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const buttons = document.querySelectorAll(".btn");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }

  /************************************************
   * Nice Select
   ***********************************************/
  /* $('select').niceSelect(); */

  /*************************
   *   Hero Slider Active
   **************************/
  var heroSlider = new Swiper(".hero-slider-active .swiper", {
    slidesPerView: 1,
    speed: 1500,
    watchSlidesProgress: true,
    loop: true,
    spaceBetween: 5,
    // autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /****************************************
   *   Product Slider Active - 4 Grids 1 Row
   *****************************************/
  var catagoriesNav1 = new Swiper(".catagories-nav-1 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1500,
    loop: false,
  });

  var catagoriesNav2 = new Swiper(".catagories-nav-2 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 1500,
    loop: true,
  });

  /************************************************
   * Product Quantity
   ***********************************************/
  $(".num-in span").click(function () {
    var $input = $(this).parents(".num-block").find("input.in-num");
    if ($(this).hasClass("minus")) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass("dis");
      } else {
        $(this).removeClass("dis");
      }
      $input.val(count);
    } else {
      var count = parseFloat($input.val()) + 1;
      $input.val(count);
      if (count > 1) {
        $(this).parents(".num-block").find(".minus").removeClass("dis");
      }
    }

    $input.change();
    return false;
  });

  /* search keyword */

  /* shop filter menu active */
  $("#filter-trigger").on("click", function (e) {
    e.stopPropagation();
    $("#shop-filter-menu").slideToggle();
  });

  $("#shop-filter-slideup").on("click", function (e) {
    e.stopPropagation();
    $("#shop-filter-menu").slideUp();
  });

  /* price range */



  $.fn.elExists = function () {
    return this.length > 0;
};



if ($('#price-range-slider').elExists()) {
    $('#price-range-slider').ionRangeSlider({
      type: "double",
      skin: "round",
      hide_min_max: true,
      min: 0,
      max: 500,
      from: 50,
      to: 440,
    });;
}



  /****************************************
   *  Product Gallery - 1
   *****************************************/
  var product_gallery_image = new Swiper(".product-gallery-image .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /****************************************
   *  Product Gallery - 2
   *****************************************/
  var productThumbImage = new Swiper(".product-thumb-image .swiper", {
    // centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    // freeMode: true,
    watchSlidesProgress: true,
  });
  var productLargeImage = new Swiper(".product-gallery-large .swiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: productThumbImage,
    },
    navigation: {
      nextEl: ".text-button-next",
      prevEl: ".text-button-prev",
    },
  });

  $(".short-btn").click(function () {
    $(".short-section").slideToggle("slow");
  });


  //Swap Function

  document
    .querySelectorAll(".single-product-item")
    .forEach(function (elements) {
      elements.addEventListener("touchstart", handleTouchStart, false);
    });

  document
    .querySelectorAll(".single-product-item")
    .forEach(function (elements) {
      elements.addEventListener("touchmove", handleTouchMove, false);
    });

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    console.log(xDiff);

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        $(this)[0].classList.add("active");
        window.on;
        setTimeout(() => {
          $(this)[0].classList.remove("active");
        }, 3000);
      } else {
        /* left swipe */
        // $(this)[0].classList.remove("active");
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
})(jQuery);
