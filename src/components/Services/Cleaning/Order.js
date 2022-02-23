import React , { useState } from "react"
import { Form , Button , ButtonGroup } from 'react-bootstrap'

const Order = () => {
    const [setRadioValue] = useState('1');
    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    return (
        <div className="text-color-1">
            <div>
                <Form.Group className="col-6">
                    <Form.Label>Email address</Form.Label>
                    <select className="form-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Form.Group>
            </div>
            <div className="pt-2 row">
                <div className="col-6">
                    <Form.Group>
                        <Form.Label>DATE</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </div>
                <div className="col-6">
                    <Form.Group>
                        <Form.Label>TIME FLEXIBILITY</Form.Label>
                        <div>
                            <ButtonGroup
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radios.map((radio, idx) => (
                                    <Button variant="secondary">{radio.name}</Button>
                                ))}
                            </ButtonGroup>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default Order;