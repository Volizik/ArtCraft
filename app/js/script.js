$(function () {
    // $(window).on('mousemove', function (e) {
    //     var w = $(window).width();
    //     var h = $(window).height();
    //
    //     var offsetX = 0.5 - e.pageX / w;
    //     var offsetY = 0.5 - e.pageY / h;
    //
    //     $('.parallax').each(function(i,el) {
    //         var offset = parseInt($(el).data('offset'));
    //
    //         var translate = "translate3d(" + Math.round(offsetX * offset) + 'px,' + Math.round(offsetY * offset) + 'px, 0px)';
    //         $(el).css({
    //             'transform': translate
    //         })
    //     })
    // });

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

});











