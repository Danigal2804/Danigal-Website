import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת נגישות של אתר Danigal Studio.",
  alternates: {
    canonical: "/נגישות",
  },
};

export default function AccessibilityPage() {
  return (
    <main id="main-content">
      <section className={`section ${styles.wrap}`}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.heading}>הצהרת נגישות</h1>

          <p>
            דניגל סטודיו רואה חשיבות רבה במתן שירות שוויוני ונגיש לכלל הציבור, לרבות אנשים עם
            מוגבלות, ופועלת להנגשת האתר בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ&quot;ח-1998,
            ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
          </p>

          <h2 className={styles.subheading}>רמת הנגישות</h2>
          <p>
            האתר תוכנן ונבנה תוך שאיפה לעמוד בדרישות תקן ישראלי ת&quot;י 5568 ברמת AA, המבוסס על
            הנחיות הנגישות הבינלאומיות WCAG 2.0. ההתאמות כוללות, בין היתר: ניווט מלא באמצעות
            מקלדת, תוויות ברורות לכל שדות הטפסים, טקסט חלופי לתמונות, ניגודיות צבעים עומדת
            בדרישות התקן, קישור דילוג לתוכן המרכזי, ותאימות לקוראי מסך.
          </p>

          <h2 className={styles.subheading}>מגבלות ידועות</h2>
          <p>
            חלקים מסוימים באתר, כגון סרטוני רקע דקורטיביים, מוסתרים באופן יזום מקוראי מסך מכיוון
            שאינם נושאים מידע מהותי. אנו ממשיכים לבדוק ולשפר את נגישות האתר על בסיס שוטף.
          </p>

          <h2 className={styles.subheading}>פניות בנושא נגישות</h2>
          <p>
            נתקלתם בבעיית נגישות באתר? נשמח שתפנו אלינו ונטפל בפנייה בהקדם האפשרי.
            <br />
            רכז הנגישות: דניאל גל
            <br />
            טלפון:{" "}
            <a href="tel:0502252263" className={styles.link}>
              050-2252263
            </a>
            <br />
            אימייל:{" "}
            <a href="mailto:daniel.grr@gmail.com" className={styles.link}>
              daniel.grr@gmail.com
            </a>
          </p>

          <p className={styles.date}>הצהרה זו עודכנה לאחרונה בתאריך 16.10.2026.</p>
        </div>
      </section>
    </main>
  );
}
