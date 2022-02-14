import Link from "next/link";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { BsMenuUp, BsBoxArrowLeft } from "react-icons/bs";
import styles from "../styles/SideNav.module.scss";

const SideNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="d-lg-none">
      <Row className={`${styles.navbar} m-0`}>
        <div
          className={`${styles.menuBar} d-flex justify-content-between align-items-center`}
        >
          <div>
            <BsMenuUp
              className={`${styles.openIcon} p-2 mt-2 ms-2`}
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
        </div>
      </Row>
      <aside
        className={`d-block d-lg-none ${styles.navbar} ${
          !visible ? styles.hidden : ""
        }`}
      >
        <div className={styles.sidenav}>
          <div>
            <BsBoxArrowLeft
              className={`${styles.closeIcon} p-2 mt-2 ms-2`}
              onClick={() => {
                setVisible(false);
              }}
            />
          </div>
          <ul className="list-group text-center">
            <Link href={"/"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                {" "}
                Home
              </a>
            </Link>
            <Link href={"#about"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                About Conference
              </a>
            </Link>
            <Link href={"#program"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Program
              </a>
            </Link>
            <Link href={"#tickets"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Tickets
              </a>
            </Link>
            <Link href={"#contact"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Contact
              </a>
            </Link>
          </ul>
          <hr />
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
