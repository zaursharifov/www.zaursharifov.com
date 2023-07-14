"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";

export default function Bookmarks() {
  const [selected, setSelected] = useState("clk1bvi19604a09uvficztrjh");
  const [bookmarks, categories] = useFetch(
    `{
    bookmarks {
      desc
      id
      link
      name
      category {
        id
      }
    },
    categories {
      id
      name
    }
  }`,
    "bookmarks",
  );

  // Tools, Interview Questions, Remote jobs, Js development, React development, Applications, VS Code Extensions

  return (
    <main className={styles.bookmarks}>
      <div className={styles.header}>
        {categories.map((item) => (
          <button key={item.id} className={styles.button} onClick={() => setSelected(item.id)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {bookmarks.map(
          (item) =>
            selected === item.category.id && (
              <Link key={item.id} href={item.link} target="_blank" className={styles.item}>
                <span>{item.name}</span>
                <span>{item.desc}</span>
              </Link>
            ),
        )}
      </div>
    </main>
  );
}
