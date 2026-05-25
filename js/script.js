/**
 * ESSENTIA — All page interactions
 */
(function () {
  "use strict";

  var page = document.body.getAttribute("data-page");

  initMobileNav();

  if (page === "home") initHome();
  if (page === "about") initAbout();
  if (page === "amenities") initAmenities();
  if (page === "contact") initContact();

  /* ----- Mobile navigation ----- */
  function initMobileNav() {
    var drawer = document.getElementById("mobile-drawer");
    var panel = document.getElementById("drawer-panel");
    var backdrop = document.getElementById("drawer-backdrop");
    var openBtn = document.getElementById("menu-toggle");
    var closeBtn = document.getElementById("drawer-close");

    if (!drawer || !panel) return;

    function openDrawer() {
      drawer.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    if (openBtn) openBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);
  }

  /* ----- Home ----- */
  function initHome() {
    var expBtn = document.getElementById("exp-btn");
    var invBtn = document.getElementById("inv-btn");
    var viewExp = document.getElementById("view-experience");
    var viewInv = document.getElementById("view-investor");
    var content = document.getElementById("toggle-content");
    var heroImg = document.querySelector(".hero__bg img");

    if (expBtn && invBtn && content) {
      expBtn.addEventListener("click", function () {
        switchToggle(content, expBtn, invBtn, viewExp, viewInv, true);
      });
      invBtn.addEventListener("click", function () {
        switchToggle(content, invBtn, expBtn, viewInv, viewExp, false);
      });
    }

    if (heroImg) {
      window.addEventListener("scroll", function () {
        heroImg.style.transform = "translateY(" + window.pageYOffset * 0.4 + "px)";
      });
    }
  }

  function switchToggle(content, activeBtn, inactiveBtn, showEl, hideEl, isExp) {
    content.classList.add("is-fading");
    setTimeout(function () {
      activeBtn.classList.add("is-active");
      inactiveBtn.classList.remove("is-active");
      showEl.classList.remove("is-hidden");
      hideEl.classList.add("is-hidden");
      content.classList.remove("is-fading");
    }, 300);
  }

  /* ----- About ----- */
  function initAbout() {
    var btnExp = document.getElementById("btn-experience");
    var btnInv = document.getElementById("btn-investor");
    var sliderBg = document.getElementById("toggle-bg");
    var contentExp = document.getElementById("content-experience");
    var contentInv = document.getElementById("content-investor");
    var header = document.querySelector(".site-header");

    if (btnExp && btnInv && sliderBg) {
      btnExp.addEventListener("click", function () {
        sliderBg.classList.remove("is-investor");
        btnExp.classList.add("is-active");
        btnInv.classList.remove("is-active");
        contentExp.classList.remove("is-hidden");
        contentInv.classList.add("is-hidden");
      });

      btnInv.addEventListener("click", function () {
        sliderBg.classList.add("is-investor");
        btnInv.classList.add("is-active");
        btnExp.classList.remove("is-active");
        contentExp.classList.add("is-hidden");
        contentInv.classList.remove("is-hidden");
      });
    }

    if (header) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    }
  }

  /* ----- Amenities ----- */
  function initAmenities() {
    window.setActiveMarker = function (id) {
      var i;
      for (i = 1; i <= 3; i++) {
        var indicator = document.getElementById("indicator-" + i);
        var markerEl = document.getElementById("marker-" + i);
        if (!indicator || !markerEl) continue;
        var dot = markerEl.querySelector(".marker-dot");

        if (i === id) {
          indicator.classList.add("is-active");
          if (dot) {
            dot.classList.add("marker-dot--active", "marker-pulse");
            dot.classList.remove("marker-dot--inactive");
          }
        } else {
          indicator.classList.remove("is-active");
          if (dot) {
            dot.classList.remove("marker-dot--active", "marker-pulse");
            dot.classList.add("marker-dot--inactive");
          }
        }
      }
    };

    var expBtn = document.getElementById("btn-experience");
    var invBtn = document.getElementById("btn-investor");

    if (expBtn && invBtn) {
      expBtn.addEventListener("click", function () {
        expBtn.classList.add("is-active");
        invBtn.classList.remove("is-active");
      });
      invBtn.addEventListener("click", function () {
        invBtn.classList.add("is-active");
        expBtn.classList.remove("is-active");
      });
    }

    var sections = document.querySelectorAll("main section");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach(function (section) {
        section.classList.add("section-fade");
        observer.observe(section);
      });
    } else {
      sections.forEach(function (section) {
        section.classList.add("is-visible");
      });
    }
  }

  /* ----- Contact ----- */
  function initContact() {
    var inputs = document.querySelectorAll(".form-input");
    inputs.forEach(function (input) {
      input.addEventListener("focus", function () {
        var label = input.parentElement.querySelector("label");
        if (label) label.style.color = "#b18d48";
      });
      input.addEventListener("blur", function () {
        if (!input.value) {
          var label = input.parentElement.querySelector("label");
          if (label) label.style.color = "";
        }
      });
    });
  }
})();
