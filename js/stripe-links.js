/**
 * FFD Stripe Payment Links — public config (links are meant to be shared).
 *
 * Setup: docs/STRIPE.md
 * Until a link is pasted, package CTAs keep mailto (hello@…) as fallback.
 * Never put secret API keys here — Payment Links only.
 */
window.FFD_STRIPE = {
  /** L1 Identity · volume floor $500 */
  identity_500: "",
  /** L1 Identity · upper band $1,000 (optional second link) */
  identity_1000: "",
  /** L1 Shop · list $2,500 */
  shop_2500: "",
  /** L2 Multi-site / platform · list ~$12,000 (public band $10–15k) */
  l2_12000: "",
  /** Optional deposit (e.g. $500 hold) — Soft Edge */
  deposit_500: "",
};
