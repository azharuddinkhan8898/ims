$(function(){
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    $(window).on('load', function(){
        $('#loader').fadeOut();
    })
    $("#main-nav a,.footer-nav li a,#free-sample-btn").on('click', function (event) {
        if ($(window).width() <= 980) {
            if (!$(this).hasClass('buyNow')) {
                $('#main-nav').slideUp();
                $('.menu-ico').removeClass('active');
            }
        }
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    if ($(window).width() <= 980) {
        $('.buyNow').click(function () {
            $(this).closest('ul').show();
        })
    }
    $('#slider-unique').slick({
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
    });
    $('.b-slider').slick({
        dots: false
    })
    $('.tab-action li').click(function () {
        var tabIndex = $(this).index();
        $('.tab-action li, .tab').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tab-wrap').find('.tab-content').find('.tab').eq(tabIndex).addClass('active');
    });
    $('.custom-select select').change(function () {
        var selVal = $(this).find('option:selected').index();
        $('.tab').removeClass('active');
        $(this).closest('.tab-wrap').find('.tab-content').find('.tab').eq(selVal).addClass('active');
    })
    $('#get-now').click(function () {
        $(this).closest('form').hide();
        $(this).closest('form').next('form').show(function () {
            $('#submit').click(function () {
                $(this).closest('.form-wrap').hide();
                $('#thanks').show();
            })
        });
    });
    $('.menu-ico').click(function () {
        $(this).toggleClass('active');
        $('#main-nav').slideToggle();
    })
})