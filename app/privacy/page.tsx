import type { Metadata } from "next";
import styles from "../accessibility/page.module.css";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר Danigal Studio.",
  alternates: {
    canonical: "/מדיניות-פרטיות",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className={`section ${styles.wrap}`}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.heading}>מדיניות פרטיות</h1>

          <h2 className={styles.subheading}>1. כללי</h2>
          <p>
            דניגל סטודיו (דניאל גל) מכבד את פרטיות המשתמשים באתר danigal.co. מדיניות זו מסבירה
            אילו מידע אנו אוספים, כיצד אנו משתמשים בו, ואילו זכויות עומדות לרשותכם ביחס אליו.
          </p>

          <h2 className={styles.subheading}>2. איזה מידע אנו אוספים</h2>
          <p>
            בעת שליחת פנייה דרך טופס יצירת הקשר באתר, אנו אוספים את הפרטים שתמסרו מרצונכם: שם
            מלא, כתובת אימייל ותוכן הפנייה. מסירת הפרטים נחוצה לצורך מענה לפנייתכם, וללא מסירתם
            לא נוכל לספק מענה. בנוסף, האתר עושה שימוש בטכנולוגיות מעקב לצורך ניתוח ושיפור
            ביצועי הקמפיינים השיווקיים (ראו סעיף 4).
          </p>

          <h2 className={styles.subheading}>3. מטרות השימוש במידע</h2>
          <p>
            המידע שנמסר משמש אותנו למענה לפניות, יצירת קשר בנוגע לשירותי הפקת, עריכת והקמת
            אולפני פודקאסט, ושיפור חוויית המשתמש באתר. איננו עושים שימוש במידע למטרה אחרת
            מהמטרות המפורטות כאן.
          </p>

          <h2 className={styles.subheading}>4. עוגיות (Cookies) וטכנולוגיות מעקב</h2>
          <p>
            האתר משתמש בכלי Google Ads (gtag.js) למעקב אחר המרות — כגון לחיצה על קישור וואטסאפ
            או שליחת טופס יצירת קשר — לצורך מדידת יעילות קמפיינים שיווקיים. כלים אלו עשויים
            להציב עוגיות בדפדפן שלכם. ניתן לחסום עוגיות באמצעות הגדרות הדפדפן, או לנהל את
            העדפות הפרסום המותאם אישית שלכם מול Google בכתובת{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className={styles.link}>
              adssettings.google.com
            </a>
            .
          </p>

          <h2 className={styles.subheading}>5. מסירת מידע לצד שלישי</h2>
          <p>
            המידע שתמסרו נחשף רק לספקי שירות הנחוצים לתפעול האתר: Web3Forms (שירות חיצוני
            להעברת הודעות טופס יצירת הקשר אל תיבת הדואר שלנו) ו-Google (לצורך מעקב פרסומי כאמור
            לעיל). איננו מוכרים ואיננו משתפים את המידע שלכם עם צדדים שלישיים למטרות שיווק של
            אחרים. מידע עשוי להימסר גם אם נידרש לכך על פי דין.
          </p>

          <h2 className={styles.subheading}>6. אבטחת מידע</h2>
          <p>
            אנו נוקטים אמצעי אבטחה סבירים להגנה על המידע הנמסר לנו, אולם יש לציין כי אין אפשרות
            להבטיח הגנה מוחלטת מפני גישה בלתי מורשית.
          </p>

          <h2 className={styles.subheading}>7. זכויותיכם</h2>
          <p>
            בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981 (לרבות תיקון 13), עומדת לכם הזכות לעיין
            במידע שנאסף אודותיכם ולבקש את תיקונו או מחיקתו. לצורך מימוש הזכות, ניתן לפנות אלינו
            בפרטי הקשר שלהלן.
          </p>

          <h2 className={styles.subheading}>8. יצירת קשר</h2>
          <p>
            לכל שאלה או בקשה בנוגע למדיניות זו ולמימוש זכויותיכם:
            <br />
            דניאל גל
            <br />
            אימייל:{" "}
            <a href="mailto:daniel.grr@gmail.com" className={styles.link}>
              daniel.grr@gmail.com
            </a>
            <br />
            טלפון:{" "}
            <a href="tel:0502252263" className={styles.link}>
              050-2252263
            </a>
          </p>

          <p className={styles.date}>מדיניות זו עודכנה לאחרונה בתאריך 16.10.2026.</p>
        </div>
      </section>
    </main>
  );
}
