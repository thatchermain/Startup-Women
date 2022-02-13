import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="mx-auto">
          <Row className="px-5">
            <Col className="col-12 col-lg-4 text-center my-3">
              <div className={`${styles.info} py-3`}>
                <h5 className="h5">For participation issues</h5>
                <h5 className="h5">+7 (495) 196-44-32</h5>
                <h5 className="h5">Inna</h5>
                <h5 className="h5">info@gwf.com</h5>
              </div>
            </Col>

            <Col className="col-12 col-lg-4 text-center my-3">
              <div className={`${styles.info} py-3`}>
                <h5 className="h5">For participation issues</h5>
                <h5 className="h5">+7 (977) 860-17-91</h5>
                <h5 className="h5">Olgaa</h5>
                <h5 className="h5">partner@gwf.com</h5>
              </div>
            </Col>
            <Col className="col-12 col-lg-4 text-center my-3">
              <div className={`${styles.info} py-3`}>
                <h5 className="h5">Press Accreditation</h5>
                <h5 className="h5">+7 (977) 150-16-04</h5>
                <h5 className="h5">Alisa</h5>
                <h5 className="h5">press@gwf.com</h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
