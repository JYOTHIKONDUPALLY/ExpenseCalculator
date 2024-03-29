import React, { useState } from 'react';
import { SiDgraph } from 'react-icons/si';
import styles from './Header.module.css';
import { IoMenuOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu=()=>{
    setIsOpen(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <SiDgraph style={{ width: '35px', height: '35px', color: '#B366FC' }} /> Spends
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>Account</li>
        </ul>
      </nav>
      <div className={styles.toggleButton} onClick={toggleMenu}>
        <IoMenuOutline style={{ color: '#B366FC', width: '35px', height: '35px' }} />
      </div>
      {isOpen && (
        <>
        <div className={styles.overlay} onClick={closeMenu}></div>
             <div className={styles.sidebar}>
          <div className={styles.navList}>Home</div>
          <div>Category</div>
          <div>Account</div>
        </div>
        </>
   
      )}
    </div>
  );
};

export default Header;
