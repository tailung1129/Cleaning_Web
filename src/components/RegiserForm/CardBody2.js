import { Card , Row , Col, Form ,Button } from "react-bootstrap"

const Cardbody2 = (props) => {
    return (
        <Card.Body>
            <Row>
               <Col>
                    <Form.Group>
                        <Form.Label>COMPANY NAME</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Label>YOUR NAME</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Label>STREET</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Label>HOME PAGE</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
               </Col>
               <Col>
                    <Form.Group>
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control type="email"  />
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Label>COMMERCIAL REGISTER(UID)</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Row className="mt-1">
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label>POSTCODE</Form.Label>
                                <Form.Control type="text"  />
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group>
                                <Form.Label>LOCATION</Form.Label>
                                <Form.Control type="text"  />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mt-1">
                        <Form.Label>BUSINESS PHONE NUMBER</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
               </Col>
            </Row>
            <Col className="text-center mt-2">
                <Form.Text>* IF YOU CONTINUE, ACCEPT TERMS AND PRIVACY</Form.Text>
            </Col>
            <Row className="mt-3">
                <Col md={{span:2 , offset:4}}><Button variant="light" onClick={()=>props.fnChangeShow()}>Back</Button></Col>
                <Col><Button>Register for free</Button></Col>
            </Row>
        </Card.Body>
    )
}

export default Cardbody2;