"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";

export default function Projects() {
  const [projects] = useFetch(
    `{
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
        tags {
          id
          name
        }
        photo {
          url
        }
      }
  }`,
    "projects",
  );
  
  return (
    <main className={styles.projects}>
      {projects.map((item) => (
        <Link key={item.id} href={`/projects/${item.url}`} className={styles.item}>
          <div className={styles.imgcontainer}>
            <Image src={item.photo.url} alt={item.name} className={styles.img} loading="lazy" width={350} height={250} unoptimized />
          </div>
          <div className={styles.about}>
            <h3>{item.name}</h3>
            <p className={styles.text}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((i) => (
                <span key={i.id}>{i.name}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
