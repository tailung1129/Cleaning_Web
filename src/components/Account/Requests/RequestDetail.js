import { Row , Col , Card , Form , InputGroup , Button } from "react-bootstrap"
import { BsFileEarmarkText } from "react-icons/bs"
import { FaTelegramPlane , FaPrint , FaQuestionCircle } from "react-icons/fa"

const RequestDetail = () => {
    return (
        <Row className="mt-3">
            <Col md={8}>
                <h2>Cleaning request 81228 for LnB clearance service</h2>
                <Card>
                    <Card.Header>Contact details</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4}>Surname</Col>
                            <Col md={8}>Antje Bigalke</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Phone</Col>
                            <Col md={8}>+41767863977</Col>
                        </Row>
                        <Row>
                            <Col md={4}>E-mail</Col>
                            <Col md={8}>antjebigalke@web.de</Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Header>details of the request</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4}>Category</Col>
                            <Col md={8}>Other Cleaning(ID:81273)</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Contact request</Col>
                            <Col md={8}>Rough offer/advice</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Date</Col>
                            <Col md={8}>Wednesday , 02/23/2022</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Object</Col>
                            <Col md={8}>apartment</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Number of Room</Col>
                            <Col md={8}>3 rooms</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Object area</Col>
                            <Col md={8}>100 m2</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Pollution</Col>
                            <Col md={8}>Very dirty</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Areas</Col>
                            <Col md={8}>Parquet, window panes, blinds/shutters, slats</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Extras</Col>
                            <Col md={8}>No</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Location</Col>
                            <Col md={8}>5400 Baden, CH</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Distance</Col>
                            <Col md={8}>30 kM(linear ditance)</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Focus</Col>
                            <Col md={8}>quality</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Tel. reachable</Col>
                            <Col md={8}>1pm-5pm</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Discount</Col>
                            <Col md={8}>30% discount because person only entered email</Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="my-4  border border-primary">
                    <Card.Header className="bg-primary text-white"><BsFileEarmarkText /> make an offer</Card.Header>
                    <Card.Body>
                        <Form.Text>Hello Antje Bigalke</Form.Text><br /><br />
                        <Form.Text>The company LnB Räumungsservice makes you an offer for your cleaning project in Dübendorf (ID: 81228)</Form.Text><br /><br />
                        <Form.Control as="textarea" placeholder="Please describe offer here..." rows={6} />
                        <Col md={3} className="my-4">
                            <InputGroup>
                                <InputGroup.Text>CHF</InputGroup.Text>
                                <Form.Control type="text" />
                            </InputGroup>
                        </Col>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="success">Success</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Col md={4}>
                <Row>
                    <Col>
                        <Button variant="outline-dark" size="sm"><FaTelegramPlane  /> Send dossier by email</Button>
                    </Col>
                    <Col className="text-end">
                        <Button variant="outline-dark" size="sm"><FaPrint /> Print dossier</Button>
                    </Col>
                </Row>
                <Col className="d-grid gap-2 mt-3"><Button variant="success" className="text-white">To the user account</Button></Col>
                <Col className="mt-3">Your account info@bletexpress.ch (LnB clearance service)</Col>
                <Card className="mt-3">
                    <Card.Header>We help with questions:</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={3} className="text-center"><FaQuestionCircle fontSize="3em" /></Col>
                            <Col md={9}>
                                <Col>Support area with videos</Col>
                                <Col>contact form</Col>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="mt-3">
                    <Card.Header>location</Card.Header>
                    <Card.Body></Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default RequestDetail;