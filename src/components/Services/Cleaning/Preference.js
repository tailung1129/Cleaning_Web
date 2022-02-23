import React from "react"
import { Form } from 'react-bootstrap'
import { BsTelephoneFill , BsCheck} from "react-icons/bs"

const Preference = () => {
    return (
        <div className="text-color-1">
            <Form.Group className="text-center">
                <Form.Label >How would you like to get the offer?</Form.Label>
                <div className="row" >
                    <div className="col-6">
                        <div>
                            <BsTelephoneFill/>
                            <div>IMMEDIATE ADVICE</div>
                        </div>
                        <div className="text-left">
                            <div> <BsCheck /> Direct callback </div>
                            <div> <BsCheck /> Free consultation </div>
                            <div> <BsCheck /> Exact offer </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div>ROUGH OFFER + ADVICE</div>
                        </div>
                        <div>
                            <div><BsCheck /> Target price</div>
                            <div><BsCheck /> Information in advance</div>
                            <div><BsCheck /> Free consultation</div>
                        </div>
                    </div>
                </div>
            </Form.Group>
        </div>
    );
}

export default Preference;