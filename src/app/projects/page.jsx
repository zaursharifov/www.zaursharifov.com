"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

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
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.projects));
  }, []);
  console.log(data)
  return (
    <main className={styles.projects}>
      {/* {projects.map((item, id) => (
        <Link key={id} href={item.url} className={styles.item}>
          <div className={styles.imgcontainer}>
            <img src={item.photo.url} alt="project" className={styles.img} loading="lazy" />
          </div>
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
            <div className={styles.tags}>
              {item.tags.map((tag, tid) => (
                <span key={tid}>{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))} */}
    </main>
  );
}

// const projects = [
//   {
//     name: "Gerda Butter",
//     img: "/images/gerdap.png",
//     link: "/projects/324",
//     github: "??",
//     live: "/",
//     text: "A website for Gerda Butter Company in collaboration with Ef Group. The website included sections for a blog about recipes, an about page, and a contact page. This was my first freelance job.",
//     tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
//   },
//   {
//     name: "Turaz dictianory by Bitsody",
//     img: "/images/turaz.png",
//     link: "/projects/46537",
//     live: "/",
//     text: "A mobile application for translating between Turkish and Azerbaijani. The app includes over 90,000 words and can be used without an internet connection.",
//     tags: ["React Native"],
//   },
// ];
