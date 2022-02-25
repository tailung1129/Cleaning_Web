import React , { useState } from "react"
import { Form } from 'react-bootstrap'

const Pictures = ( props ) => {

    const [fileUrl , setFileUrl] = useState(props.resultcleaning.fileUrl)

    if(props.nextalarm===props.currentstep)
    {
        if(fileUrl===null)
        {
            console.log("here currentid null");
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {fileUrl:fileUrl});            
            props.setResultcleaning(newState);
            
        }   
        props.setNextalarm(-1);
        props.setCurrentstep(props.currentstep+1);
    }

    const fnChangeImage = ( e ) => {
        const file = e.target.files[0];
        // console.log(e.target.files[0]);
        setFileUrl(URL.createObjectURL(file));
    }
    return (
        <div className="text-color-1">
            <Form.Group className="text-center">
                <Form.Label >Please add an image for more accurate listings and to maximize listing quality.</Form.Label>
                <Form.Control className="col-12" type="file" as="input" onChange={fnChangeImage} />
            </Form.Group>
            {
                fileUrl && (
                <img className="rounded mt-4" width="350" src={fileUrl} />
            )
        }
        </div>
    );
}

export default Pictures;