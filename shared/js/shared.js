/*!
 * ScriptName: shared.js
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

$(document).ready(function () {
  $(".slick-auto").on("touchstart", function (e) {
    $(this).slick("slickPlay");
  });
});

//var UA = navigator.userAgent;
//		if(navigator.userAgent.match(/Trident\/7\./)) {
//		  $('body').on("mousewheel", function () {
//			  event.preventDefault();
//			  var wd = event.wheelDelta;
//			  var csp = window.pageYOffset;
//			  window.scrollTo(0, csp - wd);
//		  });
//		}

$(document).ready(function () {
  "use strict";
  $(".scroll_box").slideUp(0);
  $(".btn-acc").click(function () {
    if ($(this).hasClass("close")) {
      $(this).next().slideDown(1000);
      $(this).removeClass("close").addClass("open");
    } else {
      $(this).next().slideUp(500);
      $(this).removeClass("open").addClass("close");
    }
  });
});

$(function () {
  "use strict";
});

$(function () {
  $("body").removeClass("navOpen");
  $(".hamburger,.brand_ham").click(function () {
    if ($("body").hasClass("navOpen")) {
      $("body").addClass("navClose");
      $("body").removeClass("navOpen");
      // $('body').css('position', 'static');
      //$(window).scrollTop(offsetZ);
      $(".hamburger,.brand_ham").removeClass("is-active");
    } else {
      $("body").addClass("navOpen");
      $("body").removeClass("navClose");
      /* offsetZ = window.pageYOffset;
     
        $('body').css({
          position: 'fixed',
          width: '100%',
          'top': -offsetZ + 'px'
        });
      */
      $(".hamburger,.brand_ham").addClass("is-active");
      return false;
    }
  });

  $(
    "#navigation  a, #navigation .close ,#navigation  .tel a,#navigation .soc a"
  ).click(function () {
    $("body").removeClass("navOpen");
    $("body").addClass("navClose");
    $(".hamburger,.brand_ham").removeClass("is-active");
    // $('body').css('position', 'static');
  });
  $(".tel-click").click(function () {
    $("body").removeClass("hs-telpop");
    $("body").addClass("hs-telpop");
  });

  $(".hd-nav .popup").click(function () {
    $("body").removeClass("hs-corona");
    $("body").addClass("hs-corona");
  });

  $(".btn-copy").click(function () {
    $(".btn-copy").addClass("hs-copie");
  });
});

$(window).load(function (e) {
  var hash1 = location.hash;
  var $root = $("html, body");
  if (hash1 != "" && $(hash1).length > 0) {
    $(hash1).click();
  }
});

$(window).load(function (e) {
  var hash1 = location.hash;
  var $root = $("html, body");
  var navH = $(".nav-fixed").outerHeight();
  if (hash1 != "") {
    var top01 = $(hash1).offset();
    //alert(hash1);
    $("html,body").animate({ scrollTop: top01.top - navH }, 500);
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    var TargetPos = $("section").offset().top;
    var ScrollPos = $(window).scrollTop();

    if (ScrollPos > TargetPos) {
      $("body").addClass("has-nav");
    } else {
      $("body").removeClass("has-nav");
    }
  });
});

function objectFitPolyfill() {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  if (isIE === true || isEdge === true) {
    $(".object-fit-cover").each(function (index, element) {
      let src = $(element).attr("data-src");
      if (src === undefined) {
        src = $(element).attr("src");
      }
      $(element).css("display", "none");
      $(element)
        .parent()
        .css({
          "background-image": "url('" + src + "')",
          "background-repear": "no-repeat",
          "background-size": "cover",
          "background-position": "center center",
        });
    });
  }
}
$(document).ready(function () {
  objectFitPolyfill();
});

$(document).ready(function () {
  if (
    $(".nav-fixed[scroll-active]").length &&
    $(".nav-fixed").attr("scroll-active") === "true"
  )
    $(document).on("scroll", onScroll);
  $('.nav-fixed a[href*="#"]').on("click", function () {
    var e = $(this).attr("href");
    var h = $(".nav-fixed").outerHeight() || $(".nav-fixed").outerHeight();
    console.log("h:", h);
    var b = $(e).length ? $(e).offset().top : 0;
    $("html, body").animate(
      {
        scrollTop: b + 3 - h,
      },
      500
    );
  });
});

function onScroll() {
  var scroll = $(window).scrollTop();
  var header = $(".nav-fixed").outerHeight();
  $('.nav-fixed .nav1 a[href^="#"]').each(function () {
    var el = $(this).attr("href");
    var offset = $(el).length ? $(el).offset().top : 0;

    if (
      scroll + header + 3 >= offset &&
      $(el).outerHeight() + offset > scroll + header
    ) {
      $('.nav-fixed .nav1 a[href^="#"]').removeClass("active");
      $(this).addClass("active");
    }
  });
}
var lastScrollTop = 0;

//fix scroll ios
var overflowIsHidden = function (node) {
  var style = getComputedStyle(node);
  return (
    style.overflow === "hidden" ||
    style.overflowX === "hidden" ||
    style.overflowY === "hidden"
  );
};
var isItScrollableWithoutVisibleScrollbars = function (el) {
  if (el === null) return false;
  var isScrollable = false,
    hasScrollbars = false;
  isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
  // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content
  if (isScrollable)
    hasScrollbars = el.offsetWidth > el.scrollWidth ? true : false; // if it's scrollable, let's see if it likely has scrollbars
  // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
  if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
  else return false;
};
document.addEventListener(
  "touchmove",
  function (e) {
    if (
      document.body.classList.contains("navOpen") &&
      !isItScrollableWithoutVisibleScrollbars(
        document.getElementById("navigation")
      )
    )
      e.preventDefault();
  },
  {
    passive: false,
  }
);

$(".toggle-close").click(function () {
  var $toggleDuration2 = 500;
  $(this)
    .parents(".toggle-main")
    .first()
    .stop()
    .slideUp($toggleDuration2, function () {
      $(this).removeAttr("style");
      $(this).parents(".toggle").first().removeClass("active");
    });
});

//invert logo
setTimeout(() => {
  document.querySelector(".is-invert")?.classList.add("load_top");
}, 0.1);

//fix toggle nav
const navFix = document.querySelector(".nav-fixed");
document.addEventListener("click", (e) => {
  if (!navFix.contains(e.target) && e.target !== navFix) {
    document.querySelector(".has-nav")?.classList.remove("navOpen");
  }
});

const headerSection = document.querySelector("#top");
function activeFirstNav() {
  const headerRect = headerSection.getBoundingClientRect();

  if (headerRect.bottom > 0) {
    $("a[href='index.html']").add("active");
    document.querySelectorAll("a[href='index.html']").forEach((item) => {
      item.classList.add("active");
    });
  } else {
    document.querySelectorAll("a[href='index.html']").forEach((item) => {
      item.classList.remove("active");
    });
  }
}
// activeFirstNav()
// function onScroll() {

//   var scrollPos = $(document).scrollTop(),
//     $navOffset = 0;
//   if ($(window).width() < 768) {
//     $navOffset = 5;
//   }
//   if ($(window).width() >= 768) {
//     $navOffset = 93;
//   }
//   $("a[href*='#'][target!='_blank']:not([class*='btn-popup']):not([href*='html'])").removeClass("active");
//   $("a[href*='#'][target!='_blank']:not([class*='btn-popup']):not([href*='html'])").each(function () {
//     var $this = $(this);
//     if ($this.attr("href")) {
//       var csslide = $($this.attr("href"));
//       //console.log($this.attr("href"));
//       if (csslide.length > 0) {
//         if ((csslide.offset().top - $navOffset < scrollPos || csslide.offset().top - $navOffset == scrollPos) && csslide.offset().top + csslide.outerHeight() - $navOffset > scrollPos) {
//           $this.addClass("active");
//         } else {
//           $this.removeClass("active");
//         }
//       }
//     }

//     activeFirstNav()

//   });

// }
// var lastScrollTop = 0;

// window.addEventListener('scroll', onScroll)

//close navigation when click on links
document.querySelectorAll('a[href*="#"]').forEach(function (e) {
  e.addEventListener("click", () => {
    document.querySelector("body")?.classList.remove("navOpen");
  });
});

const navigationElem = document.querySelector("#navigation");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    navigationElem.classList.add("active");
  } else {
    navigationElem.classList.remove("active");
  }
});

const sections = document.querySelectorAll(".section-toggle");
const lastSection = sections[sections.length - 1];
const bodyElem = document.querySelector("body");
function isSectionInViewport(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const sectionTop = rect.top;
  const sectionBottom = rect.bottom;
  const sectionMiddle = (sectionTop + sectionBottom) / 2;

  return sectionTop <= windowHeight / 2 && sectionBottom >= windowHeight / 1.5;
}
function isSectionAtBottom(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom <= windowHeight / 1.5;
}
function handleScroll() {
  sections.forEach((section) => {
    if (isSectionInViewport(section)) {
      section.classList.add("section-active");
      bodyElem.classList.add("section-show");
    } else {
      section.classList.remove("section-active");
      bodyElem.classList.remove("section-show");
    }
    if (isSectionAtBottom(section)) {
      section.classList.add("scroll-end");
    } else {
      section.classList.remove("scroll-end");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

$(window).ready(function () {
  function scrollZoom() {
    const images = document.querySelectorAll("[data-scroll-zoom]");

    let scaleAmount = 0.5;
    let scrollPosY = 0;
    scaleAmount = scaleAmount / 100;

    const observerConfig = {
      rootMargin: "0% 0% 0% 0%",
      threshold: 0,
    };

    images.forEach((image) => {
      const scaleAmountCustom = image.getAttribute("data-scale-amount");
      if (Number(scaleAmountCustom)) {
        scaleAmount = Number(scaleAmountCustom) / 100;
      }
      let isVisible = false;
      const observer = new IntersectionObserver((elements, self) => {
        elements.forEach((element) => {
          isVisible = element.isIntersecting;
        });
      }, observerConfig);

      observer.observe(image);

      image.style.transform = `translate(0px, ${
        1 + scaleAmount * percentageSeen(image)
      }px, 0px)`;

      window.addEventListener("scroll", () => {
        if (isVisible) {
          scrollPosY = window.scrollY;

          if (window.innerWidth > 768) {
            image.style.transform = `translate3d(0px, ${
              -scaleAmount * percentageSeen(image) * 160
            }px, 0px)`;
          } else {
            image.style.transform = `translate3d(0px, ${
              -scaleAmount * percentageSeen(image) * 100
            }px, 0px)`;
          }
        }
      });
    });

    function percentageSeen(element) {
      const parent = element.parentNode;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const elPosY = parent.getBoundingClientRect().top + scrollY;
      const borderHeight =
        parseFloat(
          getComputedStyle(parent).getPropertyValue("border-bottom-width")
        ) +
        parseFloat(
          getComputedStyle(element).getPropertyValue("border-top-width")
        );
      const elHeight = parent.offsetHeight + borderHeight;

      if (elPosY > scrollY + viewportHeight) {
        // If we haven't reached the image yet
        return 0;
      } else if (elPosY + elHeight < scrollY) {
        // If we've completely scrolled past the image
        return 100;
      } else {
        // When the image is in the viewport
        const distance = scrollY + viewportHeight - elPosY;
        let percentage = distance / ((viewportHeight + elHeight) / 100);
        percentage = Math.round(percentage);

        return percentage;
      }
    }
  }

  scrollZoom();
});

const stickyPCElem = document.querySelector("sticky-pc");
// fix map

$(".sticky-wrap").each(function () {
  const stickyWrap = $(this);
  const stickyWrapTop = stickyWrap.offset().top + stickyWrap.outerHeight();
  const stickyElems = stickyWrap.find(".sticky");
  const stickyElemsPc = stickyWrap.find(".sticky-pc");

  stickyElems.each(function () {
    const stickyElem = $(this);
    const stickyTop = stickyElem.offset().top;

    $(window).on("scroll", function () {
      const windowTop = $(window).scrollTop();

      if (windowTop > stickyTop && windowTop < stickyWrapTop) {
        stickyElem.addClass("fixed").removeClass("end");
      } else {
        stickyElem.removeClass("fixed");
      }

      // add class end
      if (stickyWrapTop < windowTop + stickyElem.innerHeight()) {
        stickyElem.addClass("end");
      } else {
        stickyElem.removeClass("end");
      }
    });
  });

  if (window.innerWidth >= 768) {
    stickyElemsPc.each(function () {
      const stickyElem = $(this);
      const stickyTop = stickyElem.offset().top;

      $(window).on("scroll", function () {
        const windowTop = $(window).scrollTop();

        if (windowTop > stickyTop && windowTop < stickyWrapTop) {
          stickyElem.addClass("fixed").removeClass("end");
        } else {
          stickyElem.removeClass("fixed");
        }

        // add class end
        if (stickyWrapTop < windowTop + stickyElem.innerHeight()) {
          stickyElem.addClass("end");
        } else {
          stickyElem.removeClass("end");
        }
      });
    });
  }
});

function autoplaySlick($slide) {
  if (
    $slide.offset().top - $(window).scrollTop() < $(window).height() ||
    $slide.offset().top + $slide.outerHeight() - $(window).scrollTop() < 0
  ) {
    $slide.slick("slickPlay");
  } else {
    $slide.slick("slickPause");
  }
  $(window).scroll(function () {
    if (
      $slide.offset().top - $(window).scrollTop() < $(window).height() ||
      $slide.offset().top + $slide.outerHeight() - $(window).scrollTop() < 0
    ) {
      $slide.slick("slickPlay");
    } else {
      $slide.slick("slickPause");
    }
  });
}

//change backgorund-color
const defaultBg = `url('../img/shared/bg_bd.jpg') repeat center top`;

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".change-color");
  let lastColor = null;

  function checkSectionInView() {
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportHeight / 2;
    let newColor = defaultBg;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const isOnChangePoint = sectionTop <= viewportMiddle;

      if (isOnChangePoint) {
        const dataColor = section.dataset.color;
        if (dataColor) {
          newColor = dataColor;
        }
      }
    });

    if (newColor !== lastColor) {
      const bgOverlay = document.querySelector(".bg-overlay");
      if (bgOverlay) {
        bgOverlay.style.background = `${newColor}`;
        bgOverlay.style.transition = "background 2s";
        lastColor = newColor;
      }
    }
  }

  window.addEventListener("scroll", checkSectionInView);
  checkSectionInView();
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".dark-sec");

  function checkSectionInView() {
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportHeight / 2;
    const isChanging = Array.from(sections).some((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const isOnChangePoint =
        sectionTop <= viewportMiddle &&
        sectionTop + rect.height > viewportMiddle;
      return isOnChangePoint;
    });
    if (isChanging) {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const isOnChangePoint =
          sectionTop <= viewportMiddle &&
          sectionTop + rect.height > viewportMiddle;
        if (isOnChangePoint) {
          bodyElem.classList.add("dark-section");
        }
      });
    } else {
      bodyElem.classList.remove("dark-section");
    }
  }
  window.addEventListener("scroll", checkSectionInView);
  checkSectionInView();
});

//footer fixed
document.addEventListener("DOMContentLoaded", function () {
  const dropdownWrapper = document.querySelector(".dropdown-wrapper");
  const dropdownLink = document.querySelector(".dropdown-link");
  const dropdownMenu = document.querySelector(".dropdown");

  dropdownLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling to document
    dropdownMenu.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!dropdownWrapper.contains(event.target)) {
      dropdownMenu.classList.remove("open");
    }
  });
});
