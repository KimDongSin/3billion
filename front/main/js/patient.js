
(function () {
    var new_swiper = new Swiper(".blog_swiper", {
        slidesPerView: 1,
        spaceBetween: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때
                spaceBetween: 30,
            },


            420: {
                slidesPerView: 1.4,  //브라우저가 420보다 클 때
                spaceBetween: 40,
            },
        },
    });
})();