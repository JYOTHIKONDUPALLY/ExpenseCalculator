import React from 'react';
import styles from "./modal.module.css";

export const BalanceModal = ({ button,handleClose }) => {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
        <label>Add Balance</label>
      <input type="text" placeholder="Income Amount" />
      <div className={styles.buttonContainer}>
      <button style={{backgroundColor:"orange"}} onClick={handleClose}>{button}</button>
      <button  style={{backgroundColor:"#ccc"}}onClick={handleClose}>Cancel</button>
      </div>
        </div>
    </div>
  );
};


export const ExpenseModal=({button, handleClose})=>{
  return (
    <div className={styles.container}>
    <div className={styles.form}>
    <label>Add Balance</label>
  <input type="text" placeholder="Income Amount" />
  <div className={styles.buttonContainer}>
  <button style={{backgroundColor:"orange"}} onClick={handleClose}>{button}</button>
  <button  style={{backgroundColor:"#ccc"}}onClick={handleClose}>Cancel</button>
  </div>
    </div>
</div>
  )
}
// export const ExpenseModal=({button, handleClose})=>{
// return (
//     <div className={styles.container1}>
//     <div className={styles.form1}>
//     <label>Add Expense</label>
//   <input type="text" placeholder="Title" />
//   <input type="text" placeholder="Price" />
//   <select name="category">
//     <option value="pet supplies">"pet Supplies"</option>
//     <option>"electronics"</option>
//     <option>"sports equipment"</option>
//     <option>"food"</option>
//     <option>"home decor"</option>
//     <option>"clothing</option>
//     <option>"books"</option>
//     <option>"travel"</option>
//     <option>"toys"</option>
//     <option>"beauty products"</option>
//   </select>
//   <input type="date" />
//   <div className={styles.buttonContainer1}>
//   <button style={{backgroundColor:"orange"}}onClick={handleClose}>{button}</button>
//   <button  style={{backgroundColor:"#ccc"}}onClick={handleClose}>Cancel</button>
//   </div>
//     </div>
// </div>
// )
// }


