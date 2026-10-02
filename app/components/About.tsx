import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <video
        className={styles.video}
        src="/video/background-about.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>קצת עלי</div>
          <h2 className={styles.heading}>דניאל גל (בשבילכם דניגל)</h2>
          <p className={styles.paragraph}>
            כשפודקאסטים עוד היו בגדר ניסוי – כבר הייתי שם, עם מיקרופון פתוח ואוזניים חדות.
          </p>
          <p className={styles.paragraph}>
            אחרי שלוש שנות לימודי הפקה מוסיקלית בבית הספר רימון הגעתי במקרה לסשן הפקת פודקאסט
            של חברים, ומאז נשאבתי לעולם הזה והתאהבתי בו.
          </p>
          <p className={styles.paragraph}>
            Fast Forward קטן של 6 שנים — הקמתי וניהלתי במשך שנתיים את אולפן{" "}
            <span style={{ whiteSpace: "nowrap" }}>&quot;בית הפודיום&quot;.</span> אחרי שנתיים
            נהדרות, יצאתי לדרך עצמאית והיום אני בעלים של אחד האולפנים המתקדמים בארץ, עורך את
            הפודקאסט היומי של תאגיד השידור &quot;כאן&quot; ועוד הרבה פודקאסטים מעולים. הספקתי
            להקליט ולערוך אלפי פרקים, בכל תחום שאפשר לדמיין.
          </p>
          <p className={styles.closing}>
            אז אם יש לכם רעיון ליצירת פודקאסט, אני כאן כדי לוודא שהוא לא יישאר רק בראש —
            <br />
            אלא יישמע, ייראה וירגיש כמו שחלמתם.
          </p>
        </div>
        <img src="/images/daniel.jpg" alt="דניאל גל" className={styles.photo} />
      </div>
    </section>
  );
}
