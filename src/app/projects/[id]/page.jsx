"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

export default function ProjectDetail() {
  const url = window.location.href.split("/").at(-1);
  const [projects] = useFetch(
    `{
      projects {
        github
        live
        name
        url
        detail {
          html
          markdown
          raw
          text
        }
        photo {
          url
        }
      }
  }`,
    "projects",
  );

  return (
    <>
      {projects.map(
        (item) =>
          item.url === url && (
            <main key={item.id} className={styles.detail}>
              <div className={styles.header}>
                <h2>{item.name}</h2>
                <div className={styles.links}>
                  {item.live && <Link href={item.live}>www.{item.url}.com</Link>}
                  {item.github && <Link href={item.github}>github.com/{item.url}</Link>}
                </div>
              </div>
              <div className={styles.content}>
                {/* <div className={styles.imgcontainer}>
                  <Image src={item.photo.url} alt="detail img" width={770} height={400} className={styles.img} />
                </div> */}
                <div>{parse(item.detail.html)}</div>
              </div>
            </main>
          ),
      )}
    </>
  );
}