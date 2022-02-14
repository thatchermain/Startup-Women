import { Col, Row } from "react-bootstrap";
import styles from "../styles/Contact.module.scss";
import Partner1 from "../public/contact/partner1.png";
import Partner2 from "../public/contact/partner2.png";
import Partner3 from "../public/contact/partner3.png";
import Partner4 from "../public/contact/partner4.png";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className={`${styles.contact} pt-5`}>
        <div className="container">
          <h2 className={`${styles.title} display-6 text-center p-5`}>
            Promote your business in the exhibition area
          </h2>
          <Row>
            <Col className="col-12 col-md-4 text-center mb-5">
              <div>
                <h2 className="h2">1200+</h2>
                <h5 className="h5">Business contacts</h5>
              </div>
            </Col>
            <Col className="col-12 col-md-4 text-center mb-5">
              <div>
                <h2 className="h2">20 000+</h2>
                <h5 className="h5">Total audience reach</h5>
              </div>
            </Col>
            <Col className="col-12 col-md-4 text-center mb-5">
              <div>
                <h2 className="h2">20+</h2>
                <h5 className="h5">Partners</h5>
              </div>
            </Col>
          </Row>
        </div>
        <Row id="contact" className="gx-0 ">
          <div className="quote pb-5">
            <div className="container text-center py-5">
              <h2 className={`display-6 text-center py-5`}>
                Reserve a place in the exhibition area
              </h2>
              <form>
                <Row>
                  <Col className="col-12 col-md-6 col-xl-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className={`${styles.input} px-3 h5`}
                    />
                  </Col>
                  <Col className="col-12 col-md-6 col-xl-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className={`${styles.input} px-3 h5`}
                    />
                  </Col>
                  <Col className="col-12 col-md-6 col-xl-3">
                    <input
                      type="text"
                      placeholder="Phone"
                      className={`${styles.input} px-3 h5`}
                    />
                  </Col>
                  <Col className="col-12 col-md-6 col-lg-3 mx-auto ">
                    <button className={styles.formBtn}> BOOK NOW </button>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Row>
      </div>
      <div
        className={`${styles.partners} d-flex flex-column justify-content-center align-items-center`}
      >
        <h2 className={`display-6 text-center py-5`}>Our partners</h2>
        <Row>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-around align-items-center pb-5">
            <Image src={Partner1} alt="Partner logo" width={122} height={88} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-around align-items-center pb-5">
            <Image src={Partner2} alt="Partner logo" width={246} height={30} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-around align-items-center pb-5">
            <Image src={Partner3} alt="Partner logo" width={122} height={88} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-around align-items-center pb-5">
            <Image src={Partner4} alt="Partner logo" width={122} height={88} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
