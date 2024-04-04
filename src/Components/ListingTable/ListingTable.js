import styles from "./ListingTable.module.css";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { GiTravelDress } from "react-icons/gi";
import { BiArch } from "react-icons/bi";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import { useSnackbar } from "notistack";

const ListingTable = ({ handleAddExpenses,handleDelete, expenseData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expenseform, setExpenseForm] = useState(false);
const  {enqueueSnackbar}=useSnackbar();
  const itemsPerPage = 5;
  const sortedTransactions = expenseData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = sortedTransactions.slice(
    IndexOfFirstItem,
    indexOfLastItem
  );

  const categoryIcons = {
    food: IoFastFoodSharp,
    travel: SiYourtraveldottv,
    clothing: GiTravelDress,
    misscelenous: BiArch,
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const Paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEdit = (e) => {
    setExpenseForm(true);
  };

  const handleclose=()=>{
    setExpenseForm(false);
  }

  const handleExpenseDelete=(expense)=>{
    handleDelete(expense);
    const title=expense.title;
    enqueueSnackbar(`${title} deleted`, { variant: "success" });
  }
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {currentPageItems.map((expenses) => (
            <tr>
              <td className={styles.icon}>
                {categoryIcons[expenses.category] &&
                  React.createElement(categoryIcons[expenses.category])}
              </td>

              <td>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  {expenses.title}
                </div>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  {formatDate(expenses.date)}
                </div>
              </td>
              <td className={styles.expenseAmount}>₹{expenses.amount}</td>
              <td>
                <MdEdit onClick={() => handleEdit()} />
                {expenseform && (
                  <div className={styles.overlay}>
                    <AddExpenseForm
                      handleAddExpenses={handleAddExpenses}
                      handleCloseModal={handleclose}
                    />
                  </div>
                )}
              </td>
              <td>
              <MdDeleteOutline onClick={() => handleExpenseDelete(expenses)} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.Pagination}>
        <button
          onClick={() => Paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => Paginate(currentPage + 1)}
          disabled={indexOfLastItem >= expenseData.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ListingTable;
