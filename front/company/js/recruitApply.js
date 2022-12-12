(function () {
    if (window.innerWidth > 480) { // pc
        var new_swiper = new Swiper(".identify_swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
        });
    } else { // mobile
        var new_swiper = new Swiper(".identify_swiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

    }
})();