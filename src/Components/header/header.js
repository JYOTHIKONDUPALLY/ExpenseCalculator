import React from 'react';
import styles from "./header.module.css";
import { SiDgraph } from "react-icons/si";
const Header = () => {
  return (
    <div className={styles.header}><div className={styles.logo}>
    <SiDgraph style={{ width: "35px", height: "35px", color: "#B366FC" }} />
    <span>Spends</span>
  </div></div>
  )
}

export default Header