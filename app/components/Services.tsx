import styles from "./Services.module.css";

const SERVICES = [
  {
    number: "01",
    title: "בניית אולפן פודקאסט",
    text: "כל אולפן שבניתי עד היום, מהקטן לפודקאסטר המתחיל ועד לגדולים ביותר הקיימים היום בארץ, התחיל ממחשבה על מי עומד מאחורי המיקרופון.",
  },
  {
    number: "02",
    title: "עריכת פודקאסט",
    text: "יש רגעים שצריך ללטש בעדינות, ויש רגעים שצריך לחתוך. סאונד, וידאו, גרפיקה, סושיאל — רק תדברו.",
  },
  {
    number: "03",
    title: "צילום והקלטת פודקאסט",
    text: "האולפן שלי נבנה בדיוק כמו שחלמתי — מקצועי ללא פשרות, אבל עם תחושה נעימה, חופשית וביתית.",
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <div className="eyebrow">מה אני מציע</div>
        <h2 className={styles.heading}>שירותים</h2>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.number} className={styles.card}>
              <div className={styles.number}>{s.number}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
