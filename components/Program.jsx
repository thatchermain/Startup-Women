import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Program.module.scss";

const Program = () => {
  return (
    <section className={styles.program}>
      <div className="container">
        <h2 className={`${styles.title} display-6 text-center py-5`}>
          Program
        </h2>
        <Row>
          <Col className={`${styles.column} col-12 col-md-6 mb-5`}>
            <div className={styles.wrapper}>
              <h2 className={`${styles.title} display-6 text-center py-3 mb-3`}>
                May 25th
              </h2>
              <hr></hr>
              <div className={` ${styles.content} px-5`}>
                <p>
                  9.00 - 10.00 Registration of guests. Coffee break. Greeting
                  guests. Artist Performance
                </p>
                <p>10.00 - 10.10 Greeting guests. Performance of the artist.</p>
                <p>
                  10.20 - 10.30 Welcoming address of the conference organizer
                </p>
                <p>
                  10.30 - 11.00 Keynote (Speaker 1) Go beyond - be successful
                </p>
                <p>
                  11.00 - 11.30 Speaker 2 - Skills, competencies and goals of
                  the entrepreneur. Methods for setting goals for quick results
                  and business success.
                </p>
                <p>11.30 - 11.45 Tea or coffee break. Autograph session.</p>
                <p>
                  11.45 - 12.35 Panel discussion (4 speakers) The path to a
                  dream. How to build a business model that will be profitable.
                  Analysis of successful cases of speaker companies.
                </p>
                <p>
                  12.40 - 13.10 Speaker 3 Business and sales growth through the
                  marketing system: strategy, implementation, packaging
                </p>
                <p>
                  13.10 - 13.40 Speaker 4 Where to move forward - a review of
                  soc. networks. Pros and cons for a particular business
                </p>
                <p>
                  13.40 - 14.10 Publik talk Speaker 5 Personal brand management.
                  Personal brand as a way to raise capitalization.
                </p>
                <p>14.10 - 15.10 Lunch. Photoshoot</p>
              </div>
            </div>
          </Col>

          <Col className={`${styles.column} col-12 col-md-6 mb-5`}>
            <div className={styles.wrapper}>
              <h2 className={`${styles.title} display-6 text-center py-2`}>
                May 26th
              </h2>
              <hr></hr>
              <div className={` ${styles.content} px-5`}>
                <p>
                  9.00 - 10.00 Registration of guests. Coffee break. Greeting
                  guests. Artist Performance
                </p>
                <p>10.00 - 10.10 Greeting guests. Performance of the artist.</p>
                <p>
                  10.20 - 10.30 Welcoming address of the conference organizer
                </p>
                <p>
                  10.30 - 11.00 Keynote (Speaker 1) Go beyond - be successful
                </p>
                <p>
                  11.00 - 11.30 Speaker 2 - Skills, competencies and goals of
                  the entrepreneur. Methods for setting goals for quick results
                  and business success.
                </p>
                <p>11.30 - 11.45 Tea or coffee break. Autograph session.</p>
                <p>
                  11.45 - 12.35 Panel discussion (4 speakers) The path to a
                  dream. How to build a business model that will be profitable.
                  Analysis of successful cases of speaker companies.
                </p>
                <p>
                  12.40 - 13.10 Speaker 3 Business and sales growth through the
                  marketing system: strategy, implementation, packaging
                </p>
                <p>
                  13.10 - 13.40 Speaker 4 Where to move forward - a review of
                  soc. networks. Pros and cons for a particular business
                </p>
                <p>
                  13.40 - 14.10 Publik talk Speaker 5 Personal brand management.
                  Personal brand as a way to raise capitalization.
                </p>
                <p>14.10 - 15.10 Lunch. Photoshoot</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Program;
