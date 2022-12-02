import React from "react";
import styles from './styles.module.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si'

function Navbar() {
  return (
    <nav className={styles.content}>
      <ul>
        <li><SiJavascript className={styles.jsIcon}/><span><h1>Harsh Shukla</h1></span></li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
        <li className={styles.navIcons}><AiFillLinkedin/></li>
        <li className={styles.navIcons}><AiFillGithub/></li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;
