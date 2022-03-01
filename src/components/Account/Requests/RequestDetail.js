import { Row , Col , Card , Form , InputGroup , Button } from "react-bootstrap"
import { BsFileEarmarkText } from "react-icons/bs"
import { FaTelegramPlane , FaPrint , FaQuestionCircle } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Fragment } from "react"

const RequestDetail = () => {
    const params = new URLSearchParams(window.location.search)
    const listindex = params.get('index');
    
    const requests = useSelector( state => state.company.requests);
    console.log("here is detail request" , requests)
    const company = useSelector( state => state.company);
    const detail = company.requests[listindex];
    console.log("here is listindex " , detail);


    return (
        <Row className="mt-3">
            <Col >
                {/* <h2>Cleaning request 81228 for LnB clearance service</h2> */}
                
                <Card  >
                    <Card.Header>Contact details</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4}>Name</Col>
                            <Col md={8}>{detail.user.lastname} {detail.user.firstname}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Phone</Col>
                            <Col md={8}>{detail.user.contactNo}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>E-mail</Col>
                            <Col md={8}>{detail.user.email}</Col>
                        </Row>
                    </Card.Body>
                </Card>
                

                <Card className="mt-4" >
                    <Card.Header>details of the request</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4}>Category</Col>
                            <Col md={8}>{detail.category.type}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Contact request</Col>
                            <Col md={8}></Col>
                        </Row>
                        <Row>
                            <Col md={4}>Date</Col>
                            <Col md={8}>{detail.date}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Object</Col>
                            <Col md={8}></Col>
                        </Row>
                        <Row>
                            <Col md={4}>Number of Room</Col>
                            <Col md={8}>{detail.numberOfRooms} rooms</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Object area</Col>
                            <Col md={8}>{detail.objectArea} m2</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Pollution</Col>
                            <Col md={8}>{detail.pollution}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Areas</Col>
                            <Col md={8}>{detail.address.location}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Extras</Col>
                            <Col md={8}>{detail.extras}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Distance</Col>
                            <Col md={8}>{detail.distance}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Focus</Col>
                            <Col md={8}>{detail.focus}</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Tel. reachable</Col>
                            <Col md={8}>{detail.reachableFrom}pm-{detail.reachableTill}pm</Col>
                        </Row>
                        <Row>
                            <Col md={4}>Discount</Col>
                            <Col md={8}>{detail.discount}</Col>
                        </Row>
                    </Card.Body>
                </Card>
                
                {/* <div>
                <Card className="my-4 border border-primary" >
                    <Card.Header className="bg-primary text-white"><BsFileEarmarkText /> make an offer</Card.Header>
                    <Card.Body>
                        <Form.Text>{"Hello" + detail.user.lastname + " " + detail.user.firstname}</Form.Text><br /><br />
                        <Form.Text>{"The company " + company.name + " makes you an offer for your " + detail.category + " project"} </Form.Text>
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
                </div> */}
                
            </Col>
            {/* <Col md={4}>
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
            </Col> */}
        </Row>
    );
}

export default RequestDetail;