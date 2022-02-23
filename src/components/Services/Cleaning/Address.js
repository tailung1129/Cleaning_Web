import React from "react"
import { Form , Button , ButtonGroup , Row } from 'react-bootstrap'

const Address = () => {
    return (
        <Row className="text-color-1 mt-5">
            <Row>
                <Form.Group className="col-6">
                    <Form.Label>ADDRESS-(TYPE&SELECT ADDRESS)</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="col-3">
                    <Form.Label>WHAT IS MORE IMPORTANT</Form.Label>
                    <ButtonGroup>
                        <Button variant="secondary">quality</Button>
                        <Button variant="secondary">price</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group className="col-3">
                    <Form.Label>WHAT IS MORE IMPORTANT</Form.Label>
                    <ButtonGroup>
                        <Button variant="secondary">-</Button>
                        <Form.Control type="text" />
                        <Button variant="secondary">+</Button>
                    </ButtonGroup>
                </Form.Group>
            </Row>
            <Row className="pt-2">
                <Form.Group className="col-6">
                    <Form.Label>HOW MANY ROOMS DOES THE PROPERTY HAVE?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="col-5">
                    <Form.Label>DEGREE OF POLLUTION?</Form.Label>
                    <ButtonGroup>
                        <Button variant="secondary">Very dirty</Button>
                        <Button variant="secondary">medium dirty</Button>
                        <Button variant="secondary">Little dirty</Button>
                    </ButtonGroup>
                </Form.Group>
            </Row>
        </Row>
    );
}

export default Address;