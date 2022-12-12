(function () {
    var new_swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.3,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때
                spaceBetween: 30,
            },
        },
    });
})();