import { Form , ButtonGroup , Button , Col } from "react-bootstrap"

const PhoneVerify = () => {
    return (
        <Col md={{span:9 , offset:3}} className="w-100">
            <Form className="w-50">
                <Form.Group className="text-center pt-4">
                    <Form.Label>Please enter your phone number</Form.Label>
                </Form.Group>
                <Form.Group className="pt-4">
                    <Form.Label>PHONE NUMBER</Form.Label>
                    <Form.Control type="tel"></Form.Control>
                </Form.Group>
                <Form.Group className="pt-4">
                    <Form.Label>WHEN ARE YOU AVAILABLE? (MULTIPLE CHOICE)</Form.Label><br/>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">8am-12pm</Button>
                        <Button variant="secondary">12pm-1pm</Button>
                        <Button variant="secondary">1pm-5pm</Button>
                        <Button variant="secondary">5pm-8pm</Button>
                        <Button variant="secondary">from 8pm</Button>
                    </ButtonGroup>
                </Form.Group>
            </Form>
        </Col>
    );
}

export default PhoneVerify;