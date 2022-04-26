// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  var swiper2 = new Swiper('.firstSwipper .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loopedSlides: 4,

    navigation: {
        nextEl: '.firstSwipper .swiper-button-next',
        prevEl: '.firstSwipper .swiper-button-prev',
        el: '.firstSwipper .pagination-container',
        clickable: true,
    },
    breakpoints: {
        300: {
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            loopedSlides: 1,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            loopedSlides: 4,
        }
    },

});
var swiper1 = new Swiper('.theBest .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loopedSlides: 4,
    autoplay: {
        delay: 3000
    },
    // navigation: {
    //     nextEl: '.theBest .swiper-button-next',
    //     prevEl: '.theBest .swiper-button-prev',
    //     el: '.theBest .pagination-container',
    //     clickable: true,
    // },
    breakpoints: {
        300: {
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            loopedSlides: 1,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            loopedSlides: 4,
        }
    },

});
var swiper = new Swiper('.sale .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loopedSlides: 4,
    // pagination: {
    //     el: ".sale .swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.sale .swiper-button-next',
        prevEl: '.sale .swiper-button-prev',
        el: '.sale .pagination-container',
        clickable: true,
    },
    breakpoints: {
        300: {
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true,
            loopedSlides: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            loopedSlides: 1,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            loopedSlides: 4,
        }
    },

});
// $(window).resize(function () {
//     swiper3.update();
// });
// $(window).on('load', function () {
//     swiper3.update();
// });
$(document).ready(function(){
  $(".sectionDisplay").mouseover(function(){
    $(".sectionDisplay").stop().animate({
        top: '350px',
        // height: '+=150px',
        width: '+=150px'
      });
    $(".btnView").css("display","block");
    // $(".btnView").animate("slow");
  });
  $(".sectionDisplay").mouseout(function(){
    $(".sectionDisplay").stop().animate({
        top: '-350px',
        // height: '-=150px',
        width: '-=150px'
      });
      $(".btnView").css("display","none");
  });
})
$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".customHeader").addClass("bg-dark text-dark pt-2");
        } 
        else {
            //remove the background property so it comes transparent again (defined in your css)
        $(".customHeader").removeClass("bg-dark pt-4");
        }
});