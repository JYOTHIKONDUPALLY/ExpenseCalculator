import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/card';
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className={styles.CardContainer}>
        <Card name={"Expenses"} amount={45678} button={"Add Expenses"}/>
        <Card  name={"Wallet Balance"} amount={45678} button={"Add Balance"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage