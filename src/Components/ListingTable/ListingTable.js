import styles from "./ListingTable.module.css";
import React , {useState} from "react";
import Expensesdata from "../../constants/ExpensesData.json";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const ListingTable=()=>{
const [currentPage,setCurrentPage]=useState(1);
const itemsPerPage=10;
const sortedTransactions = Expensesdata.sort((a, b) => new Date(b.date) - new Date(a.date));
const indexOfLastItem=currentPage*itemsPerPage;
const IndexOfFirstItem=indexOfLastItem-itemsPerPage;
const currentPageItems=sortedTransactions.slice(IndexOfFirstItem, indexOfLastItem);

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
const Paginate=(pageNumber)=> setCurrentPage(pageNumber);
const handleEdit=(e)=>{

}
const handleDelete=(e)=>{

}
return(
    <div className={styles.container}>
<table className={styles.table}>
    <thead >
    <tr>
<th>Expenses</th>
<th>Category</th>
<th>Amount</th>
    </tr>
    </thead>
<tbody>
    {currentPageItems.map((expenses)=>(
        <tr>
            <td>
                <div style={{fontSize:"20px", fontWeight:"600"}}>{expenses.title}</div><div>{formatDate(expenses.date)}</div>
            </td>
            <td>{expenses.category}</td>
            <td>{expenses.amount} <span className={styles.icon}><MdEdit onClick={()=>handleEdit()}/><MdDeleteOutline onClick={()=>handleDelete()}/></span></td>
        </tr>

    ))}
</tbody>
</table>
<div className={styles.Pagination}>
    <button
    onClick={()=>Paginate(currentPage-1)}
    disabled={currentPage===1}><FaArrowLeft/>
    </button>
    <span>{currentPage}</span>
    <button
    onClick={()=>Paginate(currentPage+1)}
    disabled={indexOfLastItem>=Expensesdata.length}><FaArrowRight/>
    </button>
    </div> 
    </div>
)
}

export default ListingTable;