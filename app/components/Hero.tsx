import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div className={styles.brandLine}>דניגל — הפקת פודקאסט</div>
        <h1 className={styles.title}>לא עוד פודקאסט. תוכן ששווה להקשיב לו.</h1>
        <p className={styles.subtitle}>
          הפקה, עריכה וליווי מקצועי לאנשים שרוצים ליצור פודקאסט אמיתי.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            בואו נדבר
          </a>
          <a href="#projects" className="btn" style={{ borderColor: "var(--color-cream)", color: "var(--color-cream)" }}>
            פרויקטים
          </a>
        </div>
      </div>
    </section>
  );
}
