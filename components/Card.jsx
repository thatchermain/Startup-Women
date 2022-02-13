import React from "react";
import styles from "../styles/Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={`${styles.wrapper} d-flex flex-column justify-content-between align-items-center py-5`}
    >
      <div className={`${styles.info} text-center`}>
        <h6 className={`${styles.variant} pb-4`}>{props.variant}</h6>
        <h5 className={`${styles.oldPrice} h3`}>{props.oldPrice}</h5>
        <h5 className={`${styles.newPrice} h3 pb-4`}>{props.newPrice}</h5>
        <p className={`${styles.description} px-4`}>{props.description}</p>
      </div>
      <button className={styles.button}>Buy it now</button>
    </div>
  );
};

export default Card;
