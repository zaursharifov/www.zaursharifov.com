"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Bookmarks() {
  const [selected, setSelected] = useState("cljy4uonhbpde0bw45xwpibgw");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GRAPHQL_CMS_API}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
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
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.bookmarks);
        setCategories(res.data.categories);
      });
  }, []);

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
        {data.map(
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
