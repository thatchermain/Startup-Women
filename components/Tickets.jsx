import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import Image from "next/image";
import Appointment from "../public/program/appointment.png";
import Contract from "../public/program/contract.png";
import Diamond from "../public/program/diamond.png";
import Negotiation from "../public/program/negotiation.png";
import Profit from "../public/program/profit.png";
import Woman from "../public/program/woman.png";
const Tickets = () => {
  return (
    <section id="tickets" className="mt-5 pt-5">
      <div className="container mt-5 pt-5">
        <h2 className="display-6 text-center mb-5 ">
          How much is the journey to a dream?
        </h2>
        <Row>
          <Col className="d-flex justify-content-center mb-5">
            <Card
              variant="standard"
              oldPrice="$300"
              newPrice="$150"
              description="*Participation on the first day of the conference - May 25th
              *Welcome coffee
              *Conference Participant Package"
            />
          </Col>
          <Col className="d-flex justify-content-center mb-5">
            <Card
              variant="premium"
              oldPrice="$700"
              newPrice="$400"
              description="STANDARD PACKAGE plus: 
              *Accreditation to the PREMIUM zone (4-5 row, next to the speakers)
              *Participation in the VIP day - May 16th
              *Conference video"
            />
          </Col>
          <Col className="d-flex justify-content-center mb-5">
            <Card
              variant="vip"
              oldPrice="$1400"
              newPrice="$750"
              description="PREMIUM PACKAGE plus:
              *Accreditation to the VIP zone (1-3 rows, next to the speakers)
              Separate registration area
              Welcome VIP coffee break
              Reception
              Dinner
              Photoshoots with speakers
              Gift package from partners"
            />
          </Col>
        </Row>
        <h2 className="display-6 text-center my-5 ">
          What can be done in a month?
        </h2>
        <Row>
          <Col className="col-12 col-md-4 pb-5 px-5">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image
                src={Negotiation}
                alt="Negotiation"
                width={64}
                height={64}
              />
              <h4 className="h4 py-3">Organize 50 meetings</h4>
            </div>
          </Col>
          <Col className="col-12 col-md-4 pb-5 px-5">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image src={Contract} alt="Contract" width="64" height="64" />
              <h4 className="h4 py-3">Sign 10 contracts</h4>
            </div>
          </Col>
          <Col className="col-12 col-md-4 pb-5 px-5">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image src={Profit} alt="Profit" width="64" height="64" />
              <h4 className="h4 py-3">Find an investor for your project</h4>
            </div>
          </Col>
          <Col className="col-12 col-md-4 pb-5 px-5">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image src={Woman} alt="Woman" width="64" height="64" />
              <h4 className="h4 py-3">Find an investor for your project</h4>
            </div>
          </Col>
          <Col className="col-12 col-md-4 pb-5 px-5">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image
                src={Appointment}
                alt="Appointment"
                width={64}
                height={64}
              />
              <h4 className="h4 py-3">Run semi-annual sales program</h4>
            </div>
          </Col>
          <Col className="col-12 col-md-4 pb-5 px-5 ">
            <div className="px-5 d-flex flex-column  justify-content-center align-items-center text-center">
              <Image src={Diamond} alt="Diamond" width="64" height="64" />
              <h4 className="h4 py-3">Get a ring on the finger</h4>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Tickets;
