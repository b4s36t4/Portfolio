import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import React, { useEffect } from "react";
import HashNode from "./hashnode";
import styles from "../../styles/Footer.module.css";

// console.log(styles);

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Mahesh Vagicherla</p>
      <a href="mailto:maheshvagicherla99438@gmail.com">
        maheshvagicherla99438@gmail.com
      </a>
      <div className={styles.footerSocial}>
        <a target="_blank" href="https://github.com/b4s36t4" rel="noreferrer">
          <AiFillGithub size={40} data-tip="b4s36t4" />
        </a>
        <a
          href="https://www.linkedin.com/in/maheshvagicherla/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={40} data-tip="Mahesh Vagicherla" />
        </a>
        <a
          href="https://hashnode.com/@b4s36t4"
          target="_blank"
          rel="noreferrer"
        >
          <HashNode width="40" height="40" data-tip="b4s36t4" />
        </a>
        <a href="https://twitter.com/b4s36t4" target="_blank" rel="noreferrer">
          <AiFillTwitterCircle size={40} data-tip="b4s36t4" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
