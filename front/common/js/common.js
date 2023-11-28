(function () {

    $("header").load("../common/inc/header.html");
    $("footer").load("../common/inc/footer.html");

    $(".more").click(function () {
        $(this).parent("li").toggleClass("on");
        $(this).parent("li").siblings().removeClass("on");
    })

    $(".blog__tab__btn").on("click", function(){
        // $(".main__bg").css('border-bottom', '1px solid #040035');
        // $(".main__news__wrap").css('display', 'none');
        if($(this).hasClass("blog__tab__btn--select") == false){
            $(".blog__tab__btn").removeClass("blog__tab__btn--select");
            $(this).addClass("blog__tab__btn--select");
        }
    })


    // 스크롤
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        if (scrT >= 500) {
            $('header').css({
                'position': 'fixed',
                'top': '0',
                'left' : '50%',
                'transform' : 'translateX(-50%)',
                'width' : '100%',
                'z-index' : '1000'
            });

            
            $('.ir_title_wrapper').css({
                'position': 'fixed',
                'top': '80px',
                'z-index': '1000',
                'width': '100%'
            });

            $('.container').css({
                'padding-top': '170px'
            })
        }else {
            if ($('.sitemap_wrappper_m').css('display') != 'block') {
                $('header').css({
                    'position': 'relative',
                    'top': '0'
                });

                
                $('.ir_title_wrapper').css({
                    'position': 'initial',
                    'top': 'initial',
                    'z-index': 'initial',
                    'width': 'initial'
                })

                $('.container').css({
                    'padding-top': '0'
                })
                
            }else {
                $('header').css({
                    'position': 'fixed',
                    'top': '0',
                    'left' : '50%',
                    'transform' : 'translateX(-50%)',
                    'width' : '100%',
                    'z-index' : '1000'
                });

                
                $('.ir_title_wrapper').css({
                    'position': 'fixed',
                    'top': '80px',
                    'z-index': '1000',
                    'width': '100%'
                })

                $('.container').css({
                    'padding-top': '170px'
                })
            }
        }
    });
})();