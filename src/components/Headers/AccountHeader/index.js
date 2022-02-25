import { Link } from "react-router-dom"
import { Row , Col , Button} from "react-bootstrap";
import { BsBellSlash } from "react-icons/bs"
import "./AccountHeader.css"

const AccountHeader = () => {
    return(
        <div className="background-color-2">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 ps-100px">
                <Row className="w-100">
                    <Col md={2}>
                        <Link
                        to="/"
                        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none display-6"
                        >
                        Compare
                        </Link>
                    </Col>
                    <Col md={2} className="text-white">
                        <div>LnB clearance service</div>
                        <div>Customer number: 1888</div>
                    </Col>
                    <Col md={{span:2 , offset:1}} className="ps-5 text-white" >
                        <div>hotline</div>
                        <div>044 552 05 14</div>
                    </Col>
                    <Col md={{span:4 , offset:1}} className="ps-100px">
                        <Button className="mx-1 background-color-2 border-0">help</Button>
                        <Button className="mx-1" variant="danger"><BsBellSlash /></Button>
                        <Button className="mx-1 background-color-2 py-0 border-0">
                            <div>Current balance</div>
                            <div>CHF</div>
                        </Button>
                    </Col>
                </Row>
            </header>
        </div>
    );
}

export default AccountHeader;