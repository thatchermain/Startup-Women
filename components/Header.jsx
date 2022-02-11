import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Header.module.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <Navbar />
        <div
          className={`${styles.wrapper} container d-flex flex-column justify-content-center align-items-start`}
        >
          <Row className={styles.intro}>
            <Col className="d-flex flex-column justify-content-around align-items-start">
              <div className={styles.date}>
                <h2 className={`${styles.h2} h2`}>May 25-26-2022,</h2>
                <h2 className={`${styles.h2} h2`}>Arbat Hall</h2>
              </div>
              <h4 className={`${styles.h4} display-4`}>Women's Conference</h4>
              <h1 className={`${styles.gradient} display-1`}>STARTUP WOMEN</h1>
              <h3 className={`${styles.h3} ms-auto display-4`}>
                from idea to empire
              </h3>
              <button className={`${styles.button} ms-auto`}>SIGN UP</button>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};

export default Header;
