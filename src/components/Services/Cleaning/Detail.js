import React from "react"
import { Form } from 'react-bootstrap'

const Detail = () => {
    return (
        <div className="text-color-1">
            <div className="row">
                <Form.Group className="col-6">
                    <Form.Label>WHAT TO CLEAN(MULTIPLE CHOICE)</Form.Label>
                    <select className="form-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>ADDITIONAL AREAS(MULTIPLE SELECTION)</Form.Label>
                    <select className="form-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Form.Group>
            </div>
            <Form.Group className="pt-4">
                <Form.Label>HOW MANY ROOMS DOES THE PROPERTY HAVE?</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Description: Requests with a detailed description receive significantly more, faster and more precise offers!" />
            </Form.Group>
        </div>
    );
}

export default Detail;