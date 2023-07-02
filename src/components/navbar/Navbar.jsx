import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/projects" className={styles.link}>Projects</Link>
      <Link href="/bookmarks" className={styles.link}>Bookmarks</Link>
    </div>
  );
}
