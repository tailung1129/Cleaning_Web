import React from "react"
import { Form , Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Row className="row text-color-1">
            <Form.Group className="text-center mb-5 h4">
                <Form.Label>Congratulations, suitable provider found. To whom should the offer be made out?</Form.Label>
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >FIRST NAME</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >LAST NAME</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >E-MAIL</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
        </Row>
    );
}

export default Contact;