import React, {useState}from 'react'
import { SiDgraph } from "react-icons/si";
import styles from "./Header.module.css";
const Header = () => {
  const [isOpen, setIsOpen]=useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.container}>
        <logo className={styles.logo}><SiDgraph 
        style={{width:"35px", height:"35px", color:"#B366FC"}}/> Spends</logo>
       {/* <nav className={styles.nav}>
        <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Account</li>
        </ul>
       </nav>
       <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </div> */}
    </div>
  )
}

export default Header;