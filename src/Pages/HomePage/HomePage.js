import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import styles from "./HomePage.module.css";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";
import AddIncomeform from "../../components/AddIncomeForm/AddIncomeform";
import ListingTable from "../../components/ListingTable/ListingTable";
import CategoryPieChart from "../../components/PieChart/PieChart";
import CategoryBarChart  from "../../components/Barchart/Barchart";
import ExpensesData from "../../data/ExpensesData.json";
import { useSnackbar } from "notistack";
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
  const initialWalletBalance = localStorage.getItem("walletBalance")
  ? JSON.parse(localStorage.getItem("walletBalance"))
  : 5000;
const initialExpenseData = localStorage.getItem("expenseData")
  ? JSON.parse(localStorage.getItem("expenseData"))
  : ExpensesData;
  const initialExpenses=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):0;
  const [walletBalance, setWalletBalance] = useState(initialWalletBalance);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [expenseFormIsopen, setExpenseFormIsopen] = useState(false);
  const [incomeFormIsopen, setIncomeFormIsopen] = useState(false);
  const {enqueueSnackbar}=useSnackbar();
 
// const currentExpense=currentMonthExpense();
  const handleExpenseForm = () => {
    setExpenseFormIsopen(true);
  };

  useEffect(() => {;
localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    // Update localStorage when walletBalance changes
    localStorage.setItem("walletBalance", JSON.stringify(walletBalance));
  }, [walletBalance]);

  useEffect(() => {
    // Update localStorage when expenseData changes
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);
  
  // const currentMonthExpense = () => {
  //   const currentDate = new Date();
  //   const currentMonth = currentDate.getMonth() + 1;
  //   const currentYear = currentDate.getFullYear();
  //   const filteredExpenses = expenseData.filter((expense) => {
  //     const expenseDate = new Date(expense.date);
  //     const expenseMonth = expenseDate.getMonth() + 1;
  //     const expenseYear = expenseDate.getFullYear();
  //     return expenseMonth === currentMonth && expenseYear === currentYear;
  //   });
  //   const totalExpense = filteredExpenses.reduce(
  //     (total, expense) => total + Number(expense.amount),
  //     0
  //   );
  //   return totalExpense;
  // };
  
  const handleAddExpenses = (newExpensesData) => {
    if (newExpensesData.amount < 0) {
      enqueueSnackbar("Amount cannot be less than 0", { variant: "warning" });
      setExpenseFormIsopen(false);
      return;
    }
    
    if (Number(newExpensesData.amount) > walletBalance) {
      enqueueSnackbar("Insufficient balance", { variant: "warning" });
      setExpenseFormIsopen(false);
      return;
    }
  
    const newExpenseAmount = Number(newExpensesData.amount);
    const updatedWalletBalance = walletBalance - newExpenseAmount;
  
    setWalletBalance(updatedWalletBalance);
    setExpenses(expenses + newExpenseAmount);
    setExpenseData([...expenseData, newExpensesData]);
    setExpenseFormIsopen(false);
  };
  
  const handleIncomeForm = () => {
    setIncomeFormIsopen(!incomeFormIsopen);
  };

  const handleWalletBalance = (incomeAmount) => {
    if(incomeAmount<0){
      enqueueSnackbar("amount cannot be lessthan 0", {variant:"warning"});
      setIncomeFormIsopen(false);
      return;
    }
    setWalletBalance(walletBalance + Number(incomeAmount));
    setIncomeFormIsopen(false);
  };

  const handleCloseModal = () => {
    setExpenseFormIsopen(false);
    setIncomeFormIsopen(false);
  };

  const handleDelete = (expensedata) => {
    const newExpensesData = expenseData.filter(
      (expense) => expense !== expensedata
    );
    setExpenseData(newExpensesData);
  };

  const calculateCategoryExpenses = () => {
    const categoryExpenses = {};
    expenseData.forEach((expense) => {
      const { category, amount } = expense;
      if (categoryExpenses[category]) {
        categoryExpenses[category] += amount;
      } else {
        categoryExpenses[category] = amount;
      }
    });
    const categoryData = Object.keys(categoryExpenses).map((category) => ({
      category,
      value: categoryExpenses[category],
    }));

    return categoryData;
  };

  const CategoryData = calculateCategoryExpenses();

  return (
    <div className={styles.container}>
      <Header />
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
              <AddIncomeform
                handleWalletBalance={handleWalletBalance}
                handleCloseModal={handleCloseModal}
              />
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

          {expenseFormIsopen && (
            <div className={styles.overlay}>
              <AddExpenseForm
                className={styles.expenseForm}
                handleAddExpenses={handleAddExpenses}
                handleCloseModal={handleCloseModal}
              />
            </div>
          )}
        </div>
        <div className={styles.piechart}>
          <CategoryPieChart categoryData={CategoryData} />
        </div>
      </div>
      <div
        className={styles.exepenseSummary}
        style={{ display: "grid", gridTemplateColumns: "60% 40%" }}
      >
        <div className={styles.expenseList}>
          <h2> Recent Transactions</h2>
          <ListingTable
            expenseData={expenseData}
            handleAddExpenses={handleAddExpenses}
            handleDelete={handleDelete}
          />
        </div>
        <div className={styles.barchart}>
          <h2>Highest expenses:</h2>
          <CategoryBarChart expenseData={expenseData} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
