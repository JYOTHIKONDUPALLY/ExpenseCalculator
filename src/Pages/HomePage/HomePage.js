import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";
import AddIncomeform from "../../components/AddIncomeForm/AddIncomeform";
import ListingTable from "../../components/ListingTable/ListingTable";
const HomePage = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState(500);
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: 0,
    category: "",
    date: "",
  });
  const [expenseFormIsopen, setExpenseFormIsopen] = useState(false);
  const [incomeFormIsopen, setIncomeFormIsopen] = useState(false);

  const handleExpenseForm = () => {
    setExpenseFormIsopen(true);
  };

  const handleAddExpenses = (newExpensesData) => {
    setExpenses(expenses + Number(newExpensesData.price))
    setExpenseData({ ...expenseData, newExpensesData });
    setExpenseFormIsopen(false);
  };

  const handleIncomeForm = () => {
    setIncomeFormIsopen(!incomeFormIsopen);
  };

  const handleWalletBalance=(incomeAmount)=>{
setWalletBalance(walletBalance+Number(incomeAmount));
setIncomeFormIsopen(false);
  }

  const handleCloseModal=()=>
  {setExpenseFormIsopen(false);
    setIncomeFormIsopen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.walletBalance}>
          <h2>
            Wallet Balance:<span>₹{walletBalance}</span>
          </h2>
          <button className={styles.button} onClick={handleIncomeForm}>
            + Add Income
          </button>
          {incomeFormIsopen && (
            <div className={styles.overlay}>
            <AddIncomeform handleWalletBalance={handleWalletBalance} handleCloseModal={handleCloseModal} />
            </div>
          )}
        </div>
        <div className={styles.expense}>
          <h2>
            Expenses:<span>₹{expenses}</span>
          </h2>
          <button onClick={handleExpenseForm} className={styles.button}>
            + Add Expense
          </button>

          {expenseFormIsopen &&(
            <div className={styles.overlay}>
              <AddExpenseForm
                className={styles.expenseForm}
                handleAddExpenses={handleAddExpenses}handleCloseModal={handleCloseModal}
              />
            </div>
          )}
        </div>
        <div className={styles.piechart}> pie chart</div>
      </div>
      <div>
        <h2> Recent Transcations</h2>
        <ListingTable/>
      </div>
      <div>chart</div>
    </div>
  );
};

export default HomePage;
