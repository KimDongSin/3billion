(function () {
    var new_swiper = new Swiper(".new_swiper", {
        slidesPerView: 1.3,
        spaceBetween: 60,

        breakpoints: {
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때
                spaceBetween: 30,
            },


    
        },
    });
})();