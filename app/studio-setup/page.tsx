import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "הקמת אולפן פודקאסט | Danigal Studio",
  description: "הדרך הקלה והמקצועית לאולפן פודקאסט משלך מתחילה כאן — תכנון, עיצוב, הקמה וליווי.",
};

const STEPS = [
  { n: "01", title: "אפיון ותכנון", text: "מתחילים ממחשבה על מי עומד מאחורי המיקרופון — מה הצרכים, המרחב והתקציב." },
  { n: "02", title: "עושים קניות", text: "בוחרים את הציוד הנכון — מיקרופונים, מצלמות ופאנלים — בהתאמה למה שבאמת צריך." },
  { n: "03", title: "עיצוב והקמה", text: "הקמה בפועל של האולפן, עם דגש על אקוסטיקה, תאורה ותחושת חלל נעימה." },
  { n: "04", title: "בדיקות ושיפוצים", text: "עוברים על כל פרט — בדיקות סאונד, כיוונים ושיפורים אחרונים." },
  { n: "05", title: "ליווי ותמיכה", text: "גם אחרי שהאולפן מוכן, אני כאן — ליווי שוטף ותמיכה טכנית." },
];

export default function StudioSetupPage() {
  return (
    <main>
      <section className={styles.hero}>
        <video className={styles.video} src="/video/background-studio.mp4" autoPlay muted loop playsInline />
        <div className={styles.overlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>הקמת אולפנים</h1>
          <p className={styles.tagline}>הדרך הקלה והמקצועית לאולפן פודקאסט משלך מתחילה כאן</p>
          <a href="#contact-cta" className="btn btn-clay">
            בואו נתחיל
          </a>
        </div>
      </section>

      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className="eyebrow">למה דניגל</div>
          <p className={styles.whyText}>
            בניתי אולפנים ביתיים לעסקים קטנים ואולפנים גדולים לחברות ענק.
          </p>
        </div>
      </section>

      <section className={styles.steps}>
        <video className={styles.stepsVideo} src="/video/background-steps.mp4" autoPlay muted loop playsInline />
        <div className={styles.stepsOverlay} />
        <div className={`container ${styles.stepsInner}`}>
          <h2 className={styles.stepsHeading}>איך זה עובד</h2>
          <div className={styles.stepList}>
            {STEPS.map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNumber}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.highlight}>
        <div className={`container ${styles.highlightInner}`}>
          <video className={styles.highlightVideo} src="/video/studio-build-highlight.mp4" autoPlay muted loop playsInline />
          <div>
            <div className="eyebrow">מאחורי הקלעים</div>
            <h2 className={styles.highlightHeading}>ככה נראית הקמת אולפן, מקרוב</h2>
          </div>
        </div>
      </section>

      <section id="contact-cta" className={`section ${styles.cta}`}>
        <div className="container">
          <h2 className={styles.ctaHeading}>מוכנים להקים את האולפן שלכם?</h2>
          <div className={styles.ctaActions}>
            <a href="mailto:daniel.grr@gmail.com" className="btn btn-primary">
              daniel.grr@gmail.com
            </a>
            <a href="tel:0502252263" className="btn">
              050-2252263
            </a>
          </div>
          <p className={styles.address}>אולפן: יוסף קארו 15, תל אביב</p>
        </div>
      </section>
    </main>
  );
}
