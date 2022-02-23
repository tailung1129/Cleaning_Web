import {useState} from "react";
import { Row , Col } from "react-bootstrap"

const RequestDrop = () => {
    const[dropflag , setDropflag] = useState(0);
    return(
        <Col>
            <p onClick={()=>setDropflag(1-dropflag)}>{dropflag?"conclude":"request details"}</p>
            <Col className={dropflag?"d-block":"d-none"}>
                <Row>
                    <Col md={4}>Category</Col>
                    <Col md={5}>Other Cleaning(ID:81273)</Col>
                </Row>
                <Row>
                    <Col md={4}>Contact request</Col>
                    <Col md={5}>Rough offer/advice</Col>
                </Row>
                <Row>
                    <Col md={4}>Date</Col>
                    <Col md={5}>Wednesday , 02/23/2022</Col>
                </Row>
                <Row>
                    <Col md={4}>Object</Col>
                    <Col md={5}>apartment</Col>
                </Row>
                <Row>
                    <Col md={4}>Number of Room</Col>
                    <Col md={5}>3 rooms</Col>
                </Row>
                <Row>
                    <Col md={4}>Object area</Col>
                    <Col md={5}>100 m2</Col>
                </Row>
                <Row>
                    <Col md={4}>Pollution</Col>
                    <Col md={5}>Very dirty</Col>
                </Row>
                <Row>
                    <Col md={4}>Areas</Col>
                    <Col md={5}>Parquet, window panes, blinds/shutters, slats</Col>
                </Row>
                <Row>
                    <Col md={4}>Extras</Col>
                    <Col md={5}>No</Col>
                </Row>
                <Row>
                    <Col md={4}>Location</Col>
                    <Col md={5}>5400 Baden, CH</Col>
                </Row>
                <Row>
                    <Col md={4}>Distance</Col>
                    <Col md={5}>30 kM(linear ditance)</Col>
                </Row>
                <Row>
                    <Col md={4}>Focus</Col>
                    <Col md={5}>quality</Col>
                </Row>
                <Row>
                    <Col md={4}>Tel. reachable</Col>
                    <Col md={5}>1pm-5pm</Col>
                </Row>
                <Row>
                    <Col md={4}>Discount</Col>
                    <Col md={5}>30% discount because person only entered email</Col>
                </Row>
            </Col>
        </Col>
    );
}

export default RequestDrop;