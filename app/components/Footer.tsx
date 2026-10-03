import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <img src="/images/logo-white.svg" alt="Danigal Studio" className={styles.logo} />

        <div className={styles.details}>
          <div className={styles.name}>דניאל גל</div>
          <a href="mailto:daniel.grr@gmail.com" className={styles.link}>
            daniel.grr@gmail.com
          </a>
          <a href="tel:0502252263" className={styles.link}>
            050-2252263
          </a>
          <a
            href="https://share.google/big4391Ku6vBjOnuM"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} ${styles.address}`}
          >
            אולפן: יוסף קארו 15, תל אביב
          </a>
        </div>

        <div className={styles.social}>
          <a href="https://open.spotify.com/playlist/5g4FHwMs2PEhRzXw4I3uGW" target="_blank" rel="noreferrer" className={styles.link}>
            Spotify
          </a>
          <a href="https://www.facebook.com/daniel.gal.96/" target="_blank" rel="noreferrer" className={styles.link}>
            Facebook
          </a>
          <a href="https://www.instagram.com/danigal__" target="_blank" rel="noreferrer" className={styles.link}>
            Instagram
          </a>
          <a href="https://api.whatsapp.com/send?phone=972502252263" target="_blank" rel="noreferrer" className={styles.link}>
            WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Danigal Studio</div>
    </footer>
  );
}
