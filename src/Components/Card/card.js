import React from 'react'
import styles from "./card.module.css";
const card = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.font1}>Expenses</h2>
        <p className={styles.font2}>6789</p>
        <button className={styles.button}>+ Add Expenses</button>
    </div>
  )
}

export default card