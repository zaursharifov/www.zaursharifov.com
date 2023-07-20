"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
  );
  return (
    <motion.main className={styles.projects} variants={container} initial="hidden" animate="visible">
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
          <Link href={project.url ? `/projects/${project.url}` : project.live} target={!project.url && "_blank"} className={styles.item}>
            <div className={styles.imgcontainer}>
              <Image src={project.photo.url} alt={project.name} className={styles.img} priority width={350} height={250} unoptimized />
            </div>
            <div className={styles.about}>
              <h3>{project.name}</h3>
              <p className={styles.text}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.main>
  );
}
