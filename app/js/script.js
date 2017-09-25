$(function () {

    /*clouds animation*/
    var x = 0;
    setInterval(function () {
        var pos = (x -= 1) + 'px 0';
        $('.cloud1').css('background-position', pos);
    }, 50);
    var y = 0;
    setInterval(function () {
        var pos = (y += 1) + 'px 0';
        $('.cloud2').css('background-position', pos);
    }, 70);

    /*slider gallery*/

    $(document).on('click', '.portfolio__gallery--btn', function () {
        var galleryStatus = $('.portfolio__gallery--scroller').attr('data-status', '1');
        var pos;
        if (galleryStatus.data('status') === 1) {
            setInterval(function () {
                pos = (x -= 1) + 'px';
                $('.portfolio__gallery--scroller').css('transform', 'translate('+ pos +')');
            }, 50);
            galleryStatus.data('status', '2');
        } else {
            $('.portfolio__gallery--scroller').css('transform', 'translate('+ 0 +')');
            galleryStatus.data('status', '1');
            return false;
        }

    });

    $('.blog__slider').slick({
        dots:false,
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


});











