import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Header.module.scss";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <SideNav />
      <div className="container">
        <div
          className={`${styles.wrapper}  d-flex flex-column justify-content-center align-items-start`}
        >
          <Row className={`${styles.intro} mt-5 pt-5`}>
            <Col className="d-flex flex-column justify-content-around  align-items-start">
              <div className={styles.date}>
                <h2 className={`${styles.h2} h2 text-start`}>
                  May 25-26-2022,
                </h2>
                <h2 className={`${styles.h2} h2`}>Arbat Hall</h2>
              </div>
              <h4 className={`${styles.h4} display-5`}>
                {`Women's Conference`}
              </h4>
              <h1 className={`${styles.gradient} display-1 m-0 `}>
                STARTUP WOMEN
              </h1>
              <h3 className={`${styles.h3} me-0 display-4`}>
                from idea to empire
              </h3>
              <button className={`${styles.button} mx-auto my-5 `}>
                <Link href={"#contact"}>
                  <a>SIGN UP</a>
                </Link>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};

export default Header;
