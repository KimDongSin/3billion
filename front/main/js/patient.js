
(function () {
    var new_swiper = new Swiper(".blog_swiper", {
        slidesPerView: 1.3,
        spaceBetween: 60,
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
                slidesPerView: 1.3,  //브라우저가 1024보다 클 때
                spaceBetween: 80,
            },


            360: {
                slidesPerView: 1.3,  //브라우저가 1024보다 클 때
                spaceBetween: 90,
            },

            320: {
                slidesPerView: 1.2,  //브라우저가 1024보다 클 때
                spaceBetween: 100,
            },
        },
    });
})();