import "./Cleaning.css"
import { Card , Row , Col , Button } from "react-bootstrap"
import { useState, Fragment } from "react"
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs"

const Category = (props) => {

    const [currentid , setCurrentid ] = useState(props.resultcleaning.category);    
    
    const fnClickNext = () => {
        const newState = Object.assign({}, props.resultcleaning, {category:currentid});            
        props.setResultcleaning(newState);
        props.setNextalarm(-1);
        props.setCurrentstep(props.currentstep+1);
    }

    return (
        <Fragment> 
            <Card className="text-center h-50">
                <Card.Body className="text-color-2" >
                    <Card.Title className="my-4">Where do you need cleaning</Card.Title>
                    <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
                        <div className={(currentid==="APARTMENT")?"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("APARTMENT")}>
                            <BsBuilding fontSize="5em" />
                            <div>APARTMENT</div>
                        </div>
                        <div className={(currentid==="HOUSE")?"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("HOUSE")}>
                            <BsHouseFill fontSize="5em" />
                            <div>HOUSE</div>
                        </div>
                        <div className={(currentid==="OFFICE")?"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("OFFICE")}>
                            <BsFileEarmarkText fontSize="5em" />
                            <div>OFFICE</div>
                        </div>
                        <div className={(currentid==="MISCELLANEOUS")?"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"m-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("MISCELLANEOUS")}>
                            <BsQuestionLg fontSize="5em" />
                            <div>MISCELLANEOUS</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Row className="my-4 py-4">
                <Col className="text-end">
                    <Button
                        variant="warning"
                        disabled={true}
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

export default Category;