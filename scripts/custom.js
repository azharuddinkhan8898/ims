$(function() {
  
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
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
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
});
