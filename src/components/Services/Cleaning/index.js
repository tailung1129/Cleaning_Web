import React, { useState , useEffect } from "react";
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

  const [currentstep, setCurrentstep] = useState(1);
  const [nextalarm, setNextalarm] = useState(-1);
  const [resultcleaning, setResultcleaning] = useState({
    category : "",
    subcategory : "Removal cleaning",
    categorydate : "",
    categorytimeflex : "1 day",
    address : "",
    mimportant : "price",
    floorarea : "100",
    roomnum : "5",
    pollution : "Very dirty",
    whatclean : "Parkett",
    additionalarea : "Garage",
    orderdescription : "",
    morefile : "",
    offertype : "",
    firstname : "",
    lastname : "",
    email : "",
    phonenumber : "",
    availabletime : "1pm-5pm"
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ccategory = params.get('ccategory');
    const newState = Object.assign({}, resultcleaning, { category:ccategory });            
    setResultcleaning(newState);
  },[])

  const steps = [
    {
      component: (
        <Category
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Order
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Address
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Detail
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Pictures
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Preference
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <Contact
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
    {
      component: (
        <PhoneVerify
          nextalarm={nextalarm}
          setNextalarm={setNextalarm}
          currentstep={currentstep}
          setCurrentstep={setCurrentstep}
          resultcleaning={resultcleaning}
          setResultcleaning={setResultcleaning}
        />
      ),
    },
  ];

  console.log("here is resultcleanig", resultcleaning);
  return (
    <div>
      <Container>
        <CustomProgressBar currentstate={currentstep * 15} />
        <CurrentComponent steps={steps} currentstep={currentstep} />
        <Row className="my-4 py-4">
          {currentstep === 7 ? ""           
           : (
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
                  onClick={() => setNextalarm(currentstep)}
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
