"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "בית", href: "/" },
  { label: "קצת עלי", href: "/#about" },
  { label: "פרויקטים", href: "/#projects" },
  { label: "הקמת אולפן", href: "/הקמת-אולפן" },
  { label: "צור קשר", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <img src="/images/logo-black.svg" alt="Danigal Studio" className={styles.logo} />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.menuBtn}
          aria-label="תפריט"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
