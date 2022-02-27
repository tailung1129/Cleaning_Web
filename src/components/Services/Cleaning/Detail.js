import React , { useState } from "react"
import { Form , Row , Col , Button } from 'react-bootstrap'

const Detail = ( props ) => {
    
    const [whatclean , setWhatclean ] = useState(props.resultcleaning.whatclean);
    const [additionalarea , setAdditionalarea ]= useState(props.resultcleaning.additionalarea);
    const [orderdescription , setOrderdescription ] = useState(props.resultcleaning.orderdescription);

    const fnWhatClean = ( e ) => {
        setWhatclean(e.target.value);
    }
    const fnAddtionalArea = ( e ) => {
        setAdditionalarea(e.target.value);
    }
    const fnOrderdesciption = ( e ) => {
        setOrderdescription(e.target.value);
    }
    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {whatclean:whatclean , additionalarea:additionalarea , orderdescription:orderdescription});            
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
            const newState = Object.assign({}, props.resultcleaning, {whatclean:whatclean , additionalarea:additionalarea , orderdescription:orderdescription});            
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
    }

    return (
        <div className="text-color-1">
            <div className="row">
                <Form.Group className="col-6">
                    <Form.Label>WHAT TO CLEAN(MULTIPLE CHOICE)</Form.Label>
                    <select className="form-select" onChange={fnWhatClean} value={whatclean}>
                        <option selected value="Parkett">Parkett</option>
                        <option value="Laminat">Laminat</option>
                        <option value="Teppich">Teppich</option>
                        <option value="Plattenboden">Plattenboden</option>
                    </select>
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>ADDITIONAL AREAS(MULTIPLE SELECTION)</Form.Label>
                    <select className="form-select" onChange={fnAddtionalArea} value={additionalarea} >
                        <option selected value="Garage">Garage</option>
                        <option value="Keller">Keller</option>
                        <option value="Estrich">Estrich</option>
                        <option value="Balkon">Balkon</option>
                    </select>
                </Form.Group>
            </div>
            <Form.Group className="pt-4">
                <Form.Label>ORDER DESCRIPTION</Form.Label>
                <Form.Control as="textarea" value={orderdescription} rows={5} placeholder="Description: Requests with a detailed description receive significantly more, faster and more precise offers!" onChange={fnOrderdesciption} />
            </Form.Group>
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

export default Detail;