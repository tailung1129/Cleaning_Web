import "./ServiceMenu.css"
import {BsCheck} from "react-icons/bs"

const ServiceMenu = () => {
    return (
        <div className="text-end ">    
            <div className="h-style-1 text-color-2">
                <header className="flow-header-content wrap-page py-1">
                    <div>
                        <h2>Get free quotes for cleaning</h2>
                    </div>
                    <div>
                        <h6>Compare up to 3 cleaning offers for free</h6>
                    </div>
                    <div className="d-flex">
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
                </header>
            </div>
        </div>
        
    );
}

export default ServiceMenu;