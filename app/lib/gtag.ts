export const GOOGLE_ADS_ID = "AW-17487183994";

export const WHATSAPP_CONVERSION_LABEL = "5LT2CJKiupAdEPqAxZJB";

export const CONTACT_FORM_CONVERSION_LABEL = "xnkKCNOVspAdEPqAxZJB";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackConversion(label: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` });
}

export function trackWhatsappClick() {
  trackConversion(WHATSAPP_CONVERSION_LABEL);
}

export function trackContactFormSubmit() {
  trackConversion(CONTACT_FORM_CONVERSION_LABEL);
}
