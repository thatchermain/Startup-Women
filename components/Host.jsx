import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";

import styles from "../styles/Host.module.scss";

const Host = (props) => {
  return (
    <div>
      <Row className="container mx-auto my-0 py-3 mt-5">
        <Col className="col-12 col-md-6 d-flex justify-content-center align-items-center mx-auto ">
          <div className="text-center">
            <Image src={props.src} alt="host" width="360" height="260" />
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="h1">{props.title}</h2>
            <p className="h6 py-3">{props.quote}</p>
            <h4 className="h4 ">{props.name}</h4>
          </div>

          <div className={`d-flex justify-content-around align-items-center`}>
            <Link href="/">
              <a className="px-2 ">
                <div className={styles.iconWrapper}>
                  <SiFacebook className={`${styles.icon} ${styles.icon__fb}`} />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="px-2 ">
                <div className={styles.iconWrapper}>
                  <SiLinkedin className={`${styles.icon} ${styles.icon__li}`} />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="px-2">
                <div className={styles.iconWrapper}>
                  <SiTwitter className={`${styles.icon} ${styles.icon__tw}`} />
                </div>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Host;
