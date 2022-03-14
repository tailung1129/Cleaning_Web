import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form, ButtonGroup, Button, Col , Row } from "react-bootstrap";
import { fnRequestSave } from "../../../api";

const PhoneVerify = (props) => {
    var preresult = props.resultcleaning;
    const navigate = useNavigate();
    const [phonenumber, setPhonenumber] = useState(
        props.resultcleaning.phonenumber
    );
    const [availabletime, setAvailabletime] = useState(
        props.resultcleaning.availabletime
    );
    const [flagphonenumber , setFlagphonenumber] = useState(false);

    const fnPhoneNumber = (e) => {
        setPhonenumber(e.target.value);
        setFlagphonenumber(false);
    };
    const fnAvailabletime = (e) => {
        setAvailabletime(e.target.value);
    };

    const fnVerifyPhone = () => {
        if (phonenumber === "" ) {
            console.log("here currentid null");
            setFlagphonenumber(true);
        } 
        else {
            var areas = [];
            var extras = "";
            preresult.whatclean.map( list => areas.push(list.value));
            preresult.additionalarea.map( list => extras +=" " + list.value)

            var matches = availabletime.match(/\d+/g);
            var postdata = {
                categoryId: preresult.subcategory,
                user: { firstname: preresult.firstname, 
                        lastname: preresult.lastname,
                        email: preresult.email,
                        contactNo: phonenumber
                },
                date: preresult.categorydate,
                numberOfRooms: parseInt(preresult.roomnum),
                purchaseGuarantee: "",
                objectArea: parseInt(preresult.floorarea),
                pollution: preresult.pollution,
                areas: areas,
                extras: extras,
                address: {
                    location: preresult.address,
                    postCode: preresult.postcode,
                    latitude: preresult.latitude,
                    longitude: preresult.longitude
                },
                distance: 0,
                focus: preresult.mimportant,
                discount: 0,
                reachableFrom: matches[0],
                reachableTill: matches[1],
                description: preresult.orderdescription
            };
            fnRequestSave(postdata)
                .then((res) => {
                    console.log(res);
                    if(res.data.status==="Success")
                        navigate("/");
                }).catch((error) => {
                    console.log(error)
                });
            console.log("here is request offer postdata " );
            const newState = Object.assign({}, props.resultcleaning, {
                phonenumber: phonenumber,
                availabletime: availabletime,
            });
            props.setResultcleaning(newState);
        }
    }

  return (
    <Row>
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
                className={flagphonenumber&&"border border-danger"}
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
        <Col className="text-center py-3">
            <Button variant="danger" onClick={fnVerifyPhone} >Send</Button>
        </Col>
    </Row>
  );
};

export default PhoneVerify;