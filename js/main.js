(function () {
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  var header = document.getElementById("site-header");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mainNav.classList.toggle("open");
    });
  }
  var triggers = document.querySelectorAll(".nav-trigger");
  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.closest(".nav-group");
      if (!parent) return;
      var isOpen = parent.classList.contains("open");
      parent.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", updateHeaderState);
  updateHeaderState();
  document.querySelectorAll(".track-call").forEach(function (el) {
    el.addEventListener("click", function () {
      var payload = { event: "click_to_call", label: el.textContent.trim(), page: window.location.pathname, timestamp: new Date().toISOString() };
      try { localStorage.setItem("mjrp_last_call_click", JSON.stringify(payload)); } catch (e) {}
      if (window.gtag) window.gtag("event", "click_to_call", { event_category: "engagement", event_label: payload.page });
    });
  });
})();
