import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className={styles.projects}>
      {projects.map((item, id) => (
        <Link key={id} href={item.link} className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src={item.img} alt="project" width={250} height={250} className={styles.img} loading="lazy" />
          </div>
          <div className={styles.about}>
            <h3>{item.name}</h3>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.tags}>
              {item.tags.map((tag, tid) => (
                <span key={tid}>{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

const projects = [
  {
    name: "Gerda Butter",
    img: "/images/gerda.png",
    link: "/projects/324",
    github: "https://www.zaursharifov.com",
    live: "/",
    text: "A website for Gerda Butter Company in collaboration with Ef Group. The website included sections for a blog about recipes, an about page, and a contact page. This was my first freelance job.",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
  {
    name: "Turaz dictianory by Bitsody",
    img: "/images/turaz.png",
    link: "/projects/46537",
    github: "/",
    live: "/",
    text: "A mobile application for translating between Turkish and Azerbaijani. The app includes over 90,000 words and can be used without an internet connection.",
    tags: ["React Native"],
  },
];
