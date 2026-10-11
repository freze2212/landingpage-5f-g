/* redirect-links.js — CTA links for v49 Singapore Skyline */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    function resolveRedirectUrl() {
      return typeof window.getRedirectUrl === 'function'
        ? window.getRedirectUrl()
        : (window.REDIRECT_URL || '#');
    }

    var redirectUrl = resolveRedirectUrl();

    /* --- Wire all .redirect-link anchors --- */
    var links = document.querySelectorAll('a.redirect-link');
    for (var i = 0; i < links.length; i++) {
      links[i].href = redirectUrl;
    }

    /* --- Main CTA → straight to the domain's link --- */
    var mainCta = document.getElementById('main-cta');
    if (mainCta) {
      mainCta.addEventListener('click', function (e) {
        var url = resolveRedirectUrl();
        if (url && url !== '#') {
          e.preventDefault();
          window.location.href = url;
        }
      });
    }

    /* --- Data visualization bars progressive fill on page load --- */
    var barFills = document.querySelectorAll('.data-bar-fill[data-target]');
    if (barFills.length) {
      /* Small delay so CSS transition is visible after paint */
      setTimeout(function () {
        for (var b = 0; b < barFills.length; b++) {
          barFills[b].style.width = barFills[b].getAttribute('data-target');
        }
      }, 400 + (barFills.length > 1 ? 100 : 0));

      /* Stagger each bar slightly */
      for (var b = 0; b < barFills.length; b++) {
        barFills[b].style.transitionDelay = (b * 0.12) + 's';
      }
    }
  });
})();
