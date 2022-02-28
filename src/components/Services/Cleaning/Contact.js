import React , {useState , Fragment} from "react"
import { Form , Row , Col , Button } from 'react-bootstrap'

const Contact = ( props ) => {

    const [firstname , setFirstname ] = useState(props.resultcleaning.firstname);
    const [lastname , setLastname ] = useState(props.resultcleaning.lastname);
    const [email , setEmail ] = useState(props.resultcleaning.email);
    const [flagfirstname , setFlagfirstname] = useState(false);
    const [flaglastname , setFlaglastname] = useState(false);
    const [flagemail , setFlagemail] = useState(false);

    const fnFirstName = ( e ) => {
        setFirstname(e.target.value);
        setFlagfirstname(false);
    }
    const fnLastName = ( e ) => {
        setLastname(e.target.value);
        setFlaglastname(false);
    }
    const fnEmail = ( e ) => {
        setEmail(e.target.value);
        setFlagemail(false);
    }
    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {firstname:firstname , lastname:lastname , email:email});            
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
        if(firstname===""||lastname===""||email==="")
        {
            if(firstname===""&&flagfirstname===false)
                setFlagfirstname(true);
            if(lastname===""&&flaglastname===false)
                setFlaglastname(true);
            if(email===""&&flagemail===false)
                setFlagemail(true);
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {firstname:firstname , lastname:lastname , email:email});            
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
        }   
    }
    return (
        <Fragment>
            <Row className="row text-color-1">
                <Form.Group className="text-center mb-5 h4">
                    <Form.Label>Congratulations, suitable provider found. To whom should the offer be made out?</Form.Label>
                </Form.Group>
                <Form.Group className="col-4">
                    <Form.Label >FIRST NAME</Form.Label>
                    <Form.Control type="text" value={firstname} onChange={fnFirstName} className={flagfirstname&&"border border-danger"} />
                </Form.Group>
                <Form.Group className="col-4">
                    <Form.Label >LAST NAME</Form.Label>
                    <Form.Control type="text" value={lastname} onChange={fnLastName} className={flaglastname&&"border border-danger"} />
                </Form.Group>
                <Form.Group className="col-4">
                    <Form.Label >E-MAIL</Form.Label>
                    <Form.Control type="email" value={email} onChange={fnEmail} className={flagemail&&"border border-danger"} />
                </Form.Group>
            </Row>
            <Row className="my-4 py-4">
                <Col className="text-end">
                    <Button
                        variant="warning"
                        onClick={fnClickPrev}
                    >
                        Prev
                    </Button>
                </Col>
                <Col>
                    <Button
                        variant="warning"
                        onClick={fnClickNext}
                    >
                        Next
                    </Button>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Contact;