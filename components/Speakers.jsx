import React from "react";
import styles from "../styles/Speakers.module.scss";
import speakers from "../data/speakers";
import { Col, Row } from "react-bootstrap";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const Speakers = () => {
  return (
    <section id="speakers" className={`${styles.speakers} pt-5`}>
      <div className="container my-5 pt-5">
        <h2 className="display-6 text-center">The time of fateful meetings</h2>
      </div>
      <Row className="container mx-auto my-0">
        {speakers.map((speaker) => {
          return (
            <>
              <Col className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className={`${styles.card} mx-auto`}>
                  <div className={styles.wrapper}>
                    <div className={`${styles.image} mx-auto`}>
                      <Image
                        className={styles.photo}
                        src={speaker.source}
                        alt={speaker.first_name}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div
                      className={`${styles.overlay} d-flex flex-column justify-content-center align-items-center mx-auto`}
                    >
                      <span className="h2">
                        {speaker.first_name} {speaker.last_name}
                      </span>
                      {/* <hr /> */}
                      <span className="h5">{speaker.job}</span>
                      <hr />
                      <div
                        className={`${styles.icons} d-flex justify-content-around align-items-center`}
                      >
                        <Link href="/">
                          <a className={styles.icon}>
                            <SiFacebook />
                          </a>
                        </Link>
                        <Link href="/">
                          <a className={styles.icon}>
                            <SiLinkedin />
                          </a>
                        </Link>
                        <Link href="/">
                          <a className={styles.icon}>
                            <SiTwitter />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </section>
  );
};

export default Speakers;
