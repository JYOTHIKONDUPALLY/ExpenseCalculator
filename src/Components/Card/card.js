import React, { useEffect, useState } from 'react';
import styles from "./card.module.css";
import { BalanceModal, ExpenseModal } from '../Modal/modal';

const Card = ({ name, amount, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  const getModalComponent = () => {
    switch (button) {
      case "Add Balance":
        return <BalanceModal button={button} handleClose={handleCloseModal} />;
      case "Add Expense":
        return <ExpenseModal button={button} handleClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.font1}>
        {name}:<span className={styles.font2}>₹{amount}</span>
      </h2>
      <button className={styles.button} onClick={handleModal}>
        {button}
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          {getModalComponent()}
        </div>
      )}
    </div>
  );
};

export default Card;
