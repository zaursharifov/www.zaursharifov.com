"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className={styles.main} initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>hey, I`m zaur 👋</h1>
      <div className={styles.about}>
        <div className={styles.imgcontainer}>
          <Image src="profile.jpg" alt="zaur sharifov" width={200} height={250} className={styles.img} placeholder="blur" blurDataURL={"/profile.jpg"} />
        </div>
        <div className={styles.right}>
          <p>A passionate frontend developer who loves creating beautiful and user-friendly interfaces. I pay close attention to detail and strive for excellence in every design I create. I am always learning and keeping up with the latest web development practices to stay ahead of the curve.</p>
          <p>
            P.S. this website is open-source and available on{" "}
            <Link href="https://github.com/zeraphosa/www.zaursharifov.com" target="_blank">
              Github
            </Link>
            .
          </p>
          <div className={styles.links}>
            <Link href="/cv-zaursharifov.pdf" target="_blank">
              resume {link}
            </Link>
            <Link href="https://www.linkedin.com/in/zaursharifov-404/" target="_blank">
              contact with linkedin {link}
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

const link = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
  </svg>
);
