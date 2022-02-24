import React from "react"
import { Form } from 'react-bootstrap'

const Pictures = ( props ) => {
    if(props.nextalarm===props.currentstep)
    {
        // if(firstname===""||lastname===""||email==="")
        // {
        //     console.log("here currentid null");
        //     props.setNextalarm(-1);
        // }
        // else
        {
            // const newState = Object.assign({}, props.resultcleaning, {firstname:firstname , lastname:lastname , email:email});            
            // props.setResultcleaning(newState);
            props.setNextalarm(-1);
            props.setCurrentstep(props.currentstep+1);
        }   
    }
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