import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={`${styles.about}`}>
      <div
        className={`${styles.info} container d-flex justify-content-center align-items-center`}
      >
        <Row className={`${styles.wrapper} my-5 py-5 `}>
          <Col className="col-12 col-lg-6 mb-5 px-5">
            <div className={`${styles.info__left}`}>
              <p className="display-6 text-center py-3">
                <span
                  className={`${styles.span} ${styles.spanBold} display-6 `}
                >
                  Future
                </span>{" "}
                begins today
              </p>
              <p className="h4 text-secondary ">
                Are you an entrepreneur girl or just starting your own business
              </p>
              <p className="h4 text-secondary">
                Or maybe you dream about your own business, but you can’t
                decide?
              </p>
              <p className="h4 text-secondary">Then you to us!</p>
            </div>
          </Col>
          <Col className="col-12 col-lg-6 px-5">
            <div className={`${styles.info__right}`}>
              <p className="display-6">
                We meet on{" "}
                <span className={`${styles.span} ${styles.spanBold} display-6`}>
                  May 25 at the Startup Women
                </span>{" "}
                conference to talk about how to:
              </p>
              <p className="h4 text-secondary">
                {" "}
                <span className={styles.spanStar}>*</span> realize their ideas
                and build a business model that will bring profit
              </p>
              <p className="h4 text-secondary">
                {" "}
                <span className={styles.spanStar}>*</span> manage large-scale
                projects
              </p>
              <p className="h4 text-secondary">
                {" "}
                <span className={styles.spanStar}>*</span> use the most
                effective tools
              </p>
              <p className="h4 text-secondary">
                {" "}
                <span className={styles.spanStar}>*</span> change your habitual
                self
              </p>
              <p className="h4 text-secondary">
                {" "}
                <span className={styles.spanStar}>*</span> manage your business,
                maintain balance with your family and be happy
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
