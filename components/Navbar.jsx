import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../public/logo.webp";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} d-none d-lg-block`}>
      <Row
        className={`${styles.wrapper} container d-flex justify-content-between align-items-center mx-auto px-3`}
      >
        <Col className="text-start col-1 me-0 p-0">
          <Image src={Logo} alt={Logo} width={90} height={90} />
        </Col>
        <Col className={`${styles.links} col-7`}>
          <ul
            className={`${styles.list} d-flex justify-content-around align-items-center m-0 `}
          >
            <Link href={"#about"}>
              <a>about conference</a>
            </Link>
            <Link href={"#speakers"}>
              <a>speakers</a>
            </Link>
            <Link href={"#program"}>
              <a>program</a>
            </Link>
            <Link href={"#tickets"}>
              <a>tickets</a>
            </Link>
          </ul>
        </Col>
        <Col className={`${styles.phone} h3 col-4 text-center me-0 p-0`}>
          +7(495) 194-44-32
        </Col>
      </Row>
    </nav>
  );
};

export default Navbar;
