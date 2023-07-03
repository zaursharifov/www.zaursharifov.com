import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Link href="/" className={styles.item}>
        <Image src="/images/project.png" alt="project image" width={250} height={250} className={styles.img} />
        <div className={styles.about}>
          <div className={styles.header}>
            <h2>Gerda Butter</h2>
            <div className={styles.links}>
              <span>live</span>
              <span>github</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non amet nesciunt dolores nostrum, tempora explicabo! Odit, nam enim culpa adipisci necessitatibus corrupti hic et eum suscipit quam voluptatum cum doloremque!</p>
          <div className={styles.tags}>
            <pre>React            Next            Css</pre>
          </div>
        </div>
      </Link>
    </div>
  );
}
