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
    "g8us.com": "https://gg8854.com/?id=670349095",
    "gg88bet.cc": "https://www.gg8826.com/?id=504586243",
    "gg883.uk": "https://www.gg8826.com/?id=801752117",
    "gg88top.us": "https://gg8843.com/?id=229091387",
    "gg88t.uk": "https://gg8817.com/?id=217268508",
    "gg88s.us": "https://www.gg8854.com/?id=100766338",
    "gg88in.org": "https://www.gg8842.com/?id=124348462",
    "gg88z.link": "https://gg8832.com/?id=959420310",
    "gg88bet.uk": "https://www.gg8850.com/?id=532307045",
    "g8d1.net": " https://www.gg8859.com/?id=235748786",
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
