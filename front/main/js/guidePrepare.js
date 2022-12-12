
(function () {
    var new_swiper = new Swiper(".identify_swiper", {
        slidesPerView: 1,
        spaceBetween: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            1024: {
                slidesPerView: 2.4,  //브라우저가 1024보다 클 때
                spaceBetween: 0,
            },


            320: {
                slidesPerView: 1.3,  //브라우저가 420보다 클 때
                spaceBetween: 20,
            },
        },
    });
})();