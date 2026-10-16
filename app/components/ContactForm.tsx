"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import { trackContactFormSubmit } from "../lib/gtag";

const WEB3FORMS_ACCESS_KEY = "7d7a176c-7bb7-4390-aed8-ffaadbece93a";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "פנייה חדשה מהאתר — Danigal Studio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        trackContactFormSubmit();
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="eyebrow">צור קשר</div>
        <h2 className={styles.heading}>בואו נדבר על הפודקאסט הבא שלכם</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="contact-name" className="sr-only">
            שם מלא
          </label>
          <input id="contact-name" type="text" name="name" placeholder="שם מלא" required className={styles.input} />

          <label htmlFor="contact-email" className="sr-only">
            אימייל
          </label>
          <input id="contact-email" type="email" name="email" placeholder="Email" required className={styles.input} />

          <label htmlFor="contact-message" className="sr-only">
            ספרו לי קצת על הפרויקט
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="ספרו לי קצת על הפרויקט"
            rows={5}
            className={styles.textarea}
          />

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "שולח..." : "שליחה"}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && <p className={styles.success}>תודה! ההודעה נשלחה, אחזור אליכם בהקדם.</p>}
            {status === "error" && (
              <p className={styles.errorMsg}>
                משהו השתבש בשליחה. אפשר גם לכתוב ישירות ל-daniel.grr@gmail.com.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
