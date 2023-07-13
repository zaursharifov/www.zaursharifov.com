"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import parse from 'html-react-parser';

export default function ProjectDetail() {
  const url = window.location.href.split("/").at(-1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GRAPHQL_CMS_API}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          projects {
            github
            live
            url
            name
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
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.projects));
  }, []);

  return (
    <>
      {data.map(
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

// <main className={styles.detail}>
//   <div className={styles.header}>
//     <h2>Gerda Butter</h2>
//     <div className={styles.links}>
//       <Link href="/">www.gerdabutter.com</Link>
//       <Link href="/">github</Link>
//     </div>
//   </div>
//   <div className={styles.content}>
//     <div className={styles.imgcontainer}>
//       <Image src="/images/gerdap.png" alt="gerda" width={770} height={400} className={styles.img} />
//     </div>
//     <div>
//       <h3 className={styles.h3}>Technologies</h3>
//       <ul className={styles.ul}>
//         <li>Html</li>
//         <li>Css</li>
//         <li>Bootstrap</li>
//         <li>Javascript</li>
//       </ul>
//     </div>
//     <div>
//       <h3 className={styles.h3}>Notes</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam quia iusto unde vero, suscipit expedita qui obcaecati ducimus labore earum, aspernatur deleniti quod! Vitae nemo explicabo qui suscipit architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto mollitia corrupti odio
//         nihil molestiae tempore at, alias, cum, tenetur dignissimos dolore! Adipisci voluptatibus exercitationem accusantium suscipit numquam cupiditate inventore.
//       </p>
//     </div>
//     <div>
//       <h3 className={styles.h3}>Colors</h3>
//       <p>#434 #213</p>
//     </div>
//   </div>
// </main>
