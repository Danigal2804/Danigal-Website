"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import { trackContactFormSubmit } from "../lib/gtag";

// TODO: Replace with a real Web3Forms access key (sign up free at https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_KEY";

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
          <input type="text" name="name" placeholder="שם מלא" required className={styles.input} />
          <input type="email" name="email" placeholder="Email" required className={styles.input} />
          <textarea name="message" placeholder="ספרו לי קצת על הפרויקט" rows={5} className={styles.textarea} />

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "שולח..." : "שליחה"}
          </button>

          {status === "success" && <p className={styles.success}>תודה! ההודעה נשלחה, אחזור אליכם בהקדם.</p>}
          {status === "error" && (
            <p className={styles.errorMsg}>
              משהו השתבש בשליחה. אפשר גם לכתוב ישירות ל-daniel.grr@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
