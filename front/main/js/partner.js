
(function () {
    var new_swiper = new Swiper(".identify_swiper", {
        slidesPerView: 1.5,
        spaceBetween: 110,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때
                spaceBetween: 30,
            },

            375: {
                slidesPerView: 1.5,  //브라우저가 1024보다 클 때
                spaceBetween: 110,
            },

            360: {
                slidesPerView: 1.5,  //브라우저가 1024보다 클 때
                spaceBetween: 120,
            },

            325: {
                slidesPerView: 1.5,  //브라우저가 1024보다 클 때
                spaceBetween: 140,
            },
        },
    });
})();