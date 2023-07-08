"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [data, setData] = useState([]);

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
        <Link key={item.id} href={item.url} className={styles.item} >
            <Image src={item.photo.url} alt={item.name} className={styles.img} loading="lazy" width={350} height={250} unoptimized/>
          <div className={styles.about}>
            <div className={styles.header}>
              <h3>{item.name}</h3>
              {item.live && (
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 512 512" fill="#888">
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                </svg>
              )}
            </div>
            <p className={styles.text}>{item.description}</p>
            <div className={styles.tags}></div>
          </div>
        </Link>
      ))}
    </main>
  );
}

// <div className={styles.tags}>
//     {item.tags.map((tag, tid) => (
//         <span key={tid}>{tag}</span>
//     ))}
// </div>
