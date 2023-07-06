import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
  return (
    <main className={styles.detail}>
      <div className={styles.header}>
        <h2>Gerda Butter</h2>
        <div className={styles.links}>
          <Link href="/">www.gerdabutter.com</Link>
          <Link href="/">github</Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image src="/images/gerdap.png" alt="gerda" width={770} height={400} className={styles.img} />
        </div>
        <div>
          <h3 className={styles.h3}>Technologies</h3>
          <ul className={styles.ul}>
            <li>Html</li>
            <li>Css</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.h3}>Notes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam quia iusto unde vero, suscipit expedita qui obcaecati ducimus labore earum, aspernatur deleniti quod! Vitae nemo explicabo qui suscipit architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto mollitia corrupti odio
            nihil molestiae tempore at, alias, cum, tenetur dignissimos dolore! Adipisci voluptatibus exercitationem accusantium suscipit numquam cupiditate inventore.
          </p>
        </div>
        <div>
          <h3 className={styles.h3}>Colors</h3>
          <p>#434 #213</p>
        </div>
      </div>
    </main>
  );
}
