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
        <div className={styles.eyebrow}>הפקת פודקאסט</div>
        <h1 className={styles.title}>אתם תחשבו מה יש לכם להגיד.</h1>
        <h1 className={styles.title}>אני על כל השאר.</h1>
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
