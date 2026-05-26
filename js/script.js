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

  /* ----- Toast notifications (reusable) ----- */
  var toastDismissTimer = null;
  var activeToastEl = null;

  function getToastContainer() {
    var container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      container.setAttribute("aria-live", "polite");
      container.setAttribute("aria-atomic", "true");
      document.body.appendChild(container);
    }
    return container;
  }

  function dismissToast(toast) {
    if (!toast) return;

    toast.classList.remove("is-visible");
    toast.classList.add("is-hiding");

    setTimeout(function () {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      if (activeToastEl === toast) {
        activeToastEl = null;
      }
    }, 350);
  }

  /**
   * @param {"success"|"error"} type
   * @param {string} message - Use \\n for line breaks
   * @param {string} [title] - Defaults to Success / Error
   */
  window.showToast = function (type, message, title) {
    var titles = { success: "Success", error: "Error" };
    var toastTitle = title || titles[type] || "";
    var iconName = type === "success" ? "check_circle" : "error";
    var duration = 4500;

    if (activeToastEl) {
      dismissToast(activeToastEl);
    }

    if (toastDismissTimer) {
      clearTimeout(toastDismissTimer);
      toastDismissTimer = null;
    }

    var toast = document.createElement("div");
    toast.className = "toast toast--" + type;
    toast.setAttribute("role", "alert");

    var iconWrap = document.createElement("div");
    iconWrap.className = "toast__icon-wrap";
    iconWrap.innerHTML =
      '<span class="material-symbols-outlined">' + iconName + "</span>";

    var content = document.createElement("div");
    content.className = "toast__content";

    var titleEl = document.createElement("p");
    titleEl.className = "toast__title";
    titleEl.textContent = toastTitle;

    var messageWrap = document.createElement("div");
    messageWrap.className = "toast__message";
    message.split("\n").forEach(function (line) {
      if (!line.trim()) return;
      var lineEl = document.createElement("p");
      lineEl.className = "toast__message-line";
      lineEl.textContent = line.trim();
      messageWrap.appendChild(lineEl);
    });

    content.appendChild(titleEl);
    content.appendChild(messageWrap);
    toast.appendChild(iconWrap);
    toast.appendChild(content);

    getToastContainer().appendChild(toast);
    activeToastEl = toast;

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.classList.add("is-visible");
      });
    });

    toastDismissTimer = setTimeout(function () {
      dismissToast(toast);
      toastDismissTimer = null;
    }, duration);
  };

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
    var whatsappBtn = document.querySelector(".btn-whatsapp");
    var callBtn = document.querySelector(".btn-call");

    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", function () {
        window.open("https://wa.me/918668227747", "_blank", "noopener,noreferrer");
      });
    }

    if (callBtn) {
      callBtn.addEventListener("click", function () {
        window.location.href = "tel:+918668227747";
      });
    }

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

    initInquiryForm();
  }

  function initInquiryForm() {
    var SENDMAIL_URL = "sendmail.php";

    var form = document.getElementById("inquiry-form");
    var feedback = document.getElementById("form-feedback");
    var submitBtn = document.getElementById("submit-inquiry");
    var fullNameInput = document.getElementById("fullname");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var interestInput = document.getElementById("interest");

    if (!form) return;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isSubmitting = false;

    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        phoneInput.value = phoneInput.value.replace(/\D/g, "");
      });
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (isSubmitting) return;

      clearFieldErrors();
      hideFeedback();

      var fullName = fullNameInput ? fullNameInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var phone = phoneInput ? phoneInput.value.trim() : "";
      var interest = interestInput ? interestInput.value.trim() : "";
      var isValid = true;

      if (!fullName) {
        markInvalid(fullNameInput);
        isValid = false;
      }

      if (!email || !emailPattern.test(email)) {
        markInvalid(emailInput);
        isValid = false;
      }

      if (!phone || phone.length < 10) {
        markInvalid(phoneInput);
        isValid = false;
      }

      if (!interest) {
        markInvalid(interestInput);
        isValid = false;
      }

      if (!isValid) {
        showToast(
          "error",
          "Please complete all fields correctly. Email must be valid and phone must contain at least 10 digits."
        );
        return;
      }

      isSubmitting = true;
      setSubmitting(true);

      var formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("interest", interest);

      try {
        var response = await fetch(SENDMAIL_URL, {
          method: "POST",
          body: formData
        });

        var result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Send failed");
        }

        form.reset();
        if (interestInput) {
          interestInput.selectedIndex = 0;
        }
        clearFieldErrors();
        showToast(
          "success",
          "Thank you for your inquiry.\nOur team will contact you shortly."
        );
      } catch (err) {
        showToast("error", "Something went wrong. Please try again.");
      } finally {
        isSubmitting = false;
        setSubmitting(false);
      }
    });

    function markInvalid(field) {
      if (field) field.classList.add("is-invalid");
    }

    function clearFieldErrors() {
      form.querySelectorAll(".form-input").forEach(function (field) {
        field.classList.remove("is-invalid");
      });
    }

    function hideFeedback() {
      if (!feedback) return;
      feedback.textContent = "";
      feedback.className = "form-feedback is-hidden";
    }

    function setSubmitting(submitting) {
      if (!submitBtn) return;
      submitBtn.disabled = submitting;
      submitBtn.textContent = submitting ? "Sending..." : "Submit Inquiry";
    }
  }
})();
