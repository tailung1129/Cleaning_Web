import React , { useState } from "react"
import { Form , Row , Col , Button } from 'react-bootstrap'
import Select from 'react-select'

const Detail = ( props ) => {

    // var MultiSelector = require('react-bootstrap-multiselect');
    
    const [whatclean , setWhatclean ] = useState(props.resultcleaning.whatclean);
    const [additionalarea , setAdditionalarea ]= useState(props.resultcleaning.additionalarea);
    const [orderdescription , setOrderdescription ] = useState(props.resultcleaning.orderdescription);

    const multidata =  [
        {label:'Group One',children:[{value:'1-One'},{value:'1-Two'},{value:'1-Three'},{value:'1-Four',label:'Four Label'}]},
        {label:'Group Two',children:[{value:'2-One'},{value:'2-Two'},{value:'2-Three'},{value:'2-Four',label:'Four Label'}]},
        {label:'Group Three',children:[{value:'3-One'},{value:'3-Two'},{value:'3-Three'},{value:'3-Four',label:'Four Label'}]}
    ]

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

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="text-color-1">
            <Row>
                <Form.Group className="col-6">
                    <Form.Label>WHAT TO CLEAN(MULTIPLE CHOICE)</Form.Label>
                    <select className="form-select" onChange={fnWhatClean} value={whatclean}>
                        <option selected value="Parkett">Parkett</option>
                        <option value="Laminat">Laminat</option>
                        <option value="Teppich">Teppich</option>
                        <option value="Plattenboden">Plattenboden</option>
                    </select>
                    {/* <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    /> */}
                    
                    {/* <MultiSelector data={multidata} multiple /> */}
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