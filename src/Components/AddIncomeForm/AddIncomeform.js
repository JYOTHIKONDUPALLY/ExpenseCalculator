import React, { useState, useEffect } from "react";
import styles from "./AddIncomeForm.module.css";

const AddIncomeform = ({handleWalletBalance, handleCloseModal}) => {
  const [incomeAmount, setIncomeAmount] = useState(0);

  const handleChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWalletBalance(incomeAmount);
    setIncomeAmount(0);
  };

  const handleCancel=()=>{
    handleCloseModal();
  }
  return (
    <div className={styles.container}>
      <h2>Add Balance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Income Amount"
          name="amount"
          value={incomeAmount}
          onChange={handleChange}
        />
        <button type="submit" className={styles.addBalanceButton}>
          + Add Balance
        </button>
        <button type="button" onClick={handleCancel}className={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddIncomeform;
