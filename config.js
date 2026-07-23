/**
 * Cấu hình link redirect theo domain (Cloudflare).
 * Thêm domain mới vào `domains` — khi trỏ domain lên CF sẽ tự ăn link tương ứng.
 */
window.LINK_CONFIG = {
  default: "https://gg8835.com/?id=153189538",

  domains: {
    "ggtong.vip": "https://www.gg8842.com/?id=153189538",
    "gg8869.net": "https://gg8835.com/?id=647827737",
    "gg8888.uk": "https://gg8824.com/?id=582517684",
    "g8us.com": "https://gg8858.com/?id=987594635",
    "gg88bet.cc": "https://www.gg8826.com/?id=504586243",
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
