import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hey, I`m zaur 👋</h1>
      <div className={styles.about}>
        <Image src="/images/1.jpg" alt="zaur sharifov" width={200} height={250} className={styles.img} />
        <div className={styles.right}>
          <p>A passionate frontend developer who loves creating beautiful and user-friendly interfaces. I pay close attention to detail and strive for excellence in every design I create. I am always learning and keeping up with the latest web development practices to stay ahead of the curve.</p>
          <p>P.S. this website is open-source and available on <Link href="/">Github</Link>.</p>
          <div className={styles.links}>
            <Link href="/">
              resume{" "}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
              </svg>
            </Link>
            <Link href="/">
              contact with linkedin{" "}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
