import React from "react"
import { Form } from 'react-bootstrap'

const Pictures = () => {
    return (
        <div className="text-color-1">
            <Form.Group className="text-center">
                <Form.Label >Please add an image for more accurate listings and to maximize listing quality.</Form.Label>
                <Form.Control className="col-12" type="file" as="input" />
            </Form.Group>
        </div>
    );
}

export default Pictures;