import React , { useState } from "react"
import { Form , Row , Col , Button } from 'react-bootstrap'

const Pictures = ( props ) => {

    const [fileUrl , setFileUrl] = useState(props.resultcleaning.fileUrl);

    const fnChangeImage = ( e ) => {
        const file = e.target.files[0];
        // console.log(e.target.files[0]);
        setFileUrl(URL.createObjectURL(file));
    }
    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {fileUrl:fileUrl});            
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
        const newState = Object.assign({}, props.resultcleaning, {fileUrl:fileUrl});            
        props.setResultcleaning(newState);   
        props.setCurrentstep(props.currentstep+1);
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
        </div>
    );
}

export default Pictures;