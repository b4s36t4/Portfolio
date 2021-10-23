import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai/index";
import { MdMail } from "react-icons/md/index";
import { IoCall } from "react-icons/io5/index";

const SocialContact = ({ name, icon }) => {
  return (
    <div className={styles.social}>
      <p>{name}</p>
      <span>{icon}</span>
    </div>
  );
};

const SendMessage = () => {
  const checkFocus = (e) => {
    const parent = e.target.parentNode;
    parent.setAttribute("focused", "yes");
  };
  const removeFocus = (e) => {
    const parent = e.target.parentNode;
    parent.removeAttribute("focused");
  };
  return (
    <div className={styles.sendMessage}>
      <div className={styles.input}>
        <input
          onFocus={checkFocus}
          onBlur={removeFocus}
          placeholder="Enter Name"
          type="text"
        />
      </div>
      <div className={styles.input}>
        <input
          placeholder="Enter Mail"
          onFocus={checkFocus}
          onBlur={removeFocus}
          type="email"
        />
      </div>
      <div className={styles.input}>
        <input
          placeholder="Enter Message"
          onFocus={checkFocus}
          onBlur={removeFocus}
          type="text"
        />
      </div>
      <button className={styles.submit}>Send</button>
    </div>
  );
};

function Contact() {
  return (
    <div className={'min-h-screen'}>
      <Header />
      <div className={styles.contact}>
        <h1>You can contact me via:</h1>
        <div className={styles.socialContainer}>
          <SocialContact name="Github" icon={<AiFillGithub />} />
          <SocialContact name="LinkedIn" icon={<AiFillLinkedin />} />
          <SocialContact name="Mail" icon={<MdMail />} />
          <SocialContact name="Call" icon={<IoCall />} />
        </div>
        <div className={""}>
          <SendMessage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
