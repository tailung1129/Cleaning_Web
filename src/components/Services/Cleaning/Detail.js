import React , { useState } from "react"
import { Form , Row , Col , Button } from 'react-bootstrap'
import Select from 'react-select'

const Detail = ( props ) => {

    const [orderdescription , setOrderdescription ] = useState(props.resultcleaning.orderdescription);
    const [selectedOption1, setSelectedOption1] = useState(props.resultcleaning.whatclean);
    const [selectedOption2, setSelectedOption2] = useState(props.resultcleaning.additionalarea);

    const fnOrderdesciption = ( e ) => {
        setOrderdescription(e.target.value);
    }
    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {whatclean:selectedOption1 , additionalarea:selectedOption2 , orderdescription:orderdescription});            
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
            const newState = Object.assign({}, props.resultcleaning, {whatclean:selectedOption1 , additionalarea:selectedOption2 , orderdescription:orderdescription});            
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
    }

    const options1 = [
        { value: 'Parkett', label: 'Parkett' },
        { value: 'Laminat', label: 'Laminat' },
        { value: 'Teppich', label: 'Teppich' },
        { value: 'Plattenboden', label: 'Plattenboden' },
    ];
    const options2 = [
        { value: 'Garage', label: 'Garage' },
        { value: 'Keller', label: 'Keller' },
        { value: 'Estrich', label: 'Estrich' },
        { value: 'Balkon', label: 'Balkon' },
    ];
    
    console.log(selectedOption2)

    return (
        <div className="text-color-1">
            <Row>
                <Form.Group className="col-6">
                    <Form.Label>WHAT TO CLEAN(MULTIPLE CHOICE)</Form.Label>
                    <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={options1}
                        isMulti={true}
                    />
                </Form.Group>
                <Form.Group className="col-6">
                    <Form.Label>ADDITIONAL AREAS(MULTIPLE SELECTION)</Form.Label>
                    <Select
                        defaultValue={selectedOption2}
                        onChange={setSelectedOption2}
                        options={options2}
                        isMulti={true}
                    />
                </Form.Group>
            </Row>
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