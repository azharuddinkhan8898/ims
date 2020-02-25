

$(function() {
  "use strict";
  $("img").on("dragstart", function(event) {
    event.preventDefault();
  });
  $(window).on("load", function() {
    $("#loader").fadeOut();
    setTimeout(function(){
      AOS.init();
    },500)
  });
  $("#main-nav a,.footer-nav li a,#free-sample-btn").on("click", function(
    event
  ) {
    if ($(window).width() <= 980) {
      if (!$(this).hasClass("buyNow")) {
        $("#main-nav").slideUp();
        $(".menu-ico").removeClass("active");
      }
    }
    // if (this.hash !== "") {
    //   event.preventDefault();
    //   var hash = this.hash;
    //   $("html, body").animate(
    //     {
    //       scrollTop: $(hash).offset().top
    //     },
    //     800,
    //     function() {
    //       window.location.hash = hash;
    //     }
    //   );
    // }
  });
  if ($(window).width() <= 980) {
    $(".buyNow").click(function() {
      $(this)
        .closest("ul")
        .show();
    });
  }

  if ($(".products-slider-single-wrapper").length) {
    $(".products-slider-single-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".products-slider-nav-wrapper"
    });
  }
  if ($(".products-slider-nav-wrapper").length) {
    $(".products-slider-nav-wrapper").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".products-slider-single-wrapper",
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  }

  if ($("#slider-unique").length) {
    $("#slider-unique").slick({
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      fade: true
    });
  }

  if ($(".testimonials-wrapper").length) {
    $(".testimonials-wrapper").slick({
      autoplaySpeed: 5000,
      arrows: false,
      dots: true
    });
  }
  if ($(".b-slider").length) {
    $(".b-slider").slick({
      dots: false
    });
  }

  $(".blogs-wrapper .body .filters-wrapper .filter > a").click(function() {
    $(this)
      .parent()
      .toggleClass("active");
    $(this)
      .next()
      .slideToggle(300);
  });

  $(
    ".blogs-wrapper .body .filters-wrapper .filter.active > a + .filter-check-wrapper"
  ).slideToggle(300);

  if ($(".fancybox").length) {
    $(".fancybox").fancybox({});
  }

  var filterTags = [];

  $(".blogs-wrapper .body .filters-wrapper .filter > a + .filter-check-wrapper .filter-check input").change(function(){
    filterTags = [];
    $(".blogs-wrapper .body .filters-wrapper .filter > a + .filter-check-wrapper .filter-check input").each(function(i, el) {
      if($(el).is(":checked")){
        filterTags.push($(el).attr("name"))
      }
    })
    updateFilter();
  })

  function updateFilter(){
    if(filterTags.length > 0){
      filterTags.forEach(function(el){
        $(".blogs-list-wrapper > .row > div").each(function(i, ell){
          var tags = $(ell).attr("data-tags").split(" ");
          if(tags.indexOf(el) !== -1){
            $(ell).show();
          }
          else{
            $(ell).hide();
          }
          // tags.forEach(function(elll){
          //   console.log(el===elll)
          //   if(el == elll){
          //     $(ell).show();
          //   }
          //   else{
          //     $(ell).hide();
          //   }
          // })
        })
      })
    }else{
      $(".blogs-list-wrapper > .row > div").show();
    }
    
  }

  $(".tab-action li").click(function() {
    var tabIndex = $(this).index();
    $(".tab-action li, .tab").removeClass("active");
    $(this).addClass("active");
    $(this)
      .closest(".tab-wrap")
      .find(".tab-content")
      .find(".tab")
      .eq(tabIndex)
      .addClass("active");
  });
  $(".custom-select select").change(function() {
    var selVal = $(this)
      .find("option:selected")
      .index();
    $(".tab").removeClass("active");
    $(this)
      .closest(".tab-wrap")
      .find(".tab-content")
      .find(".tab")
      .eq(selVal)
      .addClass("active");
  });
  $("#get-now").click(function() {
    $(this)
      .closest("form")
      .hide();
    $(this)
      .closest("form")
      .next("form")
      .show(function() {
        $("#submit").click(function() {
          $(this)
            .closest(".form-wrap")
            .hide();
          $("#thanks").show();
        });
      });
  });
  $(".menu-ico").click(function() {
    $(this).toggleClass("active");
    $("#main-nav").slideToggle();
  });
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
  var translate;
  var translate1;
  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    translate1 = 'translate(' + -x + 'px, ' + -y + 'px) scale(1.1)';
    $('.home-banner-wrapper .bg').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      'transform': translate
    });
    $('.home-banner-wrapper .content-wrapper').css({
      '-webit-transform': translate1,
      '-moz-transform': translate1,
      'transform': translate1
    });

    window.requestAnimationFrame(moveBackground);
  }

  $(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

  });

  moveBackground();

  var demoTrigger = document.querySelectorAll('.demo-trigger');
  var paneContainer = document.querySelector('.product-details');

  var options = {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-pane`. Default `drift-`
    // prefixed classes will always be added as well.
    namespace: null,
    // Whether the ZoomPane should show whitespace when near the edges.
    showWhitespaceAtEdges: false,
    // Whether the inline ZoomPane should stay inside
    // the bounds of its image.
    containInline: false,
    // How much to offset the ZoomPane from the
    // interaction point when inline.
    inlineOffsetX: 0,
    inlineOffsetY: 0,
    // A DOM element to append the inline ZoomPane to.
    inlineContainer: document.body,
    // Which trigger attribute to pull the ZoomPane image source from.
    sourceAttribute: 'data-zoom',
    // How much to magnify the trigger by in the ZoomPane.
    // (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane image
    // if the trigger is displayed at 300 px wide)
    zoomFactor: 10,
    // A DOM element to append the non-inline ZoomPane to.
    // Required if `inlinePane !== true`.
    paneContainer: paneContainer,
    // When to switch to an inline ZoomPane. This can be a boolean or
    // an integer. If `true`, the ZoomPane will always be inline,
    // if `false`, it will switch to inline when `windowWidth <= inlinePane`
    inlinePane: 375,
    // If `true`, touch events will trigger the zoom, like mouse events.
    handleTouch: true,
    // If present (and a function), this will be called
    // whenever the ZoomPane is shown.
    onShow: null,
    // If present (and a function), this will be called
    // whenever the ZoomPane is hidden.
    onHide: null,
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles: true,
    // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `mouseenter` event.
    hoverDelay: 0,
    // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `touchstart` event.
    // Setting this to a reasonable amount will allow users to execute
    // scroll-gestures events on touch-enabled devices with the image as
    // a starting point
    touchDelay: 0,
    // If true, a bounding box will show the area currently being previewed
    // during mouse hover
    hoverBoundingBox: true,
    // If true, a bounding box will show the area currently being previewed
    // during touch events
    touchBoundingBox: true,
  };

  for(var i=0; i<demoTrigger.length; i++){
    new Drift(demoTrigger[i], {
      paneContainer: paneContainer,
			inlinePane: 900,
			inlineOffsetY: -85,
			containInline: true,
			hoverBoundingBox: true
    });
  }
});
