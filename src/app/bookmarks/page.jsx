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
        <Link href="https://bennettfeely.com/clippy/" target="_blank" className={styles.item}>
          <span>Bennettfeely</span>
          <span>css clip-path maker</span>
        </Link>
        <Link href="https://cssgradient.io" target="_blank" className={styles.item}>
          <span>Css Gradient</span>
          <span>gradiant color generator</span>
        </Link>
        <Link href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" target="_blank" className={styles.item}>
          <span>Blind 75 LeetCode Questions</span>
          <span>most choosen interview questions</span>
        </Link>
      </div>
    </main>
  );
}
const categories = ["Tools", "Applications", "Vs Code Extensions", "React Development", "Js Development"];
