var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

