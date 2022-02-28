import "./ServiceMenu.css"
import {BsCheck} from "react-icons/bs"
import { Fragment } from "react"
import { Row } from "react-bootstrap"

const ServiceMenu = () => {
    return (
        <Fragment>
            <div className="text-color-2 text-center flow-header-content wrap-page py-1">
                <h2>Get free quotes for cleaning</h2>
                <h6>Compare up to 3 cleaning offers for free</h6>
                <div className="d-inline-flex">
                    <div className="mx-2" >
                        <BsCheck /> Free and non-binding
                    </div>
                    <div className="mx-2" >
                        <BsCheck /> save time and money
                    </div>
                    <div className="mx-2" >
                        <BsCheck /> Simple and convenient
                    </div>
                </div>
            </div>
        </Fragment>
        
    );
}

export default ServiceMenu;