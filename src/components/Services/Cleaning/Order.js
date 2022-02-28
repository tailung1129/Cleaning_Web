import React , { useState , useLayoutEffect , Fragment } from "react"
import { Form , Button , ButtonGroup , Row , Col } from 'react-bootstrap'
import { fnGetCategory } from "../../../api"

const Order = (props) => {

    const [subcategory , setSubcategory ] = useState(props.resultcleaning.subcategory);
    const [categorydate , setCategorydate ]= useState(props.resultcleaning.categorydate);
    const [categorytimeflex , setCategoryflex ] = useState(props.resultcleaning.categorytimeflex);

    const [subcategorylist , setSubcategorylist] = useState([]);
    const [flagdate , setFlagdate] = useState(false);

    const fnSubSelectChange = (e) => {
        setSubcategory(e.target.value);
    }
    const fnCategoryDate = (e) => {
        setCategorydate(e.target.value);
        setFlagdate(false);
    }
    const fnCategoryTimeFlex = (e) => {
        setCategoryflex(e.target.value);
    }

    const disablePastDate = () => {
        const today = new Date( new Date().getTime() + 24 * 60 * 60 * 1000 );
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {subcategory:subcategory , categorydate:categorydate , categorytimeflex:categorytimeflex});            
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
        if(categorydate==="")
        {
            setFlagdate(true);
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {subcategory:subcategory , categorydate:categorydate , categorytimeflex:categorytimeflex});            
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
        }   
    }

    useLayoutEffect(()=>{
        fnGetCategory()
        .then((res)=>{
            setSubcategorylist(res.data.categories);
        });
    },[]); 
    
    return (
        <Fragment>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>CATEGORY</Form.Label>
                        <Form.Select onChange={fnSubSelectChange} value={subcategory}>
                            {subcategorylist.map( (list, index) => (<option key={index} value={list.id}>{list.type}</option>) )}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>DATE</Form.Label>
                        <Form.Control type="date" onChange={fnCategoryDate} value={categorydate} min={disablePastDate()} className={flagdate&&"border border-danger"} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>TIME FLEXIBILITY</Form.Label>
                        <Form.Group>
                            <ButtonGroup onClick={fnCategoryTimeFlex}>
                                <Button variant="secondary" className={categorytimeflex==="1 day"?"active_button":""} value="1 day">1 day</Button>
                                <Button variant="secondary" className={categorytimeflex==="1 week"?"active_button":""} value="1 week">1 week</Button>
                                <Button variant="secondary" className={categorytimeflex==="1 month"?"active_button":""} value="1 month">1 month</Button>
                                <Button variant="secondary" className={categorytimeflex==="No"?"active_button":""} value="No">No</Button>
                            </ButtonGroup>
                        </Form.Group>
                    </Form.Group>
                </Col>
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

export default Order;