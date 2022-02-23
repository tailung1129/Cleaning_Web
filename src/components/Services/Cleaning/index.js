import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import Category from "./Category";
import Order from "./Order";
import Address from "./Address";
import Detail from "./Detail";
import Pictures from "./Pictures";
import Preference from "./Preference";
import Contact from "./Contact";
import PhoneVerify from "./PhoneVerify";

import CustomProgressBar from "../CustomProgressBar";
import CurrentComponent from "../CurrentComponent";

import "./Cleaning.css";

const Cleaning = () => {
  const steps = [
    { component: <Category /> },
    { component: <Order /> },
    { component: <Address /> },
    { component: <Detail /> },
    { component: <Pictures /> },
    { component: <Preference /> },
    { component: <Contact /> },
    { component: <PhoneVerify />}
  ];
  const [currentstep, setCurrentstep] = useState(1);
  return (
    <div>
      <Container>
        <CustomProgressBar currentstate={currentstep * 15} />
        <CurrentComponent steps={steps} currentstep={currentstep} />
        <Row className="my-4 py-4">
          {currentstep === 7 ? (
            <Col className="text-center">
              <Button variant="danger">To verufy</Button>
            </Col>
          ) : (
            <Row>
              <Col className="text-end">
                <Button
                  variant="warning"
                  onClick={() => setCurrentstep(currentstep - 1)}
                  disabled={currentstep === 0}
                >
                  Prev
                </Button>
              </Col>
              <Col>
                <Button
                  variant="warning"
                  onClick={() => setCurrentstep(currentstep + 1)}
                >
                  Next
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cleaning;
