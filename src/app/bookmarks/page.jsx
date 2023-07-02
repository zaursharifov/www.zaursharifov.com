"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Bookmarks() {
  const [selected, setSelected] = useState("Tools");

  return (
    <main className={styles.bookmarks}>
      <div className={styles.header}>
        {categories.map((item, id) => (
          <button key={id} className={styles.button} onClick={() => setSelected(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <Link href="/" className={styles.item}>
          <span>Clip Path</span>
          <span>helping for something in css</span>
        </Link>
      </div>
    </main>
  );
}
const categories = ["Tools", "Applications", "Vs Code Extensions", "React Development", "Js Development"];
