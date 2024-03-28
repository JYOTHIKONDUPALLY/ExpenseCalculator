import React from 'react'
import styles from "./card.module.css";
const card = ({name, amount, button}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.font1}>{name}:<span className={styles.font2}>₹{amount}</span></h2>
        <button className={styles.button}>{button}</button>
    </div>
  )
}

export default card