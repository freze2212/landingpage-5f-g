/**
 * Cấu hình link redirect theo domain (Cloudflare).
 * Thêm domain mới vào `domains` — khi trỏ domain lên CF sẽ tự ăn link tương ứng.
 */
window.LINK_CONFIG = {
  default: "https://gg8835.com/?id=153189538",

  domains: {
    "ggtong.vip": "https://gg8835.com/?id=153189538",
    "gg8869.net": "https://gg8835.com/?id=647827737",
  },
};

(function () {
  "use strict";

  function normalizeHost(host) {
    return (host || "").toLowerCase().replace(/^www\./, "");
  }

  window.getRedirectUrl = function () {
    var cfg = window.LINK_CONFIG || {};
    var domains = cfg.domains || {};
    var host = normalizeHost(window.location.hostname);

    for (var domain in domains) {
      if (!Object.prototype.hasOwnProperty.call(domains, domain)) continue;
      if (normalizeHost(domain) === host) {
        return domains[domain];
      }
    }

    return cfg.default || "#";
  };

  window.REDIRECT_URL = window.getRedirectUrl();
})();
