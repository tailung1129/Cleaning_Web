import "./Cleaning.css"
import { Card } from "react-bootstrap"
import { useState , useLayoutEffect } from "react"
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs"

import { useDispatch , useSelector } from "react-redux"
import { initprevAction } from "../../../redux/actions/prevAction"

const Category = (props) => {

    const dispatch = useDispatch();
    const flagnext = useSelector(state => state.next);
    dispatch(initprevAction());
    // useLayoutEffect(()=>{
    //     dispatch(initprevAction());
    // },[]);
    const [currentid , setCurrentid ] = useState(props.resultcleaning.category);
    
    if(flagnext)
    {
        if(currentid==="")
        {
            console.log("here currentid null");
        }
        else
        {
            const newState = Object.assign({}, props.resultcleaning, {category:currentid});            
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
        }
    }

    return (
        <Card className="text-center h-50">
            <Card.Body className="text-color-2" >
                <Card.Title className="my-4">Where do you need cleaning</Card.Title>
                <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
                    <div className={(currentid==="APARTMENT")?"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("APARTMENT")}>
                        <BsBuilding fontSize="5em" />
                        <div>APARTMENT</div>
                    </div>
                    <div className={(currentid==="HOUSE")?"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("HOUSE")}>
                        <BsHouseFill fontSize="5em" />
                        <div>HOUSE</div>
                    </div>
                    <div className={(currentid==="OFFICE")?"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("OFFICE")}>
                        <BsFileEarmarkText fontSize="5em" />
                        <div>OFFICE</div>
                    </div>
                    <div className={(currentid==="MISCELLANEOUS")?"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5 "+"active_category":"mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5"} onClick={()=>setCurrentid("MISCELLANEOUS")}>
                        <BsQuestionLg fontSize="5em" />
                        <div>MISCELLANEOUS</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Category;