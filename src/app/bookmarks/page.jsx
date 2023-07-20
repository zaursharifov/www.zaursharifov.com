"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
      <motion.div className={styles.content} initial="hidden" animate="visible" variants={container}>
        {bookmarks.map(
          (bookmark) =>
            selected === bookmark.category.id && (
              <motion.div key={bookmark.id} variants={item}>
                <Link href={bookmark.link} target="_blank" className={styles.item}>
                  <span>{bookmark.name}</span>
                  <span>{bookmark.desc}</span>
                </Link>
              </motion.div>
            ),
        )}
      </motion.div>
    </main>
  );
}
