import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fnRegister } from "../../api"

const Cardbody2 = (props) => {
  var companyname = "";
  var yourname = "";
  var street = "";
  var homepage = "";
  var password = "";
  var email = "";
  var uid = "";
  var postcode = "";
  var location = "";
  var phonenumber = "";

  const navigate = useNavigate()

  const fnCompanyName = (e) => {
    companyname = e.target.value;
  };
  const fnYourname = (e) => {
    yourname = e.target.value;
  };
  const fnStreet = (e) => {
    street = e.target.value;
  };
  const fnHomepage = (e) => {
    homepage = e.target.value;
  };
  const fnPassword = (e) => {
    password = e.target.value;
  };
  const fnEmail = (e) => {
    email = e.target.value;
  };
  const fnUid = (e) => {
    uid = e.target.value;
  };
  const fnPostcode = (e) => {
    postcode = e.target.value;
  };
  const fnLocation = (e) => {
    location = e.target.value;
  };
  const fnPhonenumber = (e) => {
    phonenumber = e.target.value;
  };
  const fnSubmitRegister = (e) => {
    e.preventDefault();
    var ele = document.getElementById("register_form");
    var chk_status = ele.checkValidity();
    ele.reportValidity();
    if (chk_status) {
        var postdata = {
            name: yourname,
            contactNumber: phonenumber,
            email: email,
            commercialRegister: uid,
            password: password,
            website: homepage,
            addressStreet: street,
            postalCode: postcode,
            location: location,
            country: ""
        };
        fnRegister( postdata )
            .then((res) => {
                console.log(res.data)
                if(res.data.response_description === "Success")
                  navigate("/");
            }).catch((error) => {
                console.log(error)
        });
    }
  };

  return (
    <Card.Body>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>COMPANY NAME</Form.Label>
            <Form.Control onChange={fnCompanyName} type="text" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>YOUR NAME</Form.Label>
            <Form.Control onChange={fnYourname} type="text" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>STREET</Form.Label>
            <Form.Control onChange={fnStreet} type="text" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>HOME PAGE</Form.Label>
            <Form.Control onChange={fnHomepage} type="text" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={fnPassword} type="password" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>E-MAIL</Form.Label>
            <Form.Control onChange={fnEmail} type="email" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>COMMERCIAL REGISTER(UID)</Form.Label>
            <Form.Control onChange={fnUid} type="text" />
          </Form.Group>
          <Row className="mt-1">
            <Col md={5}>
              <Form.Group>
                <Form.Label>POSTCODE</Form.Label>
                <Form.Control onChange={fnPostcode} type="text" />
              </Form.Group>
            </Col>
            <Col md={7}>
              <Form.Group>
                <Form.Label>LOCATION</Form.Label>
                <Form.Control onChange={fnLocation} type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mt-1">
            <Form.Label>BUSINESS PHONE NUMBER</Form.Label>
            <Form.Control onChange={fnPhonenumber} type="text" />
          </Form.Group>
          <Form.Group className="mt-1">
            <Form.Label>Re-password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Col>
      </Row>
      <Col className="text-center mt-2">
        <Form.Text>* IF YOU CONTINUE, ACCEPT TERMS AND PRIVACY</Form.Text>
      </Col>
      <Row className="mt-3">
        <Col md={{ span: 2, offset: 4 }}>
          <Button variant="light" onClick={() => props.fnChangeShow()}>
            Back
          </Button>
        </Col>
        <Col>
          <Button variant="warning" type="submit" onClick={fnSubmitRegister}>
            Register for free
          </Button>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default Cardbody2;
