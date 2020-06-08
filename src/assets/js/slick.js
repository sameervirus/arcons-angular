var isNoviBuilder = false,
  plugins = {
    slick: $(".slick-slider"),
  };
if (plugins.slick.length) {
  for (var i = 0; i < plugins.slick.length; i++) {
    var $slickItem = $(plugins.slick[i]);

    $slickItem
      .slick({
        slidesToScroll:
          parseInt($slickItem.attr("data-slide-to-scroll"), 10) || 1,
        asNavFor: $slickItem.attr("data-for") || false,
        dots: $slickItem.attr("data-dots") === "true",
        infinite: isNoviBuilder
          ? false
          : $slickItem.attr("data-loop") === "true",
        focusOnSelect: true,
        arrows: $slickItem.attr("data-arrows") === "true",
        swipe: $slickItem.attr("data-swipe") === "true",
        autoplay: $slickItem.attr("data-autoplay") === "true",
        centerMode: $slickItem.attr("data-center-mode") === "true",
        fade: $slickItem.attr("data-slide-effect") === "true",
        centerPadding: $slickItem.attr("data-center-padding")
          ? $slickItem.attr("data-center-padding")
          : "0.50",
        mobileFirst: true,
        appendArrows: $slickItem.attr("data-arrows-class") || $slickItem,
        nextArrow:
          $slickItem.attr("data-custom-arrows") === "true"
            ? '<button type="button" class="slick-next">' +
              '  <svg width="100%" height="100%" viewbox="0 0 78 78">' +
              '    <circle class="slick-button-line" cx="39" cy="39" r="36"></circle>' +
              '    <circle class="slick-button-line-2" cx="39" cy="39" r="36"></circle>' +
              "  </svg>" +
              "</button>"
            : '<button type="button" class="slick-next"></button>',
        prevArrow:
          $slickItem.attr("data-custom-arrows") === "true"
            ? '<button type="button" class="slick-prev">' +
              '  <svg width="100%" height="100%" viewbox="0 0 78 78">' +
              '    <circle class="slick-button-line" cx="39" cy="39" r="36"></circle>' +
              '    <circle class="slick-button-line-2" cx="39" cy="39" r="36"></circle>' +
              "  </svg>" +
              "</button>"
            : '<button type="button" class="slick-prev"></button>',
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-items"), 10) || 1,
              vertical: $slickItem.attr("data-vertical") === "true" || false,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-sm-items"), 10) || 1,
              vertical: $slickItem.attr("data-sm-vertical") === "true" || false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-md-items"), 10) || 1,
              vertical: $slickItem.attr("data-md-vertical") === "true" || false,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-lg-items"), 10) || 1,
              vertical: $slickItem.attr("data-lg-vertical") === "true" || false,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-xl-items"), 10) || 1,
              vertical: $slickItem.attr("data-xl-vertical") === "true" || false,
            },
          },
        ],
      })
      .on("afterChange", function (event, slick, currentSlide, nextSlide) {
        var $this = $(this),
          childCarousel = $this.attr("data-child");
        if (childCarousel) {
          $(childCarousel + " .slick-slide").removeClass("slick-current");
          $(childCarousel + " .slick-slide")
            .eq(currentSlide)
            .addClass("slick-current");
        }
      });
    if ($slickItem.attr("data-fraction")) {
      (function () {
        var fractionElement = document.querySelectorAll(
            $slickItem.attr("data-fraction")
          )[0],
          fractionCurrent = fractionElement.querySelectorAll(
            ".slick-fraction-current"
          )[0],
          fractionAll = fractionElement.querySelectorAll(
            ".slick-fraction-all"
          )[0];
        $slickItem.on("afterChange", function (slick) {
          fractionCurrent.innerText = leadingZero(this.slick.currentSlide + 1);
          fractionAll.innerText = leadingZero(this.slick.slideCount);
        });
        $slickItem.trigger("afterChange");
      })();
    }
  }
}
