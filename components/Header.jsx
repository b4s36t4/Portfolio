import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div>
      <div className={styles.menuButton}>
        {mobile ? (
          <span>
            <svg
              layout={true}
              onClick={() => setMobile(!mobile)}
              width="35"
              height="35"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                layout={true}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.00848 46.4248C4.47071 48.0108 4.50985 50.5432 6.09591 52.0809C7.68196 53.6187 10.2143 53.5796 11.7521 51.9935L30.1477 33.0203L47.1434 49.2939C48.739 50.8218 51.2711 50.7668 52.7989 49.1712C54.3267 47.5756 54.2718 45.0435 52.6762 43.5157L35.7166 27.2766L52.8216 9.63444C54.3594 8.04839 54.3203 5.51603 52.7342 3.97826C51.1482 2.44049 48.6158 2.47963 47.078 4.06569L29.9382 21.7437L10.0615 2.71138C8.4659 1.18355 5.93383 1.2385 4.406 2.83412C2.87816 4.42974 2.93311 6.9618 4.52873 8.48964L24.3694 27.4874L6.00848 46.4248Z"
                fill="black"
              />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              layout={true}
              onClick={() => setMobile(!mobile)}
              width="35"
              height="35"
              viewBox="0 0 67 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                layout={true}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4C0 1.79083 1.79086 0 4 0H63C65.2092 0 67 1.79083 67 4C67 6.20917 65.2092 8 63 8H4C1.79086 8 0 6.20917 0 4ZM0 40C0 37.7908 1.79086 36 4 36H63C65.2092 36 67 37.7908 67 40C67 42.2092 65.2092 44 63 44H4C1.79086 44 0 42.2092 0 40ZM4 18C1.79086 18 0 19.7908 0 22C0 24.2092 1.79086 26 4 26H63C65.2092 26 67 24.2092 67 22C67 19.7908 65.2092 18 63 18H4Z"
                fill="black"
              />
            </svg>
          </span>
        )}
      </div>
      <div
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: "0.3s", type: "spring", bounce: 0.3 }}
        className={mobile ? styles.headerMobile : styles.header}
      >
        <Link href="/" passHref>
          <span
            animate={{ opacity: [0.1, 0.3, 0.5, 0.7, 0.9, 1] }}
            transition={{ duration: 0.5 }}
          >
            <p>Home</p>
          </span>
        </Link>
        <Link href="/posts" passHref>
          <span>
            <p>Blog</p>
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span>
            <p>Projects</p>
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span>
            <p>Contact</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
