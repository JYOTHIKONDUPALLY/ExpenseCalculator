import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/card';
import ListingTable from '../../Components/ListingTable/ListingTable';
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className={styles.CardContainer}>
        <Card  name={"Wallet Balance"} amount={45678} button={"Add Balance"}/>
        <Card name={"Expenses"} amount={45678} button={"Add Expenses"}/>
        </div>
        <div className={styles.table}>
          <h3>Recent Transcations</h3>
        <ListingTable/>
        </div>
     
        <Footer/>
    </div>
  )
}

export default HomePage