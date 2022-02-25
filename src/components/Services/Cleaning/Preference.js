import React , {useState} from "react"
import { Form , Row , Col } from 'react-bootstrap'
import { BsTelephoneFill , BsCheck} from "react-icons/bs"

const Preference = ( props ) => {

    const [offertype , setOffertype] = useState(props.resultcleaning.offertype);

    if(props.nextalarm===props.currentstep)
    {
        if(offertype==="")
        {
            console.log("here currentid null");
            props.setNextalarm(-1);
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {offertype:offertype});            
            props.setResultcleaning(newState);
            props.setNextalarm(-1);
            props.setCurrentstep(props.currentstep+1);
        }   
    }
    return (
        <div className="text-color-1">
            <Form.Group className="text-center">
                <Form.Label >How would you like to get the offer?</Form.Label>
                <Row className="mt-2">
                    <Col md={{span:2 , offset:3}} className={offertype==="Immediate"?"pt-4 border border-warning preference_item active_category":"pt-4 border border-warning preference_item"} onClick={() => setOffertype("Immediate")}>
                        <BsTelephoneFill size="2em"/>
                        <Form.Label>IMMEDIATE ADVICE</Form.Label>
                        <Col className="text-start"> <BsCheck /> Direct callback </Col>
                        <Col className="text-start"> <BsCheck /> Free consultation </Col>
                        <Col className="text-start"> <BsCheck /> Exact offer </Col>
                    </Col>
                    <Col md={{span:2 , offset:2}} className={offertype==="Rough"?"border border-warning preference_item active_category":"border border-warning preference_item"} onClick={() => setOffertype("Rough")} >
                        <Form.Label className="h1">@</Form.Label>
                        <Form.Label>ROUGH OFFER + ADVICE</Form.Label>
                    
                        <Col className="text-start"><BsCheck /> Target price</Col>
                        <Col className="text-start"><BsCheck /> Information in advance</Col>
                        <Col className="text-start"><BsCheck /> Free consultation</Col>
                    </Col>
                </Row>
            </Form.Group>
        </div>
    );
}

export default Preference;