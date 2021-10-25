import React from "react";
import Header from "../components/Header";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import { cloudflareLoader } from "../utils/loader";

const ProjectTag = ({ text }) => {
  return <div className={styles.projectTag}>{text}</div>;
};

const Project = ({ left = true }) => {
  return (
    <div className={left ? styles.project : styles.projectRight}>
      <a href="https://github.com/b4s36t4">
        <div className={styles.projectThum}>
          <Image
            className={`${styles.projectThum} z-40`}
            src="/Project1.png"
            alt="Project Image"
            layout="fill"
            loader={cloudflareLoader}
          />
        </div>
      </a>
      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>Project Title</h1>
        <p className={`${styles.projectDescription} line-clamp-3`}>
          Some project description here goes like it always.
        </p>
        <div className={styles.tags}>
          <ProjectTag text="React" />
          <ProjectTag text="React" />
          <ProjectTag text="React" />
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <>
      <Header />
      <div className={styles.projectsContainer}>
        <Project />
        <Project left={false} />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
