import Image from "next/image";
import { podcasts } from "../data/podcasts";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section id="projects" className={`section ${styles.portfolio}`}>
      <div className="container">
        <h2 className={styles.heading}>פרויקטים</h2>

        <div className={styles.grid}>
          {podcasts.map((p) => (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className={styles.item}>
              <div className={styles.imageWrap}>
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 700px) 50vw, 20vw" className={styles.image} />
                <div className={styles.playOverlay}>
                  <span>האזינו</span>
                </div>
              </div>
              <div className={styles.name}>{p.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
