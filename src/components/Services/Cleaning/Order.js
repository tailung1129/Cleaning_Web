import React , { useState } from "react"
import { Form , Button , ButtonGroup } from 'react-bootstrap'

const Order = (props) => {

    const [subcategory , setSubcategory ] = useState(props.resultcleaning.subcategory);
    const [categorydate , setCategorydate ]= useState(props.resultcleaning.categorydate);
    const [categorytimeflex , setCategoryflex ] = useState(props.resultcleaning.categorytimeflex);
    const fnSubSelectChange = (e) => {
        setSubcategory(e.target.value);
    }
    const fnCategoryDate = (e) => {
        setCategorydate(e.target.value);
    }
    const fnCategoryTimeFlex = (e) => {
        setCategoryflex(e.target.value);
    }
    if(props.nextalarm===props.currentstep)
    {
        if(categorydate==="")
        {
            console.log("here currentid null");
            props.setNextalarm(-1);
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {subcategory:subcategory , categorydate:categorydate , categorytimeflex:categorytimeflex});            
            props.setResultcleaning(newState);
            props.setNextalarm(-1);
            props.setCurrentstep(props.currentstep+1);
        }   
    }
    return (
        <div className="text-color-1">
            <div>
                <Form.Group className="col-6">
                    <Form.Label>CATEGORY</Form.Label>
                    <select className="form-select" onChange={fnSubSelectChange} value={subcategory}>
                        <option value="Removal cleaning">Removal cleaning</option>
                        <option value="Recurring cleaning private">Recurring cleaning private</option>
                        <option value="Recurring commercial cleaning">Recurring commercial cleaning</option>
                        <option value="Facada cleaning">Facada cleaning</option>
                    </select>
                </Form.Group>
            </div>
            <div className="pt-2 row">
                <div className="col-6">
                    <Form.Group>
                        <Form.Label>DATE</Form.Label>
                        <Form.Control type="date" onChange={fnCategoryDate} value={categorydate} />
                    </Form.Group>
                </div>
                <div className="col-6">
                    <Form.Group>
                        <Form.Label>TIME FLEXIBILITY</Form.Label>
                        <div>
                            <ButtonGroup onClick={fnCategoryTimeFlex}>
                                <Button variant="secondary" className={categorytimeflex==="1 day"?"active_button":""} value="1 day">1 day</Button>
                                <Button variant="secondary" className={categorytimeflex==="1 week"?"active_button":""} value="1 week">1 week</Button>
                                <Button variant="secondary" className={categorytimeflex==="1 month"?"active_button":""} value="1 month">1 month</Button>
                                <Button variant="secondary" className={categorytimeflex==="1 No"?"active_button":""} value="No">No</Button>
                            </ButtonGroup>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default Order;