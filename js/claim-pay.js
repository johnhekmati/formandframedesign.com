/**
 * Wire package + claim CTAs to Stripe Payment Links when configured.
 * Empty config → leave mailto / existing href alone.
 */
(function () {
  var cfg = window.FFD_STRIPE || {};

  var map = {
    "tier-b": "identity_500",
    "tier-a": "shop_2500",
    "lane-2": "l2_12000",
  };

  function payUrl(key) {
    var u = cfg[key];
    if (typeof u !== "string") return "";
    u = u.trim();
    if (!u) return "";
    if (
      u.indexOf("https://buy.stripe.com/") !== 0 &&
      u.indexOf("https://checkout.stripe.com/") !== 0
    ) {
      console.warn("FFD Stripe: ignore non-Stripe URL for", key);
      return "";
    }
    return u;
  }

  function applyLink(el, url) {
    if (!el || !url) return;
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    el.dataset.payReady = "1";
  }

  function wirePackages() {
    Object.keys(map).forEach(function (pkgId) {
      var card = document.getElementById(pkgId);
      if (!card) return;
      var url = payUrl(map[pkgId]);
      if (!url) return;
      applyLink(card.querySelector(".pkg-cta"), url);
      card.dataset.payKey = map[pkgId];
    });
  }

  function wireClaimFor(pkgId) {
    var key = (pkgId && map[pkgId]) || "identity_500";
    var url = payUrl(key);
    if (!url) return;
    document.querySelectorAll("#claim a.btn-light").forEach(function (btn) {
      applyLink(btn, url);
    });
  }

  wirePackages();

  var selected = document.querySelector(
    ".pkg.is-selected, .pkg[aria-selected='true']"
  );
  wireClaimFor(selected ? selected.id : "tier-b");

  document.querySelectorAll(".pkg[data-package]").forEach(function (pkg) {
    pkg.addEventListener("click", function () {
      wireClaimFor(pkg.id);
    });
  });
})();
