import React , {useState} from "react"
import { Form , Row } from 'react-bootstrap'

const Contact = ( props ) => {

    const [firstname , setFirstname ] = useState(props.resultcleaning.firstname);
    const [lastname , setLastname ] = useState(props.resultcleaning.lastname);
    const [email , setEmail ] = useState(props.resultcleaning.email);

    const fnFirstName = ( e ) => {
        setFirstname(e.target.value);
    }
    const fnLastName = ( e ) => {
        setLastname(e.target.value);
    }
    const fnEmail = ( e ) => {
        setEmail(e.target.value);
    }

    if(props.nextalarm===props.currentstep)
    {
        if(firstname===""||lastname===""||email==="")
        {
            console.log("here currentid null");
            props.setNextalarm(-1);
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {firstname:firstname , lastname:lastname , email:email});            
            props.setResultcleaning(newState);
            props.setNextalarm(-1);
            props.setCurrentstep(props.currentstep+1);
        }   
    }
    return (
        <Row className="row text-color-1">
            <Form.Group className="text-center mb-5 h4">
                <Form.Label>Congratulations, suitable provider found. To whom should the offer be made out?</Form.Label>
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >FIRST NAME</Form.Label>
                <Form.Control type="text" value={firstname} onChange={fnFirstName} />
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >LAST NAME</Form.Label>
                <Form.Control type="text" value={lastname} onChange={fnLastName} />
            </Form.Group>
            <Form.Group className="col-4">
                <Form.Label >E-MAIL</Form.Label>
                <Form.Control type="email" value={email} onChange={fnEmail} />
            </Form.Group>
        </Row>
    );
}

export default Contact;