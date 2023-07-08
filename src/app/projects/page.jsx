"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [data, setData] = useState([]);
  const tags = ["HTML", "CSS", "Bootstrap","Javascript"]

  useEffect(() => {
    fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljr5v0nv09y901tc4sb456vd/master", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          projects {
            description
            github
            id
            live
            name
            url
            detail {
              html
            }
            photo {
              url
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.projects));
  }, []);

  return (
    <main className={styles.projects}>
      {data.map((item) => (
        <Link key={item.id} href={`/projects/${item.url}`} className={styles.item}>
          <Image src={item.photo.url} alt={item.name} className={styles.img} loading="lazy" width={350} height={250} unoptimized />
          <div className={styles.about}>
            <h3>{item.name}</h3>
            <p className={styles.text}>{item.description}</p>
            <div className={styles.tags}>
              {tags.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}