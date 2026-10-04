// TODO: replace with the real Conversion ID from Google Ads (Tools & Settings -> Conversions -> a conversion action -> "See tag setup" -> Google tag). Looks like AW-123456789.
export const GOOGLE_ADS_ID = "AW-REPLACE_ME";

// TODO: replace with the conversion label from the "WhatsApp click" conversion action (the part after the slash in send_to).
export const WHATSAPP_CONVERSION_LABEL = "REPLACE_ME_WHATSAPP_LABEL";

// TODO: replace with the conversion label from the "Contact form" conversion action.
export const CONTACT_FORM_CONVERSION_LABEL = "REPLACE_ME_CONTACT_FORM_LABEL";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackConversion(label: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (label.startsWith("REPLACE_ME")) return;
  window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` });
}

export function trackWhatsappClick() {
  trackConversion(WHATSAPP_CONVERSION_LABEL);
}

export function trackContactFormSubmit() {
  trackConversion(CONTACT_FORM_CONVERSION_LABEL);
}
