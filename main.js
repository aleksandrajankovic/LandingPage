/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 10,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
     
    },
  });
/*SHOW MORE*/

document.addEventListener("DOMContentLoaded", function() {
  const showMoreButton = document.querySelector("#rules-text .show-more");
  const rulesText = document.querySelector("#text");
  const rulesWrapper = document.querySelector(".rules-wrapper");

  showMoreButton.addEventListener("click", function() {
    if (rulesText.classList.contains("show-more-height")) {
      rulesText.classList.remove("show-more-height");
      showMoreButton.textContent = "PRIKAŽI MANJE";
    } else {
      rulesText.classList.add("show-more-height");
      showMoreButton.textContent = "PRIKAŽI VIŠE";
    }
  });
});





  // $(".show-more").click(function () {
  //   if ($("#text").hasClass("show-more-height")) {
  //     $(this).text("PRIKAŽI MANJE");
  //   } else {
  //     $(this).text("PRIKAŽI VIŠE");
  //   }

  //   $("#text").toggleClass("show-more-height");
  // });