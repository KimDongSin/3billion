(function () {
    if (window.innerWidth > 480) { // pc
        var new_swiper = new Swiper(".identify_swiper", {
            slidesPerView: 2.8,
            spaceBetween: 30,
            loop: true,
        });


        // 팝업
        $('.inquire_icon_wrapper > img').on('click', function() {
            $(this).hide()
            $('.show_inquire').css({'display': 'flex'});
        });

        $('.inquire_close_btn').on('click', function(){ 
            $(this).closest('.show_inquire').hide();
            $('.inquire_icon_wrapper > img').show();
        });

        $('.inquire_email_icon').on('click', function(){ 
            $('.inquire_icon_wrapper').hide();
            $('.email_popup_wrapper').show();
        });
        
        $('.inquire_talk_icon').on('click', function(){ 
            $('.inquire_icon_wrapper').hide();
            $('.talk_popup_wrapper').show();
        });

        $('.popup_close_btn').on('click', function(){
            $('.email_popup_wrapper').hide();
            $('.talk_popup_wrapper').hide();
            $('.inquire_icon_wrapper').show();
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




    // 아코디언
    $('.faq_list li img').on('click', function(){
        if ($(this).closest('li').hasClass('on')) {
            $(this).closest('li').removeClass('on');
        }else {
            $(this).closest('li').addClass('on');

        }
    });

    // $('.faq_list li:not(.on) img').on('click', function(){
    // });
})();