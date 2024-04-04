import React, { useState, useEffect } from "react";
import styles from "./AddExpenseForm.module.css";

const AddExpenseForm = ({ handleAddExpenses, handleCloseModal}) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange=(e)=>{
const {name, value}=e.target;
setExpenseData({...expenseData, [name]:value});
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  handleAddExpenses(expenseData);
  setExpenseData({
    title: "",
    amount: "",
    category: "",
    date: "",
  })
  handleCloseModal();
}
const handleCancel=()=>{
  setExpenseData({
    title: "",
    amount: "",
    category: "",
    date: "",
  });
  handleCloseModal();
}

  return (
    <div className={styles.container}>
      <h1>Add Expenses</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={expenseData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Price"
        name="amount"
        value={expenseData.amount}
        onChange={handleChange}
        required
      />
      <select name="category" value={expenseData.category} onChange={handleChange}     required>
        <option defaultValue={null}>select..</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="stationary">stationary</option>
        <option value="accomidation">Accomidation</option>
        <option value="clothing">Clothing</option>
        <option value="misscelenous">Misscelenous</option>
      </select>
      <input type="date" onChange={handleChange} value={expenseData.date} name="date"     required/>
      <button type="submit" className={styles.expenseButton}>Add Expense</button>
      <button type="button" onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
      </form>
      
    </div>
  );
};

export default AddExpenseForm;
