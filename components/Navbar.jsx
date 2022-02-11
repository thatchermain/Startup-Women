import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../public/logo.png";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="container">
      <Row
        className={`${styles.wrapper} d-flex justify-content-between align-items-center mx-auto`}
      >
        <Col className="text-start col-2 me-0 p-0">
          <Image src={Logo} alt={Logo} width={90} height={90} />
        </Col>
        <Col className={`${styles.links} col-7`}>
          <ul
            className={`${styles.list} d-flex justify-content-between align-items-center m-0 px-5`}
          >
            <Link href={"#about"}>
              <a>about conference</a>
            </Link>
            <Link href={"#program"}>
              <a>program</a>
            </Link>
            <Link href={"3speakers"}>
              <a>speakers</a>
            </Link>
            <Link href={"#tickets"}>
              <a>tickets</a>
            </Link>
          </ul>
        </Col>
        <Col className={`${styles.phone} col-3 text-end p-0`}>
          +7(495) 194-44-32
        </Col>
      </Row>
    </nav>
  );
};

export default Navbar;
