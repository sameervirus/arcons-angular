$(document).ready(function () {
  $(".preloader").addClass("loaded");
  $(".page").addClass("animated");
  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),
    $document = $(document),
    $window = $(window),
    $html = $("html"),
    $body = $("body"),
    isDesktop = $html.hasClass("desktop"),
    isIE =
      userAgent.indexOf("msie") !== -1
        ? parseInt(userAgent.split("msie")[1], 10)
        : userAgent.indexOf("trident") !== -1
        ? 11
        : userAgent.indexOf("edge") !== -1
        ? 12
        : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    windowReady = false,
    isNoviBuilder = false,
    loaderTimeoutId,
    plugins = {
      rdNavbar: $(".rd-navbar"),
      swiper: $(".swiper-slider"),
      owl: $(".owl-carousel"),
      materialParallax: $(".parallax-container"),
      bootstrapTabs: $(".tabs-custom"),

      rdMailForm: $(".rd-mailform"),
      rdInputLabel: $(".form-label"),
      regula: $("[data-constraints]"),
      wow: $(".wow"),
      copyrightYear: $(".copyright-year"),
      multitoggle: document.querySelectorAll("[data-multitoggle]"),
      maps: $(".google-map-container"),
    };
  if (plugins.rdNavbar.length) {
    var aliaces, i, j, len, value, values, responsiveNavbar;
    aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
    values = [0, 576, 768, 992, 1200, 1600];
    responsiveNavbar = {};
    for (i = j = 0, len = values.length; j < len; i = ++j) {
      value = values[i];
      if (!responsiveNavbar[values[i]]) {
        responsiveNavbar[values[i]] = {};
      }
      if (plugins.rdNavbar.attr("data" + aliaces[i] + "layout")) {
        responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr(
          "data" + aliaces[i] + "layout"
        );
      }
      if (plugins.rdNavbar.attr("data" + aliaces[i] + "device-layout")) {
        responsiveNavbar[values[i]]["deviceLayout"] = plugins.rdNavbar.attr(
          "data" + aliaces[i] + "device-layout"
        );
      }
      if (plugins.rdNavbar.attr("data" + aliaces[i] + "hover-on")) {
        responsiveNavbar[values[i]]["focusOnHover"] =
          plugins.rdNavbar.attr("data" + aliaces[i] + "hover-on") === "true";
      }
      if (plugins.rdNavbar.attr("data" + aliaces[i] + "auto-height")) {
        responsiveNavbar[values[i]]["autoHeight"] =
          plugins.rdNavbar.attr("data" + aliaces[i] + "auto-height") === "true";
      }
      if (isNoviBuilder) {
        responsiveNavbar[values[i]]["stickUp"] = false;
      } else if (plugins.rdNavbar.attr("data" + aliaces[i] + "stick-up")) {
        responsiveNavbar[values[i]]["stickUp"] =
          plugins.rdNavbar.attr("data" + aliaces[i] + "stick-up") === "true";
      }
      if (plugins.rdNavbar.attr("data" + aliaces[i] + "stick-up-offset")) {
        responsiveNavbar[values[i]]["stickUpOffset"] = plugins.rdNavbar.attr(
          "data" + aliaces[i] + "stick-up-offset"
        );
      }
    }
    plugins.rdNavbar.RDNavbar({
      anchorNav: !isNoviBuilder,
      stickUpClone:
        plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder
          ? plugins.rdNavbar.attr("data-stick-up-clone") === "true"
          : false,
      responsive: responsiveNavbar,
      callbacks: {
        onStuck: function () {
          var navbarSearch = this.$element.find(".rd-search input");
          if (navbarSearch) {
            navbarSearch.val("").trigger("propertychange");
          }
        },
        onDropdownOver: function () {
          return !isNoviBuilder;
        },
        onUnstuck: function () {
          if (this.$clone === null) return;
          var navbarSearch = this.$clone.find(".rd-search input");
          if (navbarSearch) {
            navbarSearch.val("").trigger("propertychange");
            navbarSearch.trigger("blur");
          }
        },
      },
    });
    if (plugins.rdNavbar.attr("data-body-class")) {
      document.body.className += " " + plugins.rdNavbar.attr("data-body-class");
    }
  }

  if (plugins.multitoggle.length) {
    multitoggles();
  }

  if (plugins.swiper.length) {
    for (var i = 0; i < plugins.swiper.length; i++) {
      var s = $(plugins.swiper[i]);
      var pag = s.parent().hasClass("swiper-custom-container")
          ? s.parent().find(".swiper-pagination")
          : s.find(".swiper-pagination"),
        next = s.parent().hasClass("swiper-custom-container")
          ? s.parent().find(".swiper-button-next")
          : s.find(".swiper-button-next"),
        prev = s.parent().hasClass("swiper-custom-container")
          ? s.parent().find(".swiper-button-prev")
          : s.find(".swiper-button-prev"),
        bar = s.find(".swiper-scrollbar"),
        swiperSlide = s.find(".swiper-slide"),
        autoplay = false;
      for (var j = 0; j < swiperSlide.length; j++) {
        var $this = $(swiperSlide[j]),
          url;
        if ((url = $this.attr("data-slide-bg"))) {
          $this.css({
            "background-image": "url(" + url + ")",
            "background-size": "cover",
          });
        }
      }
      swiperSlide
        .end()
        .find("[data-caption-animate]")
        .addClass("not-animated")
        .end();
      s.swiper({
        autoplay: s.attr("data-autoplay")
          ? s.attr("data-autoplay") === "false"
            ? undefined
            : s.attr("data-autoplay")
          : 5000,
        direction: s.attr("data-direction")
          ? s.attr("data-direction")
          : "horizontal",
        effect: s.attr("data-slide-effect")
          ? s.attr("data-slide-effect")
          : "slide",
        speed: s.attr("data-slide-speed") ? s.attr("data-slide-speed") : 600,
        keyboardControl: s.attr("data-keyboard") === "true",
        mousewheelControl: s.attr("data-mousewheel") === "true",
        mousewheelReleaseOnEdges: s.attr("data-mousewheel-release") === "true",
        nextButton: next.length ? next.get(0) : null,
        prevButton: prev.length ? prev.get(0) : null,
        pagination: pag.length ? pag.get(0) : null,
        paginationClickable: pag.length
          ? pag.attr("data-clickable") !== "false"
          : false,
        paginationBulletRender: (function (pag) {
          return function (swiper, index, className) {
            if (pag.attr("data-index-bullet") === "true") {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            } else if (pag.attr("data-bullet-custom") === "true") {
              return (
                '<span class="' +
                className +
                '">' +
                '  <svg width="100%" height="100%" viewbox="0 0 24 24">' +
                '    <circle class="swiper-bullet-line" cx="12" cy="12" r="10"></circle>' +
                '    <circle class="swiper-bullet-line-2" cx="12" cy="12" r="10"></circle>' +
                "  </svg>" +
                "</span>"
              );
            } else {
              return '<span class="' + className + '"></span>';
            }
          };
        })(pag),
        scrollbar: bar.length ? bar.get(0) : null,
        scrollbarDraggable: bar.length
          ? bar.attr("data-draggable") !== "false"
          : true,
        scrollbarHide: bar.length
          ? bar.attr("data-draggable") === "false"
          : false,
        loop: isNoviBuilder ? false : s.attr("data-loop") !== "false",
        loopAdditionalSlides: s.attr("data-add-slides")
          ? s.attr("data-add-slides")
          : 0,
        simulateTouch:
          s.attr("data-simulate-touch") && !isNoviBuilder
            ? s.attr("data-simulate-touch") === "true"
            : false,
        onTransitionStart: function (swiper) {
          toggleSwiperInnerVideos(swiper);
        },
        onTransitionEnd: function (swiper) {
          toggleSwiperCaptionAnimation(swiper);
        },
        onInit: (function (s) {
          return function (swiper) {
            toggleSwiperInnerVideos(swiper);
            toggleSwiperCaptionAnimation(swiper);
            var $swiper = $(s);
            var swiperCustomIndex = $swiper
                .find(".swiper-pagination__fraction-index")
                .get(0),
              swiperCustomCount = $swiper
                .find(".swiper-pagination__fraction-count")
                .get(0);
            if (swiperCustomIndex && swiperCustomCount) {
              swiperCustomIndex.innerHTML = formatIndex(swiper.realIndex + 1);
              if (swiperCustomCount) {
                swiperCustomCount.innerHTML = formatIndex(
                  swiper.slides.not(".swiper-slide-duplicate").length
                );
              }
            }
          };
        })(s),
        onSlideChangeStart: (function (s) {
          return function (swiper) {
            var swiperCustomIndex = $(s)
              .find(".swiper-pagination__fraction-index")
              .get(0);
            var activeSlideIndex, slidesCount;
            if (swiperCustomIndex) {
              swiperCustomIndex.innerHTML = formatIndex(swiper.realIndex + 1);
            }
            activeSlideIndex = swiper.activeIndex;
            slidesCount = swiper.slides.not(".swiper-slide-duplicate").length;
            if (activeSlideIndex === slidesCount + 1) {
              activeSlideIndex = 1;
            } else if (activeSlideIndex === 0) {
              activeSlideIndex = slidesCount;
            }
            if (
              swiper.slides[activeSlideIndex - 1].getAttribute(
                "data-slide-title"
              )
            ) {
              $(swiper.container).find(
                ".swiper-button-next .title"
              )[0].innerHTML = swiper.slides[activeSlideIndex + 1].getAttribute(
                "data-slide-title"
              );
              $(swiper.container).find(
                ".swiper-button-prev .title"
              )[0].innerHTML = swiper.slides[activeSlideIndex - 1].getAttribute(
                "data-slide-title"
              );
            }
            if (
              swiper.slides[activeSlideIndex - 1].getAttribute(
                "data-slide-subtitle"
              )
            ) {
              $(swiper.container).find(
                ".swiper-button-prev .subtitle"
              )[0].innerHTML = swiper.slides[activeSlideIndex - 1].getAttribute(
                "data-slide-subtitle"
              );
              $(swiper.container).find(
                ".swiper-button-next .subtitle"
              )[0].innerHTML = swiper.slides[activeSlideIndex + 1].getAttribute(
                "data-slide-subtitle"
              );
            }
            if ($(swiper.container).find(".preview__img")[0] !== undefined) {
              $(swiper.container)
                .find(".swiper-button-prev .preview__img")
                .css(
                  "background-image",
                  "url(" +
                    swiper.slides[activeSlideIndex - 1].getAttribute(
                      "data-slide-bg"
                    ) +
                    ")"
                );
              $(swiper.container)
                .find(".swiper-button-next .preview__img")
                .css(
                  "background-image",
                  "url(" +
                    swiper.slides[activeSlideIndex + 1].getAttribute(
                      "data-slide-bg"
                    ) +
                    ")"
                );
            }
          };
        })(s),
      });
      $window
        .on(
          "resize",
          (function (s) {
            return function () {
              var mh = getSwiperHeight(s, "min-height"),
                h = getSwiperHeight(s, "height");
              if (h) {
                s.css("height", mh ? (mh > h ? mh : h) : h);
              }
            };
          })(s)
        )
        .trigger("resize");
    }
  }

  if (plugins.owl.length) {
    for (var i = 0; i < plugins.owl.length; i++) {
      var c = $(plugins.owl[i]);
      plugins.owl[i].owl = c;
      initOwlCarousel(c);
    }
  }

  if (plugins.materialParallax.length) {
    if (!isNoviBuilder && !isIE && !isMobile) {
      plugins.materialParallax.parallax();
      $window.on("load", function () {
        setTimeout(function () {
          $window.scroll();
        }, 500);
      });
    } else {
      for (var i = 0; i < plugins.materialParallax.length; i++) {
        var parallax = $(plugins.materialParallax[i]),
          imgPath = parallax.data("parallax-img");
        parallax.css({
          "background-image": "url(" + imgPath + ")",
          "background-size": "cover",
        });
      }
    }
  }

  if (plugins.rdMailForm.length) {
    var i,
      j,
      k,
      msg = {
        MF000: "Successfully sent!",
        MF001: "Recipients are not set!",
        MF002: "Form will not work locally!",
        MF003: "Please, define email field in your form!",
        MF004: "Please, define type of your form!",
        MF254: "Something went wrong with PHPMailer!",
        MF255: "Aw, snap! Something went wrong.",
      };
    for (i = 0; i < plugins.rdMailForm.length; i++) {
      var $form = $(plugins.rdMailForm[i]),
        formHasCaptcha = false;
      $form.attr("novalidate", "novalidate").ajaxForm({
        data: {
          "form-type": $form.attr("data-form-type") || "contact",
          counter: i,
        },
        beforeSubmit: function (arr, $form, options) {
          if (isNoviBuilder) return;
          var form = $(plugins.rdMailForm[this.extraData.counter]),
            inputs = form.find("[data-constraints]"),
            output = $("#" + form.attr("data-form-output")),
            captcha = form.find(".recaptcha"),
            captchaFlag = true;
          output.removeClass("active error success");
          if (isValidated(inputs, captcha)) {
            if (captcha.length) {
              var captchaToken = captcha.find(".g-recaptcha-response").val(),
                captchaMsg = {
                  CPT001:
                    'Please, setup you "site key" and "secret key" of reCaptcha',
                  CPT002: "Something wrong with google reCaptcha",
                };
              formHasCaptcha = true;
              $.ajax({
                method: "POST",
                url: "bat/reCaptcha.php",
                data: {
                  "g-recaptcha-response": captchaToken,
                },
                async: false,
              }).done(function (responceCode) {
                if (responceCode !== "CPT000") {
                  if (output.hasClass("snackbars")) {
                    output.html(
                      '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                        captchaMsg[responceCode] +
                        "</span></p>"
                    );
                    setTimeout(function () {
                      output.removeClass("active");
                    }, 3500);
                    captchaFlag = false;
                  } else {
                    output.html(captchaMsg[responceCode]);
                  }
                  output.addClass("active");
                }
              });
            }
            if (!captchaFlag) {
              return false;
            }
            form.addClass("form-in-process");
            if (output.hasClass("snackbars")) {
              output.html(
                '<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'
              );
              output.addClass("active");
            }
          } else {
            return false;
          }
        },
        error: function (result) {
          if (isNoviBuilder) return;
          var output = $(
              "#" +
                $(plugins.rdMailForm[this.extraData.counter]).attr(
                  "data-form-output"
                )
            ),
            form = $(plugins.rdMailForm[this.extraData.counter]);
          output.text(msg[result]);
          form.removeClass("form-in-process");
          if (formHasCaptcha) {
            grecaptcha.reset();
          }
        },
        success: function (result) {
          if (isNoviBuilder) return;
          var form = $(plugins.rdMailForm[this.extraData.counter]),
            output = $("#" + form.attr("data-form-output")),
            select = form.find("select");
          form.addClass("success").removeClass("form-in-process");
          if (formHasCaptcha) {
            grecaptcha.reset();
          }
          result = result.length === 5 ? result : "MF255";
          output.text(msg[result]);
          if (result === "MF000") {
            if (output.hasClass("snackbars")) {
              output.html(
                '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                  msg[result] +
                  "</span></p>"
              );
            } else {
              output.addClass("active success");
            }
          } else {
            if (output.hasClass("snackbars")) {
              output.html(
                ' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' +
                  msg[result] +
                  "</span></p>"
              );
            } else {
              output.addClass("active error");
            }
          }
          form.clearForm();
          if (select.length) {
            select.select2("val", "");
          }
          form.find("input, textarea").trigger("blur");
          setTimeout(function () {
            output.removeClass("active error success");
            form.removeClass("success");
          }, 3500);
        },
      });
    }
  }

  if (plugins.rdInputLabel.length) {
    plugins.rdInputLabel.RDInputLabel();
  }

  if (plugins.regula.length) {
    attachFormValidator(plugins.regula);
  }

  if (plugins.bootstrapTabs.length) {
    for (var i = 0; i < plugins.bootstrapTabs.length; i++) {
      var bootstrapTabsItem = $(plugins.bootstrapTabs[i]);
      if (bootstrapTabsItem.find(".slick-slider").length) {
        bootstrapTabsItem.find(".tabs-custom-list > li > a").on(
          "click",
          $.proxy(function () {
            var $this = $(this);
            var setTimeOutTime = isNoviBuilder ? 1500 : 300;
            setTimeout(function () {
              $this
                .find(".tab-content .tab-pane.active .slick-slider")
                .slick("setPosition");
            }, setTimeOutTime);
          }, bootstrapTabsItem)
        );
      }
      if (bootstrapTabsItem.attr("data-view-triggerable") === "true") {
        (function (bootstrapTabsItem) {
          bootstrapTabsItem.on("shown.bs.tab", function (event) {
            var prevTriggerable = bootstrapTabsItem.find(
                '[data-view-trigger="' +
                  event.relatedTarget.getAttribute("href") +
                  '"]'
              ),
              triggerable = bootstrapTabsItem.find(
                '[data-view-trigger="' +
                  event.target.getAttribute("href") +
                  '"]'
              );
            prevTriggerable.removeClass("active");
            triggerable.addClass("active");
          });
        })(bootstrapTabsItem);
      }
    }
  }

  if (
    $html.hasClass("wow-animation") &&
    plugins.wow.length &&
    !isNoviBuilder &&
    isDesktop
  ) {
    new WOW().init();
  }

  if (plugins.copyrightYear.length) {
    plugins.copyrightYear.text(initialDate.getFullYear());
  }

  function getSwiperHeight(object, attr) {
    var val = object.attr("data-" + attr),
      dim;
    if (!val) {
      return undefined;
    }
    dim = val.match(/(px)|(%)|(vh)|(vw)$/i);
    if (dim.length) {
      switch (dim[0]) {
        case "px":
          return parseFloat(val);
        case "vh":
          return $window.height() * (parseFloat(val) / 100);
        case "vw":
          return $window.width() * (parseFloat(val) / 100);
        case "%":
          return object.width() * (parseFloat(val) / 100);
      }
    } else {
      return undefined;
    }
  }

  function toggleSwiperInnerVideos(swiper) {
    var prevSlide = $(swiper.slides[swiper.previousIndex]),
      nextSlide = $(swiper.slides[swiper.activeIndex]),
      videos,
      videoItems = prevSlide.find("video");
    for (var i = 0; i < videoItems.length; i++) {
      videoItems[i].pause();
    }
    videos = nextSlide.find("video");
    if (videos.length) {
      videos.get(0).play();
      videos.css({
        visibility: "visible",
        opacity: "1",
      });
    }
  }

  function toggleSwiperCaptionAnimation(swiper) {
    var prevSlide = $(swiper.container).find("[data-caption-animate]"),
      nextSlide = $(swiper.slides[swiper.activeIndex]).find(
        "[data-caption-animate]"
      ),
      delay,
      duration,
      nextSlideItem,
      prevSlideItem;
    for (var i = 0; i < prevSlide.length; i++) {
      prevSlideItem = $(prevSlide[i]);
      prevSlideItem
        .removeClass("animated")
        .removeClass(prevSlideItem.attr("data-caption-animate"))
        .addClass("not-animated");
    }
    var tempFunction = function (nextSlideItem, duration) {
      return function () {
        nextSlideItem
          .removeClass("not-animated")
          .addClass(nextSlideItem.attr("data-caption-animate"))
          .addClass("animated");
        if (duration) {
          nextSlideItem.css("animation-duration", duration + "ms");
        }
      };
    };
    for (var i = 0; i < nextSlide.length; i++) {
      nextSlideItem = $(nextSlide[i]);
      delay = nextSlideItem.attr("data-caption-delay");
      duration = nextSlideItem.attr("data-caption-duration");
      if (!isNoviBuilder) {
        if (delay) {
          setTimeout(
            tempFunction(nextSlideItem, duration),
            parseInt(delay, 10)
          );
        } else {
          tempFunction(nextSlideItem, duration);
        }
      } else {
        nextSlideItem.removeClass("not-animated");
      }
    }
  }

  function initOwlCarousel(c) {
    var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
      values = [0, 576, 768, 992, 1200, 1600],
      responsive = {};
    for (var j = 0; j < values.length; j++) {
      responsive[values[j]] = {};
      for (var k = j; k >= -1; k--) {
        if (
          !responsive[values[j]]["items"] &&
          c.attr("data" + aliaces[k] + "items")
        ) {
          responsive[values[j]]["items"] =
            k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
        }
        if (
          !responsive[values[j]]["stagePadding"] &&
          responsive[values[j]]["stagePadding"] !== 0 &&
          c.attr("data" + aliaces[k] + "stage-padding")
        ) {
          responsive[values[j]]["stagePadding"] =
            k < 0
              ? 0
              : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
        }
        if (
          !responsive[values[j]]["margin"] &&
          responsive[values[j]]["margin"] !== 0 &&
          c.attr("data" + aliaces[k] + "margin")
        ) {
          responsive[values[j]]["margin"] =
            k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
        }
      }
    }
    if (c.attr("data-dots-custom")) {
      c.on("initialized.owl.carousel", function (event) {
        var carousel = $(event.currentTarget),
          customPag = $(carousel.attr("data-dots-custom")),
          active = 0;
        if (carousel.attr("data-active")) {
          active = parseInt(carousel.attr("data-active"), 10);
        }
        carousel.trigger("to.owl.carousel", [active, 300, true]);
        customPag.find("[data-owl-item='" + active + "']").addClass("active");
        customPag.find("[data-owl-item]").on("click", function (e) {
          e.preventDefault();
          carousel.trigger("to.owl.carousel", [
            parseInt(this.getAttribute("data-owl-item"), 10),
            300,
            true,
          ]);
        });
        carousel.on("translate.owl.carousel", function (event) {
          customPag.find(".active").removeClass("active");
          customPag
            .find("[data-owl-item='" + event.item.index + "']")
            .addClass("active");
        });
      });
    }
    c.on("initialized.owl.carousel", function () {
      initLightGalleryItem(
        c.find('[data-lightgallery="item"]'),
        "lightGallery-in-carousel"
      );
    });
    if (typeof c.attr("data-numbering") !== "undefined") {
      var numberingObject = $(c.attr("data-numbering"));
      c.on(
        "initialized.owl.carousel changed.owl.carousel",
        (function (numberingObject) {
          return function (e) {
            if (!e.namespace) return;
            if (isNoviBuilder ? false : c.attr("data-loop") !== "false") {
              var tempFix =
                e.item.index + 1 - e.relatedTarget.clones().length / 2;
              if (tempFix > 0) {
                numberingObject
                  .find(".numbering-current")
                  .text(
                    tempFix > e.item.count ? tempFix % e.item.count : tempFix
                  );
              } else {
                numberingObject
                  .find(".numbering-current")
                  .text(e.item.index + 1);
              }
            } else {
              numberingObject.find(".numbering-current").text(e.item.index + 1);
            }
            numberingObject.find(".numbering-count").text(e.item.count);
          };
        })(numberingObject)
      );
    }
    c.owlCarousel({
      autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
      loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
      items: 1,
      merge: true,
      center: c.attr("data-center") === "true",
      dotsContainer: c.attr("data-pagination-class") || false,
      navContainer: c.attr("data-navigation-class") || false,
      mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
      nav: c.attr("data-nav") === "true",
      dots: c.attr("data-dots") === "true",
      dotsEach: c.attr("data-dots-each")
        ? parseInt(c.attr("data-dots-each"), 10)
        : false,
      animateIn: c.attr("data-animation-in")
        ? c.attr("data-animation-in")
        : false,
      animateOut: c.attr("data-animation-out")
        ? c.attr("data-animation-out")
        : false,
      responsive: responsive,
      smartSpeed: c.attr("data-smart-speed") ? c.attr("data-smart-speed") : 250,
      navText: (function () {
        try {
          return JSON.parse(c.attr("data-nav-text"));
        } catch (e) {
          return [];
        }
      })(),
      navClass: (function () {
        try {
          return JSON.parse(c.attr("data-nav-class"));
        } catch (e) {
          return ["owl-prev", "owl-next"];
        }
      })(),
    });
  }

  function initLightGallery(itemsToInit, addClass) {
    if (!isNoviBuilder) {
      $(itemsToInit).lightGallery({
        thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
        selector: "[data-lightgallery='item']",
        autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
        pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
        addClass: addClass,
        mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
        loop: $(itemsToInit).attr("data-lg-loop") !== "false",
      });
    }
  }

  function initLightGalleryItem(itemToInit, addClass) {
    if (!isNoviBuilder) {
      $(itemToInit).lightGallery({
        selector: "this",
        addClass: addClass,
        counter: false,
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          controls: 0,
        },
        vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
        },
      });
    }
  }

  function attachFormValidator(elements) {
    // regula.custom({
    //   name: "PhoneNumber",
    //   defaultMessage: "Invalid phone number format",
    //   validator: function () {
    //     if (this.value === "") return true;
    //     else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value);
    //   },
    // });
    for (var i = 0; i < elements.length; i++) {
      var o = $(elements[i]),
        v;
      o.addClass("form-control-has-validation").after(
        "<span class='form-validation'></span>"
      );
      v = o.parent().find(".form-validation");
      if (v.is(":last-child")) o.addClass("form-control-last-child");
    }
    elements
      .on("input change propertychange blur", function (e) {
        var $this = $(this),
          results;
        if (e.type !== "blur")
          if (!$this.parent().hasClass("has-error")) return;
        if ($this.parents(".rd-mailform").hasClass("success")) return;
        if ((results = $this.regula("validate")).length) {
          for (i = 0; i < results.length; i++) {
            $this
              .siblings(".form-validation")
              .text(results[i].message)
              .parent()
              .addClass("has-error");
          }
        } else {
          $this
            .siblings(".form-validation")
            .text("")
            .parent()
            .removeClass("has-error");
        }
      })
      .regula("bind");
    var regularConstraintsMessages = [
      {
        type: regula.Constraint.Required,
        newMessage: "The text field is required.",
      },
      {
        type: regula.Constraint.Email,
        newMessage: "The email is not a valid email.",
      },
      {
        type: regula.Constraint.Numeric,
        newMessage: "Only numbers are required",
      },
      {
        type: regula.Constraint.Selected,
        newMessage: "Please choose an option.",
      },
    ];
    for (var i = 0; i < regularConstraintsMessages.length; i++) {
      var regularConstraint = regularConstraintsMessages[i];
      regula.override({
        constraintType: regularConstraint.type,
        defaultMessage: regularConstraint.newMessage,
      });
    }
  }

  function isValidated(elements, captcha) {
    var results,
      errors = 0;
    if (elements.length) {
      for (var j = 0; j < elements.length; j++) {
        var $input = $(elements[j]);
        if ((results = $input.regula("validate")).length) {
          for (k = 0; k < results.length; k++) {
            errors++;
            $input
              .siblings(".form-validation")
              .text(results[k].message)
              .parent()
              .addClass("has-error");
          }
        } else {
          $input
            .siblings(".form-validation")
            .text("")
            .parent()
            .removeClass("has-error");
        }
      }
      if (captcha) {
        if (captcha.length) {
          return validateReCaptcha(captcha) && errors === 0;
        }
      }
      return errors === 0;
    }
    return true;
  }

  function validateReCaptcha(captcha) {
    var captchaToken = captcha.find(".g-recaptcha-response").val();
    if (captchaToken.length === 0) {
      captcha
        .siblings(".form-validation")
        .html("Please, prove that you are not robot.")
        .addClass("active");
      captcha.closest(".form-wrap").addClass("has-error");
      captcha.on("propertychange", function () {
        var $this = $(this),
          captchaToken = $this.find(".g-recaptcha-response").val();
        if (captchaToken.length > 0) {
          $this.closest(".form-wrap").removeClass("has-error");
          $this.siblings(".form-validation").removeClass("active").html("");
          $this.off("propertychange");
        }
      });
      return false;
    }
    return true;
  }

  function getLatLngObject(str, marker, map, callback) {
    var coordinates = {};
    try {
      coordinates = JSON.parse(str);
      callback(
        new google.maps.LatLng(coordinates.lat, coordinates.lng),
        marker,
        map
      );
    } catch (e) {
      map.geocoder.geocode(
        {
          address: str,
        },
        function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            callback(
              new google.maps.LatLng(
                parseFloat(latitude),
                parseFloat(longitude)
              ),
              marker,
              map
            );
          }
        }
      );
    }
  }
  function initMaps() {
    var key;
    for (var i = 0; i < plugins.maps.length; i++) {
      if (plugins.maps[i].hasAttribute("data-key")) {
        key = plugins.maps[i].getAttribute("data-key");
        break;
      }
    }
    $.getScript(
      "//maps.google.com/maps/api/js?" +
        (key ? "key=" + key + "&" : "") +
        "sensor=false&libraries=geometry,places&v=quarterly",
      function () {
        var head = document.getElementsByTagName("head")[0],
          insertBefore = head.insertBefore;
        head.insertBefore = function (newElement, referenceElement) {
          if (
            (newElement.href &&
              newElement.href.indexOf(
                "//fonts.googleapis.com/css?family=Roboto"
              ) !== -1) ||
            newElement.innerHTML.indexOf("gm-style") !== -1
          ) {
            return;
          }
          insertBefore.call(head, newElement, referenceElement);
        };
        var geocoder = new google.maps.Geocoder();
        for (var i = 0; i < plugins.maps.length; i++) {
          var zoom =
            parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
          var styles = plugins.maps[i].hasAttribute("data-styles")
            ? JSON.parse(plugins.maps[i].getAttribute("data-styles"))
            : [];
          var center =
            plugins.maps[i].getAttribute("data-center") || "New York";
          var map = new google.maps.Map(
            plugins.maps[i].querySelectorAll(".google-map")[0],
            {
              zoom: zoom,
              styles: styles,
              scrollwheel: false,
              center: {
                lat: 0,
                lng: 0,
              },
            }
          );
          plugins.maps[i].map = map;
          plugins.maps[i].geocoder = geocoder;
          plugins.maps[i].keySupported = true;
          plugins.maps[i].google = google;
          getLatLngObject(center, null, plugins.maps[i], function (
            location,
            markerElement,
            mapElement
          ) {
            mapElement.map.setCenter(location);
          });
          var markerItems = plugins.maps[i].querySelectorAll(
            ".google-map-markers li"
          );
          if (markerItems.length) {
            var markers = [];
            for (var j = 0; j < markerItems.length; j++) {
              var markerElement = markerItems[j];
              getLatLngObject(
                markerElement.getAttribute("data-location"),
                markerElement,
                plugins.maps[i],
                function (location, markerElement, mapElement) {
                  var icon =
                    markerElement.getAttribute("data-icon") ||
                    mapElement.getAttribute("data-icon");
                  var activeIcon =
                    markerElement.getAttribute("data-icon-active") ||
                    mapElement.getAttribute("data-icon-active");
                  var info =
                    markerElement.getAttribute("data-description") || "";
                  var infoWindow = new google.maps.InfoWindow({
                    content: info,
                  });
                  markerElement.infoWindow = infoWindow;
                  var markerData = {
                    position: location,
                    map: mapElement.map,
                  };
                  if (icon) {
                    markerData.icon = icon;
                  }
                  var marker = new google.maps.Marker(markerData);
                  markerElement.gmarker = marker;
                  markers.push({
                    markerElement: markerElement,
                    infoWindow: infoWindow,
                  });
                  marker.isActive = false;
                  google.maps.event.addListener(
                    infoWindow,
                    "closeclick",
                    function (markerElement, mapElement) {
                      var markerIcon = null;
                      markerElement.gmarker.isActive = false;
                      markerIcon =
                        markerElement.getAttribute("data-icon") ||
                        mapElement.getAttribute("data-icon");
                      markerElement.gmarker.setIcon(markerIcon);
                    }.bind(this, markerElement, mapElement)
                  );
                  google.maps.event.addListener(
                    marker,
                    "click",
                    function (markerElement, mapElement) {
                      if (markerElement.infoWindow.getContent().length === 0)
                        return;
                      var gMarker,
                        currentMarker = markerElement.gmarker,
                        currentInfoWindow;
                      for (var k = 0; k < markers.length; k++) {
                        var markerIcon;
                        if (markers[k].markerElement === markerElement) {
                          currentInfoWindow = markers[k].infoWindow;
                        }
                        gMarker = markers[k].markerElement.gmarker;
                        if (
                          gMarker.isActive &&
                          markers[k].markerElement !== markerElement
                        ) {
                          gMarker.isActive = false;
                          markerIcon =
                            markers[k].markerElement.getAttribute(
                              "data-icon"
                            ) || mapElement.getAttribute("data-icon");
                          gMarker.setIcon(markerIcon);
                          markers[k].infoWindow.close();
                        }
                      }
                      currentMarker.isActive = !currentMarker.isActive;
                      if (currentMarker.isActive) {
                        if (
                          (markerIcon =
                            markerElement.getAttribute("data-icon-active") ||
                            mapElement.getAttribute("data-icon-active"))
                        ) {
                          currentMarker.setIcon(markerIcon);
                        }
                        currentInfoWindow.open(map, marker);
                      } else {
                        if (
                          (markerIcon =
                            markerElement.getAttribute("data-icon") ||
                            mapElement.getAttribute("data-icon"))
                        ) {
                          currentMarker.setIcon(markerIcon);
                        }
                        currentInfoWindow.close();
                      }
                    }.bind(this, markerElement, mapElement)
                  );
                }
              );
            }
          }
        }
      }
    );
  }
  if (plugins.maps.length) {
    lazyInit(plugins.maps, initMaps);
  }
});
