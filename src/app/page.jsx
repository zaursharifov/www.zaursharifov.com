import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <svg class="background" width="100%" height="100%">
        <filter id="pedroduarteisalegend">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
      </svg>
      Home
    </main>
  );
}
