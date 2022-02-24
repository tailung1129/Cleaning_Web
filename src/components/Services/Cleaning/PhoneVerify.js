import React, { useState } from "react";
import { Form, ButtonGroup, Button, Col } from "react-bootstrap";
import { fnRequestSave } from "../../../api"

const PhoneVerify = (props) => {
  const [phonenumber, setPhonenumber] = useState(
    props.resultcleaning.phonenumber
  );
  const [availabletime, setAvailabletime] = useState(
    props.resultcleaning.availabletime
  );

  const fnPhoneNumber = (e) => {
    setPhonenumber(e.target.value);
  };
  const fnAvailabletime = (e) => {
    setAvailabletime(e.target.value);
  };

  if (props.nextalarm === props.currentstep) {
    if (phonenumber === "") {
      console.log("here currentid null");
      props.setNextalarm(-1);
    } else {
      const newState = Object.assign({}, props.resultcleaning, {
        phonenumber: phonenumber,
        availabletime: availabletime,
      });
      props.setResultcleaning(newState);
      props.setNextalarm(-1);
    //   alert("this is finish");
      var preresult = props.resultcleaning;
      var postdata = {
        categoryId: "6217ad062553ae7955a86182",
        user: { firstname: preresult.firstname, 
                lastname: preresult.lastname,
                email: preresult.email,
                contactNo: preresult.phonenumber
        },
        date: preresult.categorydate,
        numberOfRooms: parseInt(preresult.roomnum),
        purchaseGuarantee: "yes",
        objectArea: parseInt(preresult.floorarea),
        pollution: preresult.pollution,
        areas: [preresult.additionalarea],
        extras: "",
        location: "",
        distance: 0,
        focus: "",
        frequency: "",
        discount: 0,
        reachableFrom: 0,
        reachableTill: 0,
        noOfBoxes: 0,
        description: preresult.orderdescription
      };
      console.log("here is request offer postdata " , postdata);
      fnRequestSave(postdata)
        .then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error)
        });
    }
  }

  return (
    <Col md={{ span: 9, offset: 3 }} className="w-100">
      <Form className="w-50">
        <Form.Group className="text-center pt-4">
          <Form.Label>Please enter your phone number</Form.Label>
        </Form.Group>
        <Form.Group className="pt-4">
          <Form.Label>PHONE NUMBER</Form.Label>
          <Form.Control
            type="tel"
            value={phonenumber}
            onChange={fnPhoneNumber}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="pt-4">
          <Form.Label>WHEN ARE YOU AVAILABLE? (MULTIPLE CHOICE)</Form.Label>
          <br />
          <ButtonGroup aria-label="Basic example" onClick={fnAvailabletime}>
            <Button
              variant="secondary"
              className={availabletime === "8am-12pm" ? "active_button" : ""}
              value="8am-12pm"
            >
              8am-12pm
            </Button>
            <Button
              variant="secondary"
              className={availabletime === "12pm-1pm" ? "active_button" : ""}
              value="12pm-1pm"
            >
              12pm-1pm
            </Button>
            <Button
              variant="secondary"
              className={availabletime === "1pm-5pm" ? "active_button" : ""}
              value="1pm-5pm"
            >
              1pm-5pm
            </Button>
            <Button
              variant="secondary"
              className={availabletime === "5pm-8pm" ? "active_button" : ""}
              value="5pm-8pm"
            >
              5pm-8pm
            </Button>
            <Button
              variant="secondary"
              className={availabletime === "from 8pm" ? "active_button" : ""}
              value="from 8pm"
            >
              from 8pm
            </Button>
          </ButtonGroup>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default PhoneVerify;
