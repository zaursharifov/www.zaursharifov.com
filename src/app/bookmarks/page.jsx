"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Bookmarks() {
  const [selected, setSelected] = useState("Tools");
  return (
    <div className={styles.bookmarks}>
      <div className={styles.header}>
        {categories.map((item, id) => (
          <button key={id} className={styles.button} onClick={() => setSelected(item.name)}>
            {item.name}
          </button>
        ))}
        {categories.filter(item => item.name === selected && item.list?.map((i,d)=> <button key={d}>{i}</button>))}
        {/* {categories.filter((item)=> item.name === selected && item.list?.map((i, d) => <button key={d}>{i}</button>))} */}
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Tools",
    list: ["Css tools", "Js tools", "Other"],
  },
  {
    name: "Applications",
  },
  {
    name: "Vs Code Extensions",
  },
  {
    name: "React Development",
    list: ["Youtube project videos", "Blogs", "Interview Questions"],
  },
  {
    name: "Js Development",
    list: ["Youtube tutorial projects", "Forum", "Interview Questions", "Stackoverflow"],
  },
];
